This app is an example app for an [issue with teaspoon](https://github.com/modeset/teaspoon/issues/487).

## Instructions

- download and run bundle install
- start server and go to localhost:3000/teaspoon and ensure tests pass
- watch the console in chrome
- bundle open teaspoon-jasmine
- edit file: lib/teaspoon-jasmine/assets/teaspoon-jasmine2.js
- under line 1298 insert:
  ```javascript
  cleanupCount = 0;
  ```
  under line 1315 insert:
  ```javascript
  cleanupCount++;
  console.log('cleanup: ', cleanupCount);
  ```
- look at the console again, noticing that after the last test cleanup gets called 3 times.

