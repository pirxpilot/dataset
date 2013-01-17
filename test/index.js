var dataset = require('dataset');

var ann = document.getElementById('ann'),
  bob = document.getElementById('bob');


function equals(actual, expected) {
	if (actual !== expected) {
		throw new Error(actual + ' is not ' + expected);
	}
}

equals(dataset(ann, 'age'), '24');

dataset(bob, 'age', 25);
dataset(bob)
	.set('height', 175)
	.set('lastname', 'Doe');


equals(bob.getAttribute('data-height'), '175');
equals(bob.getAttribute('data-age'), '25');
equals(bob.getAttribute('data-lastname'), 'Doe');
