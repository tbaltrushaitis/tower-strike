/*!
 * File:    test/modules/game.spec.js
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

  const Game   = require('../../modules/game');

  /**
   * SETTINGS
   * @void
   */

  let lstMethods = [
      'setup'
    , 'nextTurn'
    , 'playRound'
    , 'shot'
    , 'getEnemies'
    , 'moveEnemies'
    , 'checkState'
    , 'notify'
    , 'logResult'
  ];
  let mOpts = {
    id: Chance.guid()
  };
  let Mod = new Game(mOpts);

  /**
   * TESTS
   * @void
   */

  describe('Game', function () {

    it('Instantiated', function (done) {
      Mod.should.be.an.instanceOf(Object);
      done();
    });

    describe('Have property', function () {

      it('id\t\t(String)', function (done) {
        Mod.should.have.property('id').which.is.a.String();
        done();
      });

      it('Enemies\t\t(Array)', function (done) {
        Mod.should.have.property('Enemies').which.is.a.Array();
        done();
      });

      it('Result\t\t(Object)', function (done) {
        Mod.should.have.property('Result').which.is.a.Object();
        done();
      });

      it('Tower\t\t(Object)', function (done) {
        Mod.should.have.property('Tower').which.is.a.Object();
        done();
      });

      it('Turn\t\t(Number)', function (done) {
        Mod.should.have.property('Turn').which.is.a.Number();
        done();
      });

      it('States\t\t(Object)', function (done) {
        Mod.should.have.property('States').which.is.a.Object();
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
