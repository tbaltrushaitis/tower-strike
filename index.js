/*!
 * File:    index.js
 * Module:  Index
 * Copyright (c) 2017 Baltrushaitis Tomas
 * MIT Licensed
 */

'use strict';

(function () {

  /**
   * DEPENDENCIES
   * @private
   */

  var fs     = require('fs');
  var path   = require('path');
  var util   = require('util');
  var _      = require('lodash');
  var Chance = require('chance').Chance(Math.random);

  var pkg    = require('./package.json');
  var Emcee  = require('./modules/emcee');

  /**
   * VARIABLES
   * @var
   */

  var dline = _(50).times(function () { return '='; }).join('');

  var Args        = process.argv.slice(2);
  var dataSRC     = undefined;
  var dataInput   = undefined;
  var dataDefault = path.resolve(pkg.options.dataSource.defaults.path, pkg.options.dataSource.defaults.file);

  //  If name of the source file passed as command-line parameter - use it
  //  otherwise - get file name from package.json
  dataSRC = (Args.length && Args[0])
              ? path.resolve(Args[0])
              : dataDefault;
  console.info('[Input]:\tDataSource used: [' + dataSRC + ']');

  //  Read the contents of the input file into memory
  if (fs.existsSync(dataSRC)) {
    dataInput = (fs.readFileSync(dataSRC, pkg.options.dataSource.params)).trim().split('\n');
  }

  if ('undefined' === typeof dataInput) {
    console.warn('[Input]:\tDataSource NOT EXIST. Stop execution.');
    return false;
  }

  /**
   * METHODS
   * @public
   */

  //  console.info('[Input]:\tType of data extracted from source:', typeof dataInput);
  var gameEmcee = new Emcee ({id: Chance.guid(), verbose: true});
  gameEmcee.runGame(dataInput);

}).call(this);
