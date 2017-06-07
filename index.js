/*!
 * File:    index.js
 * Module:  Index
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
    var _       =   require('lodash');
    var Chance  =   require('chance').Chance(Math.random);

    var pkg     =   require('./package.json');
    var Game    =   require('./modules/game');

    var dline   =   _(50).times(function () { return '='; }).join('');

    /**
     * METHODS
     * @public
     */

    /*  Gameplay  */
    function start () {
        console.log('\n' + dline + '\t' + 'START' + '\t' + dline + '\n');

        //  Read the contents of the input file into memory
        console.info('[Input]:\tSource file used: [' + pkg.options.files.input + ']');
        var dataInput   =   (fs.readFileSync(pkg.options.files.input, pkg.options.files.params)).trim().split('\n');

        //  Create an instance of the game controller
        var oGame   =   new Game({id: Chance.guid(), verbose: true});

        //  Setup game options and create Tower and enemies objects
        oGame.setup(dataInput);
        oGame.Tower.notify();

        //  Main game loop
        while (oGame.Result.state === null) {
            oGame.nextTurn()
                .playRound()
                .checkState();
        }
        oGame.logResult();

        //  Insights
        if (oGame.Result.state === 1) {
            getHint(dataInput);
        }

        console.log('\n' + dline + '\t' + 'END' + '\t' + dline);
        _(2).times(function () { console.log('\n'); });
    }

    /*  Calculate firing range to win the game  */
    function getHint (loData) {
        var found       =   false;
        var testRange   =   0;
        var testData    =   _.concat([], loData);

        //  Limit iterations count to avoid infinite loop
        var iLimit      =   1000;

        while (!found && testRange < iLimit) {
            testData[0] =   ++testRange;

            var testGame    =   new Game({id: Chance.guid(), verbose: false});
            testGame.setup(testData);

            //  Test game loop
            while (testGame.Result.state === null) {
                testGame.nextTurn()
                    .playRound()
                    .checkState();
            }

            if (testGame.Result.state === 0) {
                found   =   true;
                console.log('[HINT]:\t\tMinimal firing range to win this game is: [' + testGame.Tower.fireRange + 'm]');
            }
        }

        if (testRange == iLimit) {
            console.log('[WARNING]:\tIterations limit reached!');
        }
    }

    /**
     * EXPORTS
     * @public
     */

    module.exports  =   start();

}).call(this);

