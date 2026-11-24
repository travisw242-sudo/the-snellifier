# The Snellifier for iPhone

The Xcode project bundles the board, courses and Mixed Recall for offline use. It targets iPhone on iOS 16.4 or later. Training progress stays in the app’s on-device storage.

## Build on a Mac

1. For a repository checkout, run these commands from the repository root to prepare the offline assets.

   ```sh
   npm ci --prefix platforms
   node platforms/prepare-web.mjs ios platforms/ios/OpeningLab/Web
   ```

2. Open `platforms/ios/OpeningLab.xcodeproj` in Xcode.
3. Select the **OpeningLab** target and set your Apple Developer team under **Signing & Capabilities**. If your team needs a different bundle identifier, set it in `OpeningLab.xcconfig`.
4. Run the app on an iPhone simulator or a connected iPhone to check it before distribution.

## Share it with a friend

1. Register the app with your team in App Store Connect using the same bundle identifier.
2. In Xcode select a generic iOS device, choose **Product → Archive**, then use **Distribute App** to upload the archive to App Store Connect.
3. In **TestFlight**, add the build to an external testing group and submit it for Apple’s beta review. After approval, invite your friend by email or send the group’s invitation link. Your friend installs it through the TestFlight app. [Apple’s external tester instructions](https://developer.apple.com/help/app-store-connect/test-a-beta-version/invite-external-testers/)

The packaged iPhone ZIP already includes the web assets. Open its Xcode project directly to build it.
