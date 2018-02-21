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
done();
```

<a name="emcee-have-property"></a>
## Have property
id              (String).

```js
Mod.should.have.property('id').which.is.a.String();
done();
```

Game            (Object).

```js
Mod.should.have.property('Game').which.is.a.Object();
done();
```

<a name="emcee-have-method"></a>
## Have method
1. runGame().

```js
Mod.should.have.property(m).which.is.a.Function();
done();
```

2. getHint().

```js
Mod.should.have.property(m).which.is.a.Function();
done();
```

<a name="game"></a>
# Game
Instance created.

```js
Mod.should.be.an.instanceOf(Object);
done();
```

<a name="game-have-property"></a>
## Have property
id              (String).

```js
Mod.should.have.property('id').which.is.a.String();
done();
```

Enemies         (Array).

```js
Mod.should.have.property('Enemies').which.is.a.Array();
done();
```

Result          (Object).

```js
Mod.should.have.property('Result').which.is.a.Object();
done();
```

Tower           (Object).

```js
Mod.should.have.property('Tower').which.is.a.Object();
done();
```

Turn            (Number).

```js
Mod.should.have.property('Turn').which.is.a.Number();
done();
```

States          (Object).

```js
Mod.should.have.property('States').which.is.a.Object();
done();
```

<a name="game-have-method"></a>
## Have method
1. setup().

```js
Mod.should.have.property(m).which.is.a.Function();
done();
```

2. nextTurn().

```js
Mod.should.have.property(m).which.is.a.Function();
done();
```

3. playRound().

```js
Mod.should.have.property(m).which.is.a.Function();
done();
```

4. shot().

```js
Mod.should.have.property(m).which.is.a.Function();
done();
```

5. getEnemies().

```js
Mod.should.have.property(m).which.is.a.Function();
done();
```

6. moveEnemies().

```js
Mod.should.have.property(m).which.is.a.Function();
done();
```

7. checkState().

```js
Mod.should.have.property(m).which.is.a.Function();
done();
```

8. notify().

```js
Mod.should.have.property(m).which.is.a.Function();
done();
```

9. logResult().

```js
Mod.should.have.property(m).which.is.a.Function();
done();
```

<a name="tower"></a>
# Tower
Instance created.

```js
Mod.should.be.an.instanceOf(Object);
done();
```

<a name="tower-have-property"></a>
## Have property
id              (String).

```js
Mod.should.have.property('id').which.is.a.String();
done();
```

fireRange       (Number).

```js
Mod.should.have.property('fireRange').which.is.a.Number();
done();
```

verbose         (Boolean).

```js
Mod.should.have.property('verbose').which.is.a.Boolean().and.is.false();
done();
```

<a name="tower-have-method"></a>
## Have method
1. notify().

```js
Mod.should.have.property(m).which.is.a.Function();
done();
```

<a name="enemy"></a>
# Enemy
Instance created.

```js
Mod.should.be.an.instanceOf(Object);
done();
```

<a name="enemy-have-property"></a>
## Have property
id              (String).

```js
Mod.should.have.property('id').which.is.a.String();
done();
```

name            (String).

```js
Mod.should.have.property('name').which.is.a.String();
done();
```

distCurrent     (Number).

```js
Mod.should.have.property('distCurrent').which.is.a.Number();
done();
```

speed           (Number).

```js
Mod.should.have.property('speed').which.is.a.Number();
done();
```

killed          (Boolean).

```js
Mod.should.have.property('killed').which.is.a.Boolean().and.is.false();
done();
```

<a name="enemy-have-method"></a>
## Have method
1. notify().

```js
Mod.should.have.property(m).which.is.a.Function();
done();
```

2. move().

```js
Mod.should.have.property(m).which.is.a.Function();
done();
```
