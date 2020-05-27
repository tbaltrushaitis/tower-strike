/*!
 * File:    index.js
 * Module:  Index
 * Copyright (c) 2017-present Baltrushaitis Tomas
 * MIT Licensed
 */

'use strict';

(function () {

  /**
   * DEPENDENCIES
   * @private
   */

  const fs   = require('fs');
  const path = require('path');
  const util = require('util');

  const _      = require('lodash');
  const Chance = require('chance').Chance(Math.random);

  const pkg   = require('./package.json');
  const Emcee = require('./modules/emcee');
  const dline = _(50).times(function () { return '='; }).join('');

  /**
   * VARIABLES
   * @var
   */

  let dataSRC     = undefined;
  let dataInput   = undefined;
  let dataDefault = path.resolve(pkg.options.dataSource.defaults.path, pkg.options.dataSource.defaults.file);
  let Args        = process.argv.slice(2);

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
  const gameEmcee = new Emcee ({id: Chance.guid(), verbose: true});
  gameEmcee.runGame(dataInput);

}).call(this);
