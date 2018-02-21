/*  modules/logger.js  */

/*!
 * Module:  Logger
 * Copyright(c) 2017 Baltrushaitis Tomas
 * MIT Licensed
 */

'use strict';

(function () {

    /**
     * DEPENDENCIES
     * @private
     */

    var winston =   require('winston');
    var path    =   require('path');

    /**
     * CONSTRUCTOR
     * @void
     */

    var Logger  =   function Logger (module) {

        var logLabel    =   module.filename.split('/').slice(-2).join('/');
        var logDir      =   path.join(__dirname, '../..', 'log') + path.sep;
        var logLevels   =   {
                levels: {
                    error:      0
                  , warn:       1
                  , info:       2
                  , verbose:    3
                  , debug:      4
                  , silly:      5
                  , Log:        6
                }
              , colors: {
                    error:      'red'
                  , warn:       'yellow'
                  , info:       'cyan'
                  , verbose:    'blue'
                  , debug:      'magenta'
                  , silly:      'rainbow'
                  , Log:        'grey'
                }
            };

        return new winston.Logger({
            exitOnError:    false
          , levels:         logLevels.levels
          , colors:         logLevels.colors
          , transports: [

                new winston.transports.Console({
                    colorize:           true
                  , handleExceptions:   true
                  , json:               false
                  , level:              'Log'
                  , label:              logLabel
                  , timestamp:          true
                })

              , new (winston.transports.File)({
                    filename:   logDir + 'error.log'
                  , label:      logLabel
                  , level:      'error'
                  , name:       'error-file'
                  , timestamp:  true
                })

              , new (winston.transports.File)({
                    filename:   logDir + 'warn.log'
                  , label:      logLabel
                  , level:      'warn'
                  , name:       'warn-file'
                  , timestamp:  true
                })

              , new (winston.transports.File)({
                    filename:   logDir + 'info.log'
                  , label:      logLabel
                  , level:      'info'
                  , name:       'info-file'
                  , timestamp:  true
                })

              , new (winston.transports.File)({
                    filename:   logDir + 'verbose.log'
                  , label:      logLabel
                  , level:      'verbose'
                  , name:       'verbose-file'
                  , timestamp:  true
                })

              , new (winston.transports.File)({
                    filename:   logDir + 'debug.log'
                  , label:      logLabel
                  , level:      'debug'
                  , name:       'debug-file'
                  , timestamp:  true
                })

              , new (winston.transports.File)({
                    filename:   logDir + 'silly.log'
                  , label:      logLabel
                  , level:      'silly'
                  , name:       'silly-file'
                  , timestamp:  true
                })

            ]
        });

    };

    /**
     * EXPORTS
     * @public
     */

    module.exports  =   Logger;

}).call(this);

