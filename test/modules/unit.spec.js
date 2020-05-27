/*!
 * File:    test/modules/unit.spec.js
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

  const Unit   = require('../../modules/unit');

  /**
   * SETTINGS
   * @void
   */

  let lstMethods = [
      'notify'
    , 'move'
  ];
  let mOpts = {
      id:          Chance.guid()
    , name:        Chance.first()
    , distCurrent: Chance.natural({min: 50, max: 120})
    , speed:       Chance.natural({min: 10, max: 30})
  };
  let Mod = new Unit(mOpts);

  /**
   * TESTS
   * @void
   */

  describe('Unit', function () {

    it('Instantiated', function (done) {
      Mod.should.be.an.instanceOf(Object);
      done();
    });

    describe('Have property', function () {

      it('id\t\t(String)', function (done) {
        Mod.should.have.property('id').which.is.a.String();
        done();
      });

      it('name\t\t(String)', function (done) {
        Mod.should.have.property('name').which.is.a.String();
        done();
      });

      it('distCurrent\t(Number)', function (done) {
        Mod.should.have.property('distCurrent').which.is.a.Number();
        done();
      });

      it('speed\t\t(Number)', function (done) {
        Mod.should.have.property('speed').which.is.a.Number();
        done();
      });

      it('killed\t\t(Boolean)', function (done) {
        Mod.should.have.property('killed').which.is.a.Boolean().and.is.false();
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
