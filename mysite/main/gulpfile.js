/**
 * Created by Admin on 13.03.2018.
 */
var django = require('gulp-django-utils');
var concat = require('gulp-concat-css');
var sass = require('gulp-sass');

module.exports = function(project) {
  // Initialize application in project.
  var app = new django.Application('main', project);

  // Create task in application namespace.
  app.task('mytask', function() {
    // Take all `.js` files from `django-project/blog/static/blog/js`,
    // concatenate it and put to `django-project/static/build`.
    app.src('assets/scss/index.scss')
      .pipe(concat('main.css'))
      .pipe(project.dest('./main/static/main'));
  });
};