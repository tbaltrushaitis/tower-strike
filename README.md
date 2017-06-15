![Tower Strike Logo](logo-tower-strike.png)

Simulate a game where the goal is to kill the enemies by using a tower.

--------

## Setup environment ##

### Install NVM ###

To install or update nvm, you can use the install script using cURL:

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

or Wget:

```bash
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

### Install node.js v0.12.14 ###

```bash
$ nvm install 0.12.14
```

--------
## Deploy ##

### Get sources ###

```bash
$ git clone https://github.com/tbaltrushaitis/tower-strike.git tower-strike
```

### Install dependencies ###

```bash
$ cd tower-strike
$ npm i
```

--------
## Usage ##

### While in development ###

```bash
$ nvm exec 0.12.14 gulp
```

or

```bash
$ nvm exec 0.12.14 npm run dev
```

### Running tests ###

```bash
$ make test
```

or

```bash
$ npm test
```

#### List of available reporters ####
Reporter for tests could be changed in file `test/mocha.opts` by changing the value of `--reporter` parameter.
Here is the list of possible values for it:
 - base
 - doc
 - dot
 - html
 - json-stream
 - json
 - landing
 - list
 - markdown
 - min
 - nyan
 - progress
 - spec
 - tap
 - xunit

### Standard execution ###

```bash
$ nvm exec 0.12.14 npm start
```

--------
## Task definition ##

### Problem Statement ###
Program should simulate a game where the goal is to kill the enemies by using a tower.
Need to kill enemies as fast as possible.
At each turn first the tower fires one time then each enemy moves to the tower.
If an enemy reaches the tower you lose.

### Input ###
The first line is the tower's firing range.
Each next line represents an enemy:
1. first column - is the enemy name.
2. second column - is the initial distance to the tower.
3. the last one - is the unit speed.

### Output ###
 - At each turn program should inform if the tower killed the enemy unit.
 - At the end program should inform if the tower WINS or LOSES and the count of played turns.
 - In case of lost the program should calculate the minimal tower's firing distance to win the game against same set of enemies.

### Samples ###

#### Sample Input ####
```javascript
50m
BotA 100m 10m
BotB 50m 20m
BotC 30m 20m
```

#### Sample Output ####
```javascript
Firing range is 50m
Turn 1: Kill BotC at 30m
Turn 2: Kill BotB at 30m
Turn 6: Kill BotA at 50m
Tower WIN in 6 turn(s)
```

## Tasks checklist ##

 - [x] Create programmatic simulator for this game that has to be executed on **node.js@0.12.14**
 - [x] Feel free to write unit tests
 - [x] NPM available libs are: `lodash`, `winston`, `chance`, `should`, `mocha`

--------

#### Useful Info ####

 - [GitHub / Basic writing and formatting syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/)
 - [BitBucket / Markdown Howto](https://bitbucket.org/tutorials/markdowndemo)
 - [Docker / Creating an Automated Build](https://docs.docker.com/docker-hub/builds/)
 - [Docker / Linking containers](https://docs.docker.com/engine/userguide/networking/default_network/dockerlinks.md)
 - [Docker / Cross-host linking containers](https://docs.docker.com/engine/admin/ambassador_pattern_linking.md)

--------
