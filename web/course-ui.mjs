import { files, sides } from './chess.mjs';
import { lineMastery, masteryLabels } from './recall-memory.mjs';

export function courseTrack(course, progress) {
  const saved = progress.courseTracks[course.id];
  return course.tracks.find(track => track.id === saved)?.id ?? course.tracks[0].id;
}

export function courseLessons(course, track) {
  const selected = course.tracks.find(option => option.id === track) ?? course.tracks[0];
  return course.lessons.slice(0, selected.lines);
}

export function nextCourseLesson(lessons, progress, after) {
  const incomplete = lesson => !progress.lines[lesson.id]?.count;
  const afterIndex = lessons.findIndex(lesson => lesson.id === after);
  return lessons.slice(afterIndex + 1).find(incomplete) ?? lessons.find(incomplete);
}

export function renderCourseCatalog(courses, progress) {
  return `<div class="page-heading"><div><h1>Opening courses<span>.</span></h1><p>Learn a repertoire in chapters and put each line into spaced review.</p></div></div>
    <div class="course-catalog">${courses.map(course => {
      const lessons = courseLessons(course, courseTrack(course, progress));
      const finished = lessons.filter(lesson => progress.lines[lesson.id]?.count).length;
      return `<article class="card course-cover">
        <div class="course-cover-copy">
          <p class="course-side">Play as ${sides[course.side]}</p>
          <h2>${course.title}</h2>
          <p>${course.description}</p>
          <div class="course-cover-meta">${course.chapters.length} chapters <span>·</span> ${course.lessons.length} lines${finished ? ` <span>·</span> ${finished} completed in your track` : ''}</div>
          <a class="button primary" href="#courses/${course.id}">View course</a>
        </div>
        ${courseCoverBoard(course)}
      </article>`;
    }).join('')}</div>`;
}

function courseCoverBoard(course) {
  const board = course.lessons[0].positions[course.coverPly].board;
  const columns = course.side === 'w' ? [...files] : [...files].reverse();
  const ranks = course.side === 'w' ? '87654321' : '12345678';
  return `<div class="course-board-frame" aria-hidden="true"><div class="course-cover-board">${[...ranks].map((rank, row) =>
    columns.map((file, column) => {
      const piece = board[file + rank];
      return `<span class="${(row + column) % 2 ? 'course-dark-square' : 'course-light-square'}">${piece ? `<img alt="" src="./pieces/${piece}.png">` : ''}</span>`;
    }).join('')
  ).join('')}</div></div>`;
}

export function renderCourseOutline(course, progress) {
  const track = courseTrack(course, progress);
  const lessons = courseLessons(course, track);
  const chapters = course.chapters.filter(chapter => lessons.some(lesson => lesson.chapter === chapter.id));
  const completed = lessons.filter(lesson => progress.lines[lesson.id]?.count).length;
  const mastered = lessons.filter(lesson => lineMastery(progress, lesson) === 'mastered').length;
  const next = nextCourseLesson(lessons, progress);
  const nextChapter = next?.chapter ?? chapters[0]?.id;

  return `<a class="course-back text-button" href="#courses">Opening courses</a>
    <div class="card course-cover">
      <div class="course-cover-copy">
        <p class="course-side">Play as ${sides[course.side]} · ${chapters.length} chapters</p>
        <h1>${course.title}<span>.</span></h1>
        <p>${course.description}</p>
      </div>
      ${courseCoverBoard(course)}
    </div>
    <section class="course-track-section" aria-labelledby="course-track-heading">
      <h2 id="course-track-heading">Choose your track</h2>
      <div class="course-track-options" role="group" aria-label="Course depth">
        ${course.tracks.map(option => `<button type="button" class="course-track" aria-pressed="${track === option.id}" data-course="${course.id}" data-track="${option.id}">
          <span><strong>${option.title}</strong><small>${option.description}</small></span>
          <span class="course-track-count"><b>${option.lines}</b> lines</span>
        </button>`).join('')}
      </div>
    </section>
    <section class="card course-progress" aria-labelledby="course-progress-heading">
      <div>
        <h2 id="course-progress-heading">Your progress</h2>
        <p>${completed} of ${lessons.length} lines completed in Recall · ${mastered} mastered</p>
        <progress value="${completed}" max="${lessons.length}" aria-label="Course lines completed"></progress>
      </div>
      ${next ? `<button class="button primary" type="button" data-line="${next.id}" data-mode="study">${completed ? 'Continue course' : 'Start course'}</button>`
          : '<a class="button primary" href="#review">Open review queue</a>'}
    </section>
    <section aria-labelledby="syllabus-heading" class="course-syllabus">
      <h2 id="syllabus-heading">Course outline</h2>
      ${chapters.map(chapter => {
        const chapterLessons = lessons.filter(lesson => lesson.chapter === chapter.id);
        const done = chapterLessons.filter(lesson => progress.lines[lesson.id]?.count).length;
        return `<details class="card course-chapter"${nextChapter === chapter.id ? ' open' : ''}>
          <summary><span>${chapter.title}</span><span class="course-chapter-progress">${done} / ${chapterLessons.length} complete</span></summary>
          <p>${chapter.description}</p>
          <ul class="course-lesson-list">${chapterLessons.map(lesson => {
            const status = lineMastery(progress, lesson);
            return `<li>
              <div><strong>${lesson.variation}</strong><p>${lesson.caption}</p></div>
              ${status ? `<span class="mastery-status ${status}">${masteryLabels[status]}</span>` : ''}
              <div class="course-lesson-actions">
                <button class="button secondary" type="button" data-line="${lesson.id}" data-mode="study">Study</button>
                <button class="button secondary" type="button" data-line="${lesson.id}" data-mode="recall">Recall</button>
              </div>
            </li>`;
          }).join('')}</ul>
        </details>`;
      }).join('')}
    </section>
    <p class="course-credit">${course.credit} <a href="https://explorer.lichess.ovh/masters?play=${course.masterPosition}&amp;topGames=0" target="_blank" rel="noopener noreferrer">Lichess Masters opening data</a></p>`;
}
