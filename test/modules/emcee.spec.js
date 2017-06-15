/*!
 * File:    test/modules/emcee.spec.js
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
    var Emcee   =   require('../../modules/emcee');

    /**
     * SETTINGS
     * @void
     */

    var lstMethods  =   [
            'runGame'
          , 'getHint'
        ];
    var mOpts   =   {
            id: Chance.guid()
        };
    var Mod =   new Emcee(mOpts);

    /**
     * TESTS
     * @void
     */

    describe('Emcee', function () {

        it('Instance created', function (done) {
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

