/*  modules/unit.js  */

/*!
 * Module:  Unit
 * Copyright(c) 2017 Baltrushaitis Tomas
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
              , speed:          0
              , distInitial:    0
              , distCurrent:    0
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
            var distCur =   self.distCurrent;
            var distNew =   Math.max(0, self.distCurrent - self.speed);
            self.distCurrent    =   distNew;
            if (distCur !== distNew) {
                var Msg =   'Move ' + self.name + ' ' + '[' + distCur + 'm' + ' --> ' + distNew + 'm' + ']';
                /* self.notify(Msg); */
            }
        }

        return self;
    };

    // Notifier
    Unit.prototype.notify   =   function (sText) {
        var self    =   this;
        return console.log('\t', (sText || 'Distance: ' + self.distCurrent + 'm; Speed: ' + self.speed + 'm'));
    };

    /**
     * EXPORTS
     * @public
     */

    module.exports  =   Unit;

}).call(this);

