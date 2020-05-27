/*!
 * File:    test/modules/_index.spec.js
 * Copyright (c) 2017-present Baltrushaitis Tomas
 * MIT Licensed
 */

'use strict';

(function () {

  /**
   * DEPENDENCIES
   * @private
   */

  const fs     = require('fs');
  const path   = require('path');
  const util   = require('util');
  const _      = require('lodash');
  const Chance = require('chance').Chance(Math.random);
  const pkg    = require('../package.json');

  const Emcee  = require('../modules/emcee');

  /**
   * VARIABLES
   * @var
   */

  let dataDir      = path.resolve(pkg.options.dataSource.defaults.path);
  let dataDirStats = fs.statSync(dataDir);;

  /**
   * TESTS
   * @void
   */

  describe('DataSources Directory', function () {

    let listSources;

    it('EXIST', function (done) {
      dataDirStats.isDirectory().should.be.true('NOT EXIST or NOT a DIRECTORY');
      done();
    });

    it('READABLE', function (done) {
      listSources =   fs.readdirSync(dataDir);
      listSources.should.be.an.Array();
      done();
    });

    it('NOT EMPTY', function (done) {
      listSources.should.have.property('length').aboveOrEqual(1);
      done();
    });

  });

  describe('Battle Simulation', function () {
    this.slow(500);

    let dataInput;
    let listSources = fs.readdirSync(dataDir);

    _.each(listSources, function (file, idx) {

      let dataSRC = path.join(dataDir, file);
      describe('Run with [' + path.join(pkg.options.dataSource.defaults.path, file) + ']', function () {

        before(function () {
          dataInput = (fs.readFileSync(dataSRC, pkg.options.dataSource.params)).trim().split('\n');
        });

        it('got file content', function (done) {
          dataInput.should.be.an.Array();
          done();
        });

        it('should be at least 2 lines of data', function (done) {
          dataInput.should.be.an.Array().and.have.property('length').aboveOrEqual(2);
          done();
        });

        let gameEmcee = new Emcee ({id: Chance.guid(), verbose: false});
        describe('Processing data', function () {

          it('New instance of Emcee created', function (done) {
            gameEmcee.should.be.an.instanceOf(Object).and.have.property('id').which.is.a.String();
            done();
          });

          it('battle finished', function (done) {
            gameEmcee.runGame(dataInput);
            done();
          });

        });

      });

    });

  });

}).call(this);
