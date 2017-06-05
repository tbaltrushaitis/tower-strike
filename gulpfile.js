/*  BOF: gulpfile.js  */

/*!
 * ./gulpfile.js
 * Copyright(c) 2017 Baltrushaitis Tomas
 * MIT Licensed
 */

'use strict';

var gulp            =   require('gulp');
var exec            =   require('gulp-exec');
var jscs            =   require('gulp-jscs');
var jshint          =   require('gulp-jshint');
var gulpSequence    =   require('gulp-sequence');

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
gulp.task('watch',  ['watch:js']);

//  Watch for source code changes
gulp.task('watch:js', function () {
    var wScripts    =   gulp.watch([
                            '*.js'
                          , 'modules/*.js'
                          , '!gulpfile.js'
                        ]
                      , watchOptions
                      , function () {
                            gulpSequence('lint', 'run')();
                        });
    wScripts.on('change', function (event) {
        console.info('SCRIPT ' + event.path + ' was ' + event.type + ', running tasks ... ');
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


//  EXECUTE
gulp.task('run', function () {
    gulp.src('')
        .pipe(exec('node index.js'))
        .pipe(exec.reporter(reportOptions));

});

//  DEFAULT TASK
gulp.task('default', ['watch']);

/*  EOF: gulpfile.js  */
