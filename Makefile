MOCHA = ./node_modules/.bin/mocha

test:
	@NODE_ENV=test $(MOCHA)

dev:
	@NODE_ENV=development gulp

init-testing:
	git submodule add https://github.com/visionmedia/mocha.git spec/vendor/mocha
	git submodule add https://github.com/chaijs/chai.git spec/vendor/chai
	git submodule add https://github.com/shouldjs/should.js spec/vendor/should
	git submodule init
	npm install

update-testing:
	git submodule update
	npm install

.PHONY: test dev init-testing update-testing
