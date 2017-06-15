/*!
 * File:    test/modules/_index.spec.js
 * Copyright (c) 2017 Baltrushaitis Tomas
 * MIT Licensed
 */

'use strict';

(function () {

    /**
     * DEPENDENCIES
     * @private
     */

    var fs      =   require('fs');
    var path    =   require('path');
    var util    =   require('util');
    var _       =   require('lodash');
    var Chance  =   require('chance').Chance(Math.random);

    var Emcee   =   require('../modules/emcee');
    var pkg     =   require('../package.json');

    /**
     * VARIABLES
     * @var
     */

    var dataDir         =   path.resolve(pkg.options.dataSource.defaults.path);
    var dataDirStats    =   fs.statSync(dataDir);;

    /**
     * TESTS
     * @void
     */

    describe('DataSources Directory', function () {

        var listSources =   undefined;

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

        var dataInput   =   undefined;
        var listSources =   fs.readdirSync(dataDir);

        _.each(listSources, function (file, idx) {

            var dataSRC =   path.join(dataDir, file);
            describe('Run with [' + path.join(pkg.options.dataSource.defaults.path, file) + ']', function () {

                before(function () {
                    dataInput   =   (fs.readFileSync(dataSRC, pkg.options.dataSource.params)).trim().split('\n');
                });

                it('got file content', function (done) {
                    dataInput.should.be.an.Array();
                    done();
                });

                it('should be at least 2 lines of data', function (done) {
                    dataInput.should.be.an.Array().and.have.property('length').aboveOrEqual(2);
                    done();
                });

                var gameEmcee   =   new Emcee ({id: Chance.guid(), verbose: false});
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

