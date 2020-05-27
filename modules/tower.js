/*!
 * File:    modules/tower.js
 * Module:  Tower
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

  const Tower = function Tower (opts) {
    let self = this;
    let defs = {
        id:        Chance.hash()
      , fireRange: parseInt('0m')
      , verbose:   false
    };

    Object.assign(self, defs, opts || {});
  };

  /**
   * PROTOTYPE
   * @void
   */

  Tower.prototype             = Object.create(Object.prototype);
  Tower.prototype.constructor = Tower;

  /**
   * METHODS
   * @public
   */

  //  Notifier
  Tower.prototype.notify = function (sText) {
    let self = this;
    return (self.verbose
            ? console.log('[' + self.constructor.name + ']:\t' + (sText || 'Firing range is [' + self.fireRange + 'm]'))
            : true);
  };

  /**
   * EXPORTS
   * @public
   */

  module.exports = Tower;

}).call(this);
