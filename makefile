all: build

clean:
	rm -rf bower_components
	rm -rf node_modules
	rm -rf public

install:
	npm install
	./node_modules/.bin/bower install --config.interactive=false

copy-fonts:
	rm -vf app/assets/fonts/*
	cp -vf bower_components/bootstrap/fonts/* app/assets/fonts
	cp -vf bower_components/font-awesome/fonts/* app/assets/fonts

build: clean install copy-fonts
	./node_modules/brunch/bin/brunch build

production: clean install copy-fonts
	./node_modules/brunch/bin/brunch build --production

build-test: build test

test: unit

unit:
	./node_modules/karma/bin/karma start test/unit.conf.js

.PHONY: clean build production unit test