/*!
 * File:    modules/unit.js
 * Module:  Unit
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

    /**
     * CONSTRUCTOR
     * @void
     */

    var Unit    =   function Unit (opts) {
        var self    =   this;
        var defs    =   {
                id:             Chance.hash()
              , name:           'Bot-' + Chance.first()
              , distCurrent:    0
              , speed:          0
              , killed:         false
            };

        _.extend(self, true, defs, opts || {});
    };

    /**
     * PROTOTYPE
     * @void
     */

    Unit.prototype              =   Object.create(Object.prototype);
    Unit.prototype.constructor  =   Unit;

    /**
     * METHODS
     * @public
     */

    //  Move
    Unit.prototype.move =   function () {
        var self    =   this;
        if (!self.killed) {
            var currentDist =   self.distCurrent;
            var newDist =   Math.max(0, currentDist - self.speed);
            self.distCurrent    =   newDist;
            if (currentDist !== newDist) {
                var Msg =   'Move ' + self.speed + 'm ' + '[' + currentDist + 'm' + ' --> ' + newDist + 'm' + ']';
                self.notify(Msg);
            }
        }

        return self;
    };

    // Notifier
    Unit.prototype.notify   =   function (sText) {
        var self    =   this;
        return (self.verbose
                    ?   console.log('\t[' + self.name + ']' + ':\t', (sText || 'Distance: ' + self.distCurrent + 'm; Speed: ' + self.speed + 'm; ' + (self.killed ? 'DEAD' : 'ALIVE')))
                    :   true);
    };

    /**
     * EXPORTS
     * @public
     */

    module.exports  =   Unit;

}).call(this);

