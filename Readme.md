
# dataset

  Shim for DOM dataset

## Installation

    $ component install code42day/dataset

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

## License

  MIT
