install:
	npm ci

gendiff:
	node bin/nodejs-package.js

publish:
	npm publish --dry-run

lint:
	npx eslint .