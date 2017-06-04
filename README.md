# Tower Strike
A game where the goal is to kill the enemies by using a tower

## Description
Simulate a game where the goal is to kill the enemies by using a tower.

--------
## Setup environment

### Install NVM

To install or update nvm, you can use the install script using cURL:

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

or Wget:

```bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

### Install node.js v0.12.14

```bash
nvm install 0.12.14
```

--------
## Deploy

### Get sources

```bash
git clone https://github.com/tbaltrushaitis/tower-strike.git tower-strike
```

### Install dependencies

```bash
cd tower-strike
npm i
```

--------
## Usage

### While in development

```bash
nvm exec 0.12.14 gulp
```

or

```bash
nvm exec 0.12.14 npm run dev
```

### Normal execution

```bash
nvm exec 0.12.14 npm start
```

--------

### Useful Info ###

 - [GitHub / Basic writing and formatting syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/)
 - [BitBucket / Markdown Howto](https://bitbucket.org/tutorials/markdowndemo)
 - [Docker / Creating an Automated Build](https://docs.docker.com/docker-hub/builds/)
 - [Docker / Linking containers](https://docs.docker.com/engine/userguide/networking/default_network/dockerlinks.md)
 - [Docker / Cross-host linking containers](https://docs.docker.com/engine/admin/ambassador_pattern_linking.md)

--------
