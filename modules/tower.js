/*  modules/tower.js  */

/*!
 * Module:  Tower
 * Copyright(c) 2017 Baltrushaitis Tomas
 * MIT Licensed
 */

'use strict';

(function () {

    /**
     * DEPENDENCIES
     * @private
     */

    var EventEmitter    =   require('events').EventEmitter;

    // var util            =   require('util');
    // var inherits        =   require('util').inherits;

    var _               =   require('lodash');
    var Chance          =   require('chance').Chance(Math.random);

    /**
     * CONSTRUCTOR
     * @void
     */

    var Tower =   function Tower (opts) {

        EventEmitter.call(this);

        var self = this;
        var defs    =   {
                        id:         Chance.hash()
                        , fireRange:  parseInt('0m')
                    };

        _.extend(self, true, defs, opts || {});

        //  INHERIT EventEmitter
        // inherits(self, EventEmitter);

    };

    /**
     * PROTOTYPE
     * @void
     */

    Tower.prototype             =   Object.create(Object.prototype);
    Tower.prototype.constructor =   Tower;

    /**
     * METHODS
     * @public
     */

    //  Notifier
    Tower.prototype.notify  =   function (sText) {
        var self    =   this;
        return console.log('[' + self.constructor.name + ']' + ':\t' + (sText || 'Firing range is [' + self.fireRange + 'm]'));
    };

    /**
     * EXPORTS
     * @public
     */

    module.exports  =   Tower;

}).call(this);

