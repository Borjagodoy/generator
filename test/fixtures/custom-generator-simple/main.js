var generators = require('../../..');

// Example of a simple generator.
//
// A raw function that is executed when this generator is resolved.
//
// It takes a list of arguments (usually CLI args) and a Hash of options
// (CLI options), the context of the function is a `new Generator.Base`
// object, which means that you can use the API as if you were extending
// `Base`.
//
// It works with simple generator. If you need to do a bit more complex
// stuff, extend from Generator.Base and defines your generator steps
// in several methods.

module.exports = generators.Base.extend({
  exec: function () {}
});

module.exports.name = 'You can name your generator';
module.exports.description = 'And add a custom description by adding a `description` property to your function.';
module.exports.usage = 'Usage can be used to customize the help output';

// namespace is resolved depending on the location of this generator,
// unless you specifically define it.
// module.exports.namespace = 'custom-generator';
