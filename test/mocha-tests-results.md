# TOC
   - [DataSources Directory](#datasources-directory)
   - [Battle Simulation](#battle-simulation)
     - [Run with [data/input-lost-001.txt]](#battle-simulation-run-with-datainput-lost-001txt)
       - [Processing data](#battle-simulation-run-with-datainput-lost-001txt-processing-data)
     - [Run with [data/input-lost-002.txt]](#battle-simulation-run-with-datainput-lost-002txt)
       - [Processing data](#battle-simulation-run-with-datainput-lost-002txt-processing-data)
     - [Run with [data/input-win-001.txt]](#battle-simulation-run-with-datainput-win-001txt)
       - [Processing data](#battle-simulation-run-with-datainput-win-001txt-processing-data)
   - [Emcee](#emcee)
     - [Have property](#emcee-have-property)
     - [Have method](#emcee-have-method)
   - [Game](#game)
     - [Have property](#game-have-property)
     - [Have method](#game-have-method)
   - [Tower](#tower)
     - [Have property](#tower-have-property)
     - [Have method](#tower-have-method)
   - [Enemy](#enemy)
     - [Have property](#enemy-have-property)
     - [Have method](#enemy-have-method)
<a name=""></a>

<a name="datasources-directory"></a>
# DataSources Directory
EXIST.

```js
dataDirStats.isDirectory().should.be.true('NOT EXIST or NOT a DIRECTORY');
done();
```

READABLE.

```js
listSources =   fs.readdirSync(dataDir);
listSources.should.be.an.Array();
done();
```

NOT EMPTY.

```js
listSources.should.have.property('length').aboveOrEqual(1);
done();
```

<a name="battle-simulation"></a>
# Battle Simulation
<a name="battle-simulation-run-with-datainput-lost-001txt"></a>
## Run with [data/input-lost-001.txt]
got file content.

```js
dataInput.should.be.an.Array();
done();
```

should be at least 2 lines of data.

```js
dataInput.should.be.an.Array().and.have.property('length').aboveOrEqual(2);
done();
```

<a name="battle-simulation-run-with-datainput-lost-001txt-processing-data"></a>
### Processing data
New instance of Emcee created.

```js
gameEmcee.should.be.an.instanceOf(Object).and.have.property('id').which.is.a.String();
done();
```

battle finished.

```js
gameEmcee.runGame(dataInput);
done();
```

<a name="battle-simulation-run-with-datainput-lost-002txt"></a>
## Run with [data/input-lost-002.txt]
got file content.

```js
dataInput.should.be.an.Array();
done();
```

should be at least 2 lines of data.

```js
dataInput.should.be.an.Array().and.have.property('length').aboveOrEqual(2);
done();
```

<a name="battle-simulation-run-with-datainput-lost-002txt-processing-data"></a>
### Processing data
New instance of Emcee created.

```js
gameEmcee.should.be.an.instanceOf(Object).and.have.property('id').which.is.a.String();
done();
```

battle finished.

```js
gameEmcee.runGame(dataInput);
done();
```

<a name="battle-simulation-run-with-datainput-win-001txt"></a>
## Run with [data/input-win-001.txt]
got file content.

```js
dataInput.should.be.an.Array();
done();
```

should be at least 2 lines of data.

```js
dataInput.should.be.an.Array().and.have.property('length').aboveOrEqual(2);
done();
```

<a name="battle-simulation-run-with-datainput-win-001txt-processing-data"></a>
### Processing data
New instance of Emcee created.

```js
gameEmcee.should.be.an.instanceOf(Object).and.have.property('id').which.is.a.String();
done();
```

battle finished.

```js
gameEmcee.runGame(dataInput);
done();
```

<a name="emcee"></a>
# Emcee
Instance created.

```js
Mod.should.be.an.instanceOf(Object);
```

<a name="emcee-have-property"></a>
## Have property
id              (String).

```js
Mod.should.have.property('id').which.is.a.String();
```

Game            (Object).

```js
Mod.should.have.property('Game').which.is.a.Object();
```

<a name="emcee-have-method"></a>
## Have method
runGame().

```js
Mod.should.have.property(m);
Mod[m].should.be.Function();
```

getHint().

```js
Mod.should.have.property(m);
Mod[m].should.be.Function();
```

<a name="game"></a>
# Game
Instance created.

```js
Mod.should.be.an.instanceOf(Object);
```

<a name="game-have-property"></a>
## Have property
id              (String).

```js
Mod.should.have.property('id').which.is.a.String();
```

Enemies         (Array).

```js
Mod.should.have.property('Enemies').which.is.a.Array();
```

Result          (Object).

```js
Mod.should.have.property('Result').which.is.a.Object();
```

Tower           (Object).

```js
Mod.should.have.property('Tower').which.is.a.Object();
```

Turn            (Number).

```js
Mod.should.have.property('Turn').which.is.a.Number();
```

States          (Object).

```js
Mod.should.have.property('States').which.is.a.Object();
```

<a name="game-have-method"></a>
## Have method
setup().

```js
Mod.should.have.property(m);
Mod[m].should.be.Function();
```

nextTurn().

```js
Mod.should.have.property(m);
Mod[m].should.be.Function();
```

playRound().

```js
Mod.should.have.property(m);
Mod[m].should.be.Function();
```

shot().

```js
Mod.should.have.property(m);
Mod[m].should.be.Function();
```

getEnemies().

```js
Mod.should.have.property(m);
Mod[m].should.be.Function();
```

moveEnemies().

```js
Mod.should.have.property(m);
Mod[m].should.be.Function();
```

checkState().

```js
Mod.should.have.property(m);
Mod[m].should.be.Function();
```

notify().

```js
Mod.should.have.property(m);
Mod[m].should.be.Function();
```

logResult().

```js
Mod.should.have.property(m);
Mod[m].should.be.Function();
```

<a name="tower"></a>
# Tower
Instance created.

```js
Mod.should.be.an.instanceOf(Object);
```

<a name="tower-have-property"></a>
## Have property
id              (String).

```js
Mod.should.have.property('id').which.is.a.String();
```

fireRange       (Number).

```js
Mod.should.have.property('fireRange').which.is.a.Number();
```

verbose         (Boolean).

```js
Mod.should.have.property('verbose').which.is.a.Boolean().and.is.false();
```

<a name="tower-have-method"></a>
## Have method
notify().

```js
Mod.should.have.property(m);
Mod[m].should.be.Function();
```

<a name="enemy"></a>
# Enemy
Instance created.

```js
Mod.should.be.an.instanceOf(Object);
```

<a name="enemy-have-property"></a>
## Have property
id              (String).

```js
Mod.should.have.property('id').which.is.a.String();
```

name            (String).

```js
Mod.should.have.property('name').which.is.a.String();
```

distCurrent     (Number).

```js
Mod.should.have.property('distCurrent').which.is.a.Number();
```

speed           (Number).

```js
Mod.should.have.property('speed').which.is.a.Number();
```

killed          (Boolean).

```js
Mod.should.have.property('killed').which.is.a.Boolean().and.is.false();
```

<a name="enemy-have-method"></a>
## Have method
notify().

```js
Mod.should.have.property(m);
Mod[m].should.be.Function();
```

move().

```js
Mod.should.have.property(m);
Mod[m].should.be.Function();
```
