/*!
 * File:    test/modules/game.spec.js
 * Copyright (c) 2017 Baltrushaitis Tomas
 * MIT Licensed
 */

'use strict';

(function () {

    /**
     * DEPENDENCIES
     * @private
     */

    var _       =   require('lodash');
    var Chance  =   require('chance').Chance(Math.random);
    var Game    =   require('../../modules/game');

    /**
     * SETTINGS
     * @void
     */

    var lstMethods  =   [
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
    var mOpts   =   {
            id: Chance.guid()
        };
    var Mod =   new Game(mOpts);

    /**
     * TESTS
     * @void
     */

    describe('Game', function () {

        it('Instance created', function () {
            Mod.should.be.an.instanceOf(Object);
        });

        describe('Have property', function () {

            it('id\t\t(String)', function () {
                Mod.should.have.property('id').which.is.a.String();
            });

            it('Enemies\t\t(Array)', function () {
                Mod.should.have.property('Enemies').which.is.a.Array();
            });

            it('Result\t\t(Object)', function () {
                Mod.should.have.property('Result').which.is.a.Object();
            });

            it('Tower\t\t(Object)', function () {
                Mod.should.have.property('Tower').which.is.a.Object();
            });

            it('Turn\t\t(Number)', function () {
                Mod.should.have.property('Turn').which.is.a.Number();
            });

            it('States\t\t(Object)', function () {
                Mod.should.have.property('States').which.is.a.Object();
            });

        });

        describe('Have method', function () {

            _.each(lstMethods, function (m, i) {
                it(m + '()', function () {
                    Mod.should.have.property(m);
                    Mod[m].should.be.Function();
                });
            });

        });

    });

}).call(this);

