/*!
 * File:    test/modules/emcee.spec.js
 * Copyright (c) 2017-present Baltrushaitis Tomas
 * MIT Licensed
 */

'use strict';

(function () {

  /**
   * DEPENDENCIES
   * @private
   */

  const _      = require('lodash');
  const Chance = require('chance').Chance(Math.random);

  const Emcee  = require('../../modules/emcee');

  /**
   * SETTINGS
   * @void
   */

  let lstMethods = [
      'runGame'
    , 'getHint'
  ];
  let mOpts = {
    // id: Chance.guid()
  };
  let Mod = new Emcee(mOpts);

  /**
   * TESTS
   * @void
   */

  describe('Emcee', function () {

    it('Instantiated', function (done) {
      Mod.should.be.an.instanceOf(Object);
      done();
    });

    describe('Have property', function () {
      it('id\t\t(String)', function (done) {
        Mod.should.have.property('id').which.is.a.String();
        done();
      });

      it('Game\t\t(Object)', function (done) {
        Mod.should.have.property('Game').which.is.a.Object();
        done();
      });
    });

    describe('Have method', function () {
      _.each(lstMethods, function (m, i) {
        it(1 + i + '. ' + m + '()', function (done) {
          Mod.should.have.property(m).which.is.a.Function();
          done();
        });
      });
    });

  });

}).call(this);
