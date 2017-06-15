/*!
 * File:    test/modules/tower.spec.js
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
    var Tower   =   require('../../modules/tower');

    /**
     * SETTINGS
     * @void
     */

    var lstMethods  =   ['notify'];
    var mOpts   =   {
            fireRange:  Chance.natural({min: 10, max: 50})
          , id:         Chance.guid()
        };
    var Mod     =   new Tower(mOpts);

    /**
     * TESTS
     * @void
     */

    describe('Tower', function () {

        it('Instance created', function (done) {
            Mod.should.be.an.instanceOf(Object);
            done();
        });

        describe('Have property', function () {

            it('id\t\t(String)', function (done) {
                Mod.should.have.property('id').which.is.a.String();
                done();
            });

            it('fireRange\t(Number)', function (done) {
                Mod.should.have.property('fireRange').which.is.a.Number();
                done();
            });

            it('verbose\t\t(Boolean)', function (done) {
                Mod.should.have.property('verbose').which.is.a.Boolean().and.is.false();
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

