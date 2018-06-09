/**
 * Created by Admin on 13.03.2018.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat_css = require('gulp-concat-css'),
    merge = require('merge-stream'),
    nano = require('gulp-cssnano'),
    django = require('gulp-django-utils');

var apps = ['polls','main'];
var project = new django.Project(apps);

project.discoverApps();

project.task('mytask',()=>{
     var scss = project.src('assets/**/*.scss')
        .pipe(sass())
        .pipe(concat_css('main_scss.css'));
    var css = project.src('assets/**/*.css')
        .pipe(concat_css('main_css.css'));
    var merge_d = merge(scss,css)
        .pipe(concat_css('main.css'))
        .pipe(nano())
        .pipe(project.dest('static/'));
    return merge_d;
});