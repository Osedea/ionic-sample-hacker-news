Ionic Hacker News Sample App
===

## Setup

1. Prerequisites

  Make sure you have [NodeJS](https://nodejs.org/) installed on your machine.

2. Global Dependencies

  Install the project's global dependencies by executing the following commands in a terminal:

  ```bash
  $ npm install -g cordova ionic bower gulp
  ```

  _You might be required to do run the previous command using `sudo`._

3. Clone the project

  Use Git to clone the sample app onto your machine:

  ```bash
  $ git clone https://github.com/Osedea/ionic-sample-hacker-news.git
  ```

4. Install Dependencies

  Execute the following commands within the new `ionic-sample-hacker-news` directory that was created after you cloned the project:

  ```bash
  $ npm install
  $ bower install
  ```

5. Run the app

  To run the app in browser (during development), execute the following command:

  ```bash
  $ ionic serve
  ```
6. Build for iOS

  To build and run the app for iOS, make sure to have Xcode and its CLI tools installed on your machine. Also, you will need to have the following NPM modules installed globally;

  ```bash
  $ npm install -g ios-sim
  $ npm install -g ios-deploy
  ```

  Then, do the following command:

  ```bash
  $ ionic platform add ios
  ```

  _When working with a new project, you might not have the permissions to run the previous command. In this case, run the `$ ionic hooks add` command to add all necessary Cordova hooks._

  To build the app for future runs, execute this command:

  ```bash
  $ ionic build ios
  ```

  _If you notice that you're getting `FAILED pluginJSON=[...]` errors in Xcode's console, that means not all plugins have been properly added to the project build. One thing you can do is manually add the missing plugins using the `$ cordova plugin add plugin_name` command. You can check all the plugins that have been added to the build by going to `ProjectName -> Build Phases -> Compile Sources` in Xcode._

  You can run the app on your iOS device by selecting it from Xcode's device selector.

7. Build for Android

  To build and run the app for Android, make sure to have the Android SDK, Android SDK Platform-tools, Android SDK Build-tools and an Android API (latest is API 22) installed on your machine.

  Then, do the following command:

  ```bash
  $ ionic platform add android
  ```

  Similar to building for iOS, run the following command to build the for future runs:

  ```bash
  $ ionic build android
  ```

  Run in the default Android emulator by executing the following:

  ```bash
  $ ionic emulate android
  ```

  __Using Crosswalk__

  This can be achieved by doing:

  ```bash
  $ ionic browser add crosswalk
  ```

  Removing crosswalk from your project can be done with:

  ```bash
  $ ionic browser revert android
  ```
