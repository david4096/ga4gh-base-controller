// This file allows us to describe each protocols controller methods in their
// own module.
var variants = require('./controllers/variants');
var features = require('./controllers/features');
var metadata = require('./controllers/metadata');
var rna = require('./controllers/rna');

var extend = require('util')._extend;

module.exports = function(options) {
  return extend(
          metadata,
          rna,
          variants,
          features)
};
