deploy:: build
	npm run copyFiles
	export SLS_DEBUG=* && serverless deploy --force --verbose
	rm -rf ./.serverless
	rm -rf .webpack
	rm -rf node_modules
	cat config.json

test:: build
	npm run test
	npm run test:integration

build::
	rm -f package-lock.json
	npm i

bundle::
	rm -f package-lock.json
	npm i
	npm run bundle

undeploy:: build
	export SLS_DEBUG=* && serverless remove --force --verbose
