
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

lint:
	@jshint index.js

clean:
	rm -fr build components

.PHONY: clean lint
