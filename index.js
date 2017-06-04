/*  index.js  */

/*!
 * Module:  Index
 * Copyright(c) 2017 Baltrushaitis Tomas
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

        var oGame   =   new Game({id: Chance.guid()});

        //  Read the contents of the file "input.txt" into memory.
        var dataInput   =   (fs.readFileSync(pkg.options.files.input, pkg.options.files.params)).trim().split('\n');

        oGame.setup(dataInput);
        oGame.Tower.notify();

        while (oGame.Result === null) {
            oGame.Turn++;
            oGame.playRound()
                .checkState();
        }

        console.log('\n' + dline + '\t' + 'END' + '\t' + dline);
        _(2).times(function () { console.log('\n'); });
    }

    /**
     * EXPORTS
     * @public
     */

    module.exports  =   start();

}).call(this);

