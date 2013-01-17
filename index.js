module.exports=dataset;

/*global document*/

var fn;

if (document.body.dataset) {
  fn = {
    set: function(node, attr, value) {
      node.dataset[attr] = value;
    },
    get: function(node, attr) {
      return node.dataset[attr];
    }
  };
} else {
  fn = {
    set: function(node, attr, value) {
      node.setAttribute('data-' + attr, value);
    },
    get: function(node, attr) {
      return node.getAttribute('data-' + attr);
    }
  };
}

function dataset(node, attr, value) {
  if (arguments.length === 3) {
    fn.set(node, attr, value);
  } else {
    return fn.get(node, attr);
  }
}