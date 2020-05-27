/*!
 * File:    modules/emcee.js
 * Module:  Emcee
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

  const pkg  = require('../package.json');
  const Game = require('./game');

  const dline = _(50).times(function () { return '='; }).join('');

  /**
   * CONSTRUCTOR
   * @void
   */

  const Emcee = function Emcee (opts) {
    let self = this;
    let defs = {
      id:   Chance.hash()
    , Game: {}
    };

    Object.assign(self, defs, opts || {});
  };

  /**
   * PROTOTYPE
   * @void
   */

  Emcee.prototype             = Object.create(Object.prototype);
  Emcee.prototype.constructor = Emcee;

  /**
   * METHODS
   * @public
   */

  /*  Gameplay  */
  Emcee.prototype.runGame = function (Data) {
    let self = this;
    (self.verbose)
      ? console.log('\n' + dline + '\t' + 'START' + '\t' + dline + '\n')
      : false;

    //  Create an instance of the game controller
    self.Game = new Game({id: Chance.guid(), verbose: self.verbose});

    //  Setup game options and create Tower and enemies objects
    self.Game.setup(Data);
    (self.verbose) ? self.Game.Tower.notify() : false;

    //  Main game loop
    while (null === self.Game.Result.state) {
      self.Game
        .nextTurn()
        .playRound()
        .checkState();
    }
    (self.verbose) ? self.Game.logResult() : false;

    //  Insights
    if (1 === self.Game.Result.state) {
      self.getHint(Data);
    }

    (self.verbose)
      ? console.log('\n' + dline + '\t' + 'END' + '\t' + dline)
      : false;

    return self;
  };


  /*  Calculate firing range to win the game  */
  Emcee.prototype.getHint = function (loData) {
    let self      = this;
    let found     = false;
    let testRange = 0;
    let testData  = _.concat([], loData);

    //  Limit iterations count to avoid infinite loop
    let iLimit = 1000;

    while (!found && testRange < iLimit) {
      testData[0] = ++testRange;

      let testGame = new Game({id: Chance.guid(), verbose: false});
      testGame.setup(testData);

      //  Test game loop
      while (null === testGame.Result.state) {
        testGame.nextTurn()
          .playRound()
          .checkState();
      }

      if (0 === testGame.Result.state) {
        found = true;
        (self.verbose)
          ? console.log('[HINT]:\t\tMinimal firing range to win this game is: [' + testGame.Tower.fireRange + 'm]')
          : false;
      }
    }

    if (testRange == iLimit) {
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
