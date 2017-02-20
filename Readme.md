
# dataset

  Shim for DOM dataset

## Installation

    $ npm install dataset

## API

  To set `data-xxx` attribute on `node` to 5:

  	dataset(node, 'xxx', 5);

  To retrieve `data-xxx` attribute value:

    dataset(node, 'xxx');

  To remove `data-xxx` attribute:

    dataset(node).del('xxx');

  You can chain your `sets`:

  	dataset(node)
  		.set('xxx', 5)
  		.set('foo', 'bongo');

# Caveats
  
  - You might not need it: dataset is [supported by all modern browsers][caniuse]
  - Do **not** use on SVG/MathML elements: most browsers only support `dataset` property on HTML elements and - for performance reasons - this shim only checks for `dataset` support once per load using `document.head` element to verify the support.

## License

  MIT

[caniuse]: http://caniuse.com/#search=dataset
