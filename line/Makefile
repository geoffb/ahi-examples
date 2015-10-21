build: clean node_modules
	sh node_modules/.bin/ahi

develop: clean node_modules
	# TODO: watch and serve args
	sh node_modules/.bin/ahi

node_modules:
	npm install

clean:
	rm -rf build
