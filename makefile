all: build

clean:
	rm -rf bower_components
	rm -rf node_modules
	rm -rf public

build: clean
	npm install
	./node_modules/.bin/bower install --config.interactive=false
	./node_modules/brunch/bin/brunch build

production: clean
	npm install
	./node_modules/.bin/bower install --config.interactive=false
	./node_modules/brunch/bin/brunch build --production

build-test: build test

test: unit

unit:
	./node_modules/karma/bin/karma start test/unit.conf.js

.PHONY: clean build production unit test