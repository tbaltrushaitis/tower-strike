/*!
 * File:    gulpfile.js
 * Copyright (c) 2017 Baltrushaitis Tomas
 * MIT Licensed
 */

'use strict';

var gulp            =   require('gulp');
var exec            =   require('gulp-exec');
var jscs            =   require('gulp-jscs');
var jshint          =   require('gulp-jshint');
var gulpSequence    =   require('gulp-sequence');
var pkg             =   require('./package.json');

var watchOptions  =   {
        ignoreInitial:  false
      , verbose:        true
      , readDelay:      100
    };
var reportOptions   =   {
        err:    true
      , stderr: true
      , stdout: true
    };


gulp.task('lint',   ['jscs', 'jshint']);
gulp.task('test',   ['mocha']);
gulp.task('watch',  ['watch:js', 'watch:spec']);


//  Watch for source code changes
gulp.task('watch:js', function () {
    var wScripts    =   gulp.watch([
                            '*.js'
                          , 'modules/*.js'
                          , '!gulpfile.js'
                        ]
                      , watchOptions
                      , function () {
                            gulpSequence('run')();
                        });
    wScripts.on('change', function (event) {
        console.info('SCRIPT ' + event.path + ' was ' + event.type + ', running tasks ... ');
    });
});


//  Watch for specs changes
gulp.task('watch:spec', function () {
    var wSpecs  =   gulp.watch([
                        'test/**/*.js'
                      , 'test/mocha.opts'
                    ]
                  , watchOptions
                  , function () {
                        gulpSequence('mocha')();
                    });
    wSpecs.on('change', function (event) {
        console.info('SPEC ' + event.path + ' was ' + event.type + ', running tasks ... ');
    });
});

//  LINTERS
gulp.task('jscs', function () {
    return  gulp.src([
                    '*.js'
                  , 'modules/*.js'
                  , '!gulpfile.js'
                ])
                .pipe(jscs('.jscsrc'))
                .pipe(jscs.reporter());
});
gulp.task('jshint', function () {
    return  gulp.src([
                    '*.js'
                  , 'modules/*.js'
                  , '!gulpfile.js'
                ])
                .pipe(jshint('.jshintrc'))
                .pipe(jshint.reporter('jshint-stylish',   {verbose: true}));
                //  , jshint.reporter('fail',           {verbose: true})
});


//  TEST with MOCHA
gulp.task('mocha', function () {
    gulp.src('')
        .pipe(exec('./node_modules/.bin/mocha'))
        .pipe(exec.reporter(reportOptions));
});


//  EXECUTE
gulp.task('run', function () {
    gulp.src('')
        .pipe(exec('node index.js'))
        .pipe(exec.reporter(reportOptions));
});


//  DEFAULT TASK
gulp.task('default', ['watch']);

/*  EOF: gulpfile.js  */
