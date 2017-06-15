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

        it('Instance created', function () {
            Mod.should.be.an.instanceOf(Object);
        });

        describe('Have property', function () {

            it('id\t\t(String)', function () {
                Mod.should.have.property('id').which.is.a.String();
            });

            it('fireRange\t(Number)', function () {
                Mod.should.have.property('fireRange').which.is.a.Number();
            });

            it('verbose\t\t(Boolean)', function () {
                Mod.should.have.property('verbose').which.is.a.Boolean().and.is.false();
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

