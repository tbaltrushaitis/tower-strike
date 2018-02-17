/*!
 * File:    modules/game.js
 * Module:  Game
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

  var Tower = require('./tower');
  var Unit  = require('./unit');

  /**
   * CONSTRUCTOR
   * @void
   */

  var Game = function Game (opts) {
    var self = this;
    var defs = {
          id: Chance.hash()
        , Enemies: []
        , Result: {
              state: null
            , message: ''
          }
        , Tower: {}
        , Turn: 0
        , States: [
              'WIN'
            , 'LOSE'
          ]
      };

    _.extend(self, true, defs, opts || {});
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
    var self = this;
    _.extend(self, true, self.defs);

    var towerFireRange = parseInt(lo[0]);
    self.Tower  = new Tower({
                      fireRange: towerFireRange
                    , id:        Chance.guid()
                    , verbose:   self.verbose
                  });

    var listUnits = _.drop(lo);
    _.each(listUnits, function (sInput) {
      var botData = sInput.split(' ');
      var botOpts = {
            id:          Chance.guid()
          , name:        botData[0]
          , distCurrent: parseInt(botData[1])
          , speed:       parseInt(botData[2])
        };
      var oUnit = new Unit(botOpts);   //  _.cloneDeep(botOpts)
      self.Enemies.push(oUnit);
    });

    return self;
  };

  //  Increment turn counter
  Game.prototype.nextTurn = function () {
    var self = this;
    self.Turn++;
    return self;
  };

  //  Play Round
  Game.prototype.playRound = function () {
    var self = this;
    self.shot().moveEnemies();
    return self;
  };

  //  Tower fire one time
  Game.prototype.shot = function () {
    var self = this;

    //  Sort enemies list by distance to Tower (ascending) AND speed (descending)
    //  this allow to kill enemies in fast and secure way
    var Enemies = _.sortBy(self.getEnemies(), ['distCurrent', function (o) {
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
    var self = this;
    return _.filter(self.Enemies, {killed: false});
  };

  //  Moves each enemy to tower
  Game.prototype.moveEnemies = function () {
    var self = this;
    _.each(self.Enemies, function (oEnemy) {
      oEnemy.move();
    });

    return self;
  };

  //  Check if the game can be finished
  Game.prototype.checkState = function () {
    var self = this;

    //  Check if there are "alive" enemies exists
    if (self.getEnemies().length === 0) {
      self.Result = {
          state:   0
        , message: 'Tower killed ALL enemies in ' + self.Turn + ' turn(s)'
      }
    }

    //  Check if there is an enemy that reach the Tower
    if (self.Result.state === null) {
      _.each(self.Enemies, function (oEnemy) {
        if (oEnemy.distCurrent === 0) {
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
    if (self.Result.state !== null) {
      self.Result.message = '[You ' + self.States[self.Result.state] + ']:\t' + self.Result.message;
    }

  };

  //  Notifier
  Game.prototype.notify = function (sText) {
    var self = this;
    return (self.verbose
              ? console.log(sText || 'Turn: ' + self.Turn)
              : true);
  };

  //  Output game result
  Game.prototype.logResult = function () {
    var self = this;
    return self.notify(self.Result.message);
  };

  /**
   * EXPORTS
   * @public
   */

  module.exports = Game;

}).call(this);
