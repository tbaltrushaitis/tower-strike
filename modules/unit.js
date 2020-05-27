/*!
 * File:    modules/unit.js
 * Module:  Unit
 * Copyright (c) 2017-present Baltrushaitis Tomas
 * MIT Licensed
 */

'use strict';

(function () {

  /**
   * DEPENDENCIES
   * @private
   */

  const _      = require('lodash');
  const Chance = require('chance').Chance(Math.random);

  /**
   * CONSTRUCTOR
   * @void
   */

  const Unit = function Unit (opts) {
    let self = this;
    let defs = {
        id:          Chance.hash()
      , name:        'Bot-' + Chance.first()
      , distCurrent: 0
      , speed:       0
      , killed:      false
    };

    Object.assign(self, defs, opts || {});
  };

  /**
   * PROTOTYPE
   * @void
   */

  Unit.prototype             = Object.create(Object.prototype);
  Unit.prototype.constructor = Unit;

  /**
   * METHODS
   * @public
   */

  //  Move
  Unit.prototype.move = function () {
    let self = this;
    if (!self.killed) {
      let currentDist = self.distCurrent;
      let newDist = Math.max(0, currentDist - self.speed);
      self.distCurrent = newDist;
      if (currentDist !== newDist) {
        let Msg = 'Move ' + self.speed + 'm ' + '[' + currentDist + 'm' + ' --> ' + newDist + 'm' + ']';
        self.notify(Msg);
      }
    }

    return self;
  };

  //  Notifier
  Unit.prototype.notify = function (sText) {
    let self = this;
    return (self.verbose
      ? console.log(
        '\t['
        + self.name + ']'
        + ':\t'
        , (sText || 'Distance: '
          + self.distCurrent
          + 'm; Speed: '
          + self.speed
          + 'm; '
          + (self.killed ? 'DEAD' : 'ALIVE'))
        )
      : true
    );
  };

  /**
   * EXPORTS
   * @public
   */

  module.exports = Unit;

}).call(this);
