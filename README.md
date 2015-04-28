Ionic Hacker News Sample App
===

# Installation

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

  To build and run the app for iOS, do the following command:

  ```bash
  $ ionic platform add ios
  ```

  _When working with a new project, you might not have the permissions to run the previous command. In this case, run the `$ ionic hooks add` command to add all necessary Cordova hooks._

  To build the app for future runs, execute this command:

  ```bash
  $ ionic build ios
  ```
