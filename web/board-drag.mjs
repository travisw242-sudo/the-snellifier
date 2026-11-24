export function enablePieceDragging(board, { destinationsFor, playMove, selectOrigin }) {
  let drag = null;
  let returning = null;
  let suppressClick = false;

  function positionPiece(piece, x, y) {
    return `translate3d(${x - piece.width / 2}px, ${y - piece.height / 2}px, 0)`;
  }

  function targetAt(event) {
    const square = document.elementFromPoint(event.clientX, event.clientY)?.closest('[data-square]');
    return square && board.contains(square) ? square : null;
  }

  function styleDestinations(gesture) {
    const legal = destinationsFor(gesture.origin.dataset.square);
    for (const square of board.querySelectorAll('[data-square]')) {
      const isOrigin = square === gesture.origin;
      const isDestination = legal.includes(square.dataset.square);
      const wasSelected = square.classList.contains('selected');
      const wasDestination = square.classList.contains('destination');
      if (isOrigin === wasSelected && isDestination === wasDestination) continue;
      square.classList.toggle('selected', isOrigin);
      square.classList.toggle('destination', isDestination);
      gesture.restore.push(() => {
        square.classList.toggle('selected', wasSelected);
        square.classList.toggle('destination', wasDestination);
      });
    }
  }

  function clearTarget(gesture) {
    gesture.target?.classList.remove('drag-target', 'drag-target-blocked');
    gesture.target = null;
  }

  function releaseDrag(keepPiece = false) {
    const gesture = drag;
    drag = null;
    if (!gesture?.piece) return;
    suppressClick = true;
    clearTarget(gesture);
    for (const restore of gesture.restore) restore();
    board.classList.remove('dragging');
    gesture.origin.classList.remove('drag-origin');
    if (board.hasPointerCapture(gesture.pointer)) board.releasePointerCapture(gesture.pointer);
    if (!keepPiece) gesture.piece.remove();
  }

  function clearReturn() {
    if (!returning) return;
    const { piece, origin, animation } = returning;
    returning = null;
    animation.cancel();
    piece.remove();
    origin.classList.remove('drag-origin');
  }

  function returnPiece(piece, from) {
    const origin = board.querySelector(`[data-square="${from}"]`);
    const source = origin?.querySelector('.piece');
    if (!source || !piece.animate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      piece.remove();
      return;
    }
    const rect = source.getBoundingClientRect();
    origin.classList.add('drag-origin');
    const atOrigin = positionPiece(piece, rect.left + rect.width / 2, rect.top + rect.height / 2);
    const animation = piece.animate([{ transform: piece.style.transform }, { transform: atOrigin }], {
      duration: 150,
      easing: 'ease-out',
    });
    returning = { piece, origin, animation };
    animation.finished.then(() => {
      if (returning?.animation === animation) clearReturn();
    }, () => {});
  }

  board.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0 || drag) return;
    suppressClick = false;
    clearReturn();
    const origin = event.target.closest('.movable');
    if (!origin) return;
    drag = { origin, pointer: event.pointerId, x: event.clientX, y: event.clientY, restore: [] };
  });

  window.addEventListener('pointermove', event => {
    if (event.pointerId !== drag?.pointer) return;
    if (!drag.piece) {
      const distance = Math.hypot(event.clientX - drag.x, event.clientY - drag.y);
      if (distance < (event.pointerType === 'touch' ? 7 : 4)) return;
      const source = drag.origin.querySelector('.piece');
      if (!source) { releaseDrag(); return; }
      const rect = source.getBoundingClientRect();
      const piece = source.cloneNode();
      piece.className = 'drag-piece';
      piece.width = Math.round(rect.width);
      piece.height = Math.round(rect.height);
      piece.style.transform = positionPiece(piece, event.clientX, event.clientY);
      document.body.append(piece);
      drag.piece = piece;
      styleDestinations(drag);
      drag.origin.classList.add('drag-origin');
      board.classList.add('dragging');
      board.setPointerCapture(event.pointerId);
    }
    drag.piece.style.transform = positionPiece(drag.piece, event.clientX, event.clientY);
    const target = targetAt(event);
    if (target === drag.target) return;
    clearTarget(drag);
    if (!target || target === drag.origin) return;
    drag.target = target;
    target.classList.add(target.classList.contains('destination') ? 'drag-target' : 'drag-target-blocked');
  });

  window.addEventListener('pointerup', event => {
    if (event.pointerId !== drag?.pointer) return;
    const { origin, piece } = drag;
    const from = origin.dataset.square;
    const to = piece ? targetAt(event)?.dataset.square : null;
    releaseDrag(Boolean(piece));
    if (!piece) return;
    piece.style.transform = positionPiece(piece, event.clientX, event.clientY);
    if (!to || to === from) {
      selectOrigin(from);
      returnPiece(piece, from);
    } else if (playMove(from, to)) {
      piece.remove();
    } else {
      returnPiece(piece, from);
    }
  });

  window.addEventListener('pointercancel', event => {
    if (event.pointerId === drag?.pointer) releaseDrag();
  });
  board.addEventListener('lostpointercapture', event => {
    if (event.target === board && event.pointerId === drag?.pointer) releaseDrag();
  });
  window.addEventListener('blur', () => releaseDrag());

  return {
    cancel() {
      releaseDrag();
      clearReturn();
    },
    ignoreClick: event => suppressClick && event.detail > 0,
  };
}
