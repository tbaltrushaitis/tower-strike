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

        it('Instance created', function () {
            Mod.should.be.an.instanceOf(Object);
        });

        describe('Have property', function () {

            it('id\t\t(String)', function () {
                Mod.should.have.property('id').which.is.a.String();
            });

            it('Game\t\t(Object)', function () {
                Mod.should.have.property('Game').which.is.a.Object();
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

