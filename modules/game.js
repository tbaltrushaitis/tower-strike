/*!
 * File:    modules/game.js
 * Module:  Game
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

  const Tower = require('./tower');
  const Unit  = require('./unit');

  /**
   * CONSTRUCTOR
   * @void
   */

  const Game = function Game (opts) {
    let self = this;
    let defs = {
      id:        Chance.hash()
    , Enemies:   []
    , Result:    {
        state:   null
      , message: ''
      }
    , Tower: {}
    , Turn:  0
    , States: [
        'WIN'
      , 'LOSE'
      ]
    };

    Object.assign(self, defs, opts || {});
  };

  /**
   * PROTOTYPE
   * @void
   */

  Game.prototype             = Object.create(Object.prototype);
  Game.prototype.constructor = Game;

  /**
   * METHODS
   * @public
   */

  //  Setup
  Game.prototype.setup = function (lo) {
    let self = this;
    Object.assign(self, self.defs);

    let towerFireRange = parseInt(lo[0]);
    self.Tower = new Tower({
                    fireRange: towerFireRange
                  , id:        Chance.guid()
                  , verbose:   self.verbose
                });

    let listUnits = _.drop(lo);
    _.each(listUnits, function (sInput) {
      let botData = sInput.split(' ');
      let botOpts = {
          id:          Chance.guid()
        , name:        botData[0]
        , distCurrent: parseInt(botData[1])
        , speed:       parseInt(botData[2])
      };
      let oUnit = new Unit(botOpts);
      self.Enemies.push(oUnit);
    });

    return self;
  };

  //  Increment turn counter
  Game.prototype.nextTurn = function () {
    let self = this;
    self.Turn++;
    return self;
  };

  //  Play Round
  Game.prototype.playRound = function () {
    let self = this;
    self.shot().moveEnemies();
    return self;
  };

  //  Tower fire one time
  Game.prototype.shot = function () {
    let self = this;

    //  Sort enemies list by distance to Tower (ascending) AND speed (descending)
    //  this allow to kill enemies in fast and secure way
    let Enemies = _.sortBy(self.getEnemies(), ['distCurrent', function (o) {
      return -1 * o.speed;
    }]);

    //  Check each enemy unit distance and kill the nearest
    _.each(Enemies, function (oEnemy) {
      if (oEnemy.distCurrent <= self.Tower.fireRange) {
        oEnemy.killed = true;
        var Msg = '[Turn ' + self.Turn + ']:\t' + 'Tower killed [' + oEnemy.name + '] at distance = [' + oEnemy.distCurrent + 'm' + ']';
        self.notify(Msg);

        //  Exit loop early
        return false;
      }
    });

    return self;
  };

  //  Get list of active enemies
  Game.prototype.getEnemies = function () {
    let self = this;
    return _.filter(self.Enemies, {killed: false});
  };

  //  Moves each enemy to tower
  Game.prototype.moveEnemies = function () {
    let self = this;
    _.each(self.Enemies, function (oEnemy) {
      oEnemy.move();
    });

    return self;
  };

  //  Check if the game can be finished
  Game.prototype.checkState = function () {
    let self = this;

    //  Check if there are "alive" enemies exists
    if (0 === self.getEnemies().length) {
      self.Result = {
          state:   0
        , message: 'Tower killed ALL enemies in ' + self.Turn + ' turn(s)'
      }
    }

    //  Check if there is an enemy that reach the Tower
    if (null === self.Result.state) {
      _.each(self.Enemies, function (oEnemy) {
        if (0 === oEnemy.distCurrent) {
          self.Result = {
              state:   1
            , message: 'Tower DESTROYED by [' + oEnemy.name + '] at turn #' + self.Turn
          }

          //  Exit loop early
          return false;
        }
      });
    }

    //  Write result message
    if (null !== self.Result.state) {
      self.Result.message = '[You ' + self.States[self.Result.state] + ']:\t' + self.Result.message;
    }

  };

  //  Notifier
  Game.prototype.notify = function (sText) {
    let self = this;
    return (self.verbose
            ? console.log(sText || 'Turn: ' + self.Turn)
            : true);
  };

  //  Output game result
  Game.prototype.logResult = function () {
    let self = this;
    return self.notify(self.Result.message);
  };

  /**
   * EXPORTS
   * @public
   */

  module.exports = Game;

}).call(this);
