/*!
 * File:    test/modules/unit.spec.js
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
    var Unit    =   require('../../modules/unit');

    /**
     * SETTINGS
     * @void
     */

    var lstMethods  =   [
            'notify'
          , 'move'
        ];
    var mOpts   =   {
            id:             Chance.guid()
          , name:           Chance.first()
          , distCurrent:    Chance.natural({min: 50, max: 120})
          , speed:          Chance.natural({min: 10, max: 30})
        };
    var Mod     =   new Unit(mOpts);

    /**
     * TESTS
     * @void
     */

    describe('Enemy', function () {

        it('Instance created', function () {
            Mod.should.be.an.instanceOf(Object);
        });

        describe('Have property', function () {

            it('id\t\t(String)', function () {
                Mod.should.have.property('id').which.is.a.String();
            });

            it('name\t\t(String)', function () {
                Mod.should.have.property('name').which.is.a.String();
            });

            it('distCurrent\t(Number)', function () {
                Mod.should.have.property('distCurrent').which.is.a.Number();
            });

            it('speed\t\t(Number)', function () {
                Mod.should.have.property('speed').which.is.a.Number();
            });

            it('killed\t\t(Boolean)', function () {
                Mod.should.have.property('killed').which.is.a.Boolean().and.is.false();
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

