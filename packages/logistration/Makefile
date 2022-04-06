build:
	make clean
	./node_modules/.bin/fedx-scripts babel src --out-dir dist --source-maps --ignore **/*.test.jsx,**/*.test.js,**/setupTest.js --copy-files
	@# --copy-files will bring in everything else that wasn't processed by babel. Remove what we don't want.
	@find dist -name '*.test.js*' -delete
	cp ./package.json ./dist/package.json
	cp ./LICENSE ./dist/LICENSE
	cp ./README.rst ./dist/README.rst
	cp ./CHANGELOG.md ./dist/CHANGELOG.md

clean:
	rm -rf ./node_modules
	rm -rf ./dist
