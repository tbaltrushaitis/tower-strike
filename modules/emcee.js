/*!
 * File:    modules/emcee.js
 * Module:  Emcee
 * Copyright (c) 2017 Baltrushaitis Tomas
 * MIT Licensed
 */

'use strict';

(function () {

  /**
   * DEPENDENCIES
   * @private
   */

  var _      = require('lodash');
  var Chance = require('chance').Chance(Math.random);

  var pkg  = require('../package.json');
  var Game = require('./game');

  /**
   * CONSTRUCTOR
   * @void
   */

  var Emcee = function Emcee (opts) {
    var self = this;
    var defs = {
          id: Chance.hash()
        , Game: {}
      };

    _.extend(self, true, defs, opts || {});
  };

  /**
   * PROTOTYPE
   * @void
   */

  Emcee.prototype             = Object.create(Object.prototype);
  Emcee.prototype.constructor = Emcee;

  /**
   * STUFF
   * @void
   */

  var dline = _(50).times(function () { return '='; }).join('');

  /**
   * METHODS
   * @public
   */

  // Gameplay
  Emcee.prototype.runGame = function (Data) {
    var self = this;
    (self.verbose) ? console.log('\n' + dline + '\t' + 'START' + '\t' + dline + '\n') : false;

    //  Create an instance of the game controller
    self.Game = new Game({id: Chance.guid(), verbose: self.verbose});

    //  Setup game options and create Tower and enemies objects
    self.Game.setup(Data);
    (self.verbose) ? self.Game.Tower.notify() : false;

    //  Main game loop
    while (self.Game.Result.state === null) {
      self.Game.nextTurn()
        .playRound()
        .checkState();
    }
    (self.verbose) ? self.Game.logResult() : false;

    //  Insights
    if (self.Game.Result.state === 1) {
      self.getHint(Data);
    }

    (self.verbose) ? console.log('\n' + dline + '\t' + 'END' + '\t' + dline) : false;

    return self;
  };


  // Calculate firing range to win the game
  Emcee.prototype.getHint = function (loData) {
    var self      = this;
    var found     = false;
    var testRange = 0;
    var testData  = _.concat([], loData);

    //  Limit iterations count to avoid infinite loop
    var iLimit = 1000;

    while (!found && testRange < iLimit) {
      testData[0] = ++testRange;

      var testGame = new Game({id: Chance.guid(), verbose: false});
      testGame.setup(testData);

      //  Test game loop
      while (testGame.Result.state === null) {
        testGame.nextTurn()
          .playRound()
          .checkState();
      }

      if (testGame.Result.state === 0) {
        found = true;
        (self.verbose)
          ? console.log('[HINT]:\t\tMinimal firing range to win this game is: [' + testGame.Tower.fireRange + 'm]')
          : false;
      }
    }

    if (testRange === iLimit) {
      console.log('[WARNING]:\tIterations limit reached!');
    }

    return self;
  };


  /**
   * EXPORTS
   * @public
   */

  module.exports = Emcee;

}).call(this);
