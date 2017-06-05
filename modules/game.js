/*  modules/game.js  */

/*!
 * Module:  Game
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

    var Tower   =   require('./tower');
    var Unit    =   require('./unit');

    /**
     * CONSTRUCTOR
     * @void
     */

    var Game    =   function Game (opts) {
        var self    =   this;
        var defs    =   {
                id:         Chance.hash()
                , Enemies:  []
                , Result:   null
                , Tower:    {}
                , Turn:     0
            };

        _.extend(self, true, defs, opts || {});
    };

    /**
     * PROTOTYPE
     * @void
     */

    Game.prototype              =   Object.create(Object.prototype);
    Game.prototype.constructor  =   Game;

    /**
     * METHODS
     * @public
     */

    //  Setup
    Game.prototype.setup    =   function (lo) {
        var self    =   this;
        _.extend(self, true, self.defs);

        var towerFireRange  =   parseInt(lo[0]);
        self.Tower  =   new Tower({
                            fireRange:  towerFireRange
                          , id:         Chance.guid()
                        });

        var listUnits   =   _.drop(lo);
        _.each(listUnits, function (sInput) {
            var botData =   sInput.split(' ');
            var botOpts =   {
                    id:             Chance.guid()
                  , name:           botData[0]
                  , distInitial:    parseInt(botData[1])
                  , distCurrent:    parseInt(botData[1])
                  , speed:          parseInt(botData[2])
                };
            var oUnit    =   new Unit(_.cloneDeep(botOpts));

            // oUnit.notify();
            self.Enemies.push(oUnit);
        });

        return self;
    };

    //  Play Round
    Game.prototype.playRound    =   function () {
        var self    =   this;
        self.shot();
        self.moveEnemies();
        return self;
    };

    //  Tower fire one time
    Game.prototype.shot =   function () {
        var self    =   this;

        //  Sort enemies list by distance to Tower (ascending) AND speed (descending)
        //  this allow to kill enemies in fast and secure way
        var Enemies =   _.sortBy(self.getEnemies(), ['distCurrent', function (o) {
                                return -1 * o.speed;
                            }]);

        //  Check each enemy unit distance and kill the nearest
        _.each(Enemies, function (oEnemy) {
            if (oEnemy.distCurrent <= self.Tower.fireRange) {
                oEnemy.killed   =   true;
                var Msg =   '[Turn ' + self.Turn + ']:\t' + 'Kill ' + oEnemy.name + ' at distance = [' + oEnemy.distCurrent + 'm' + ']';
                self.notify(Msg);

                //  Exit loop
                return false;
            }
        });

        return self;
    };

    //  Get list of active enemies
    Game.prototype.getEnemies   =   function () {
        var self    =   this;
        return _.filter(self.Enemies, {killed: false});
    };

    //  Moves each enemy to tower
    Game.prototype.moveEnemies    =   function () {
        var self    =   this;
        _.each(self.Enemies, function (oEnemy) {
            oEnemy.move();
        });

        return self;
    };

    //  Check if game can be finished and set the result
    Game.prototype.checkState    =   function () {
        var self    =   this;

        //  Check if there are "alive" enemies exists
        var cntActiveEnemies    =   _.filter(self.Enemies, {killed: false}).length;
        if (cntActiveEnemies === 0) {
            self.Result =   'WIN';
        }

        //  Check if there is an enemy that reach the Tower
        if (self.Result === null) {
            _.each(self.Enemies, function (oEnemy) {
                if (oEnemy.distCurrent === 0) {
                    self.Result =   'DESTROYED' + ' by ' + oEnemy.name;
                    return false;
                }
            });
        }

        //  Print result if game is finished
        if (self.Result) {
            self.logResult();
        }

    };

    //  Notifier
    Game.prototype.notify  =   function (sText) {
        var self    =   this;
        return console.log(sText || 'Turn: ' + self.Turn);
    };

    //  Output game result and scores
    Game.prototype.logResult   =   function () {
        var self    =   this;
        var Msg     =   '[Result]:\t' + 'Tower ' + (self.Result + ' in' || 'played') + ' ' + self.Turn + ' turn(s)';
        return self.notify(Msg);
    };

    /**
     * EXPORTS
     * @public
     */

    module.exports  =   Game;

}).call(this);

