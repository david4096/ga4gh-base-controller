# ga4gh-base-controller
Provides a basis for creating controller functions for GA4GH services.

# Create your own controller
You have two options!

## Fork/clone
You can clone this repository and rename the module in the `package.json`
to a name of your choosing. Then, when setting up your ga4gh-node-gateway simply
pass it your new module when initializing the server options under the
`controller` option.

## Extend
You can also create a new project from scratch and extend this controller.

```
npm init mycontroller
# Enter in details as desired
npm install ga4gh-base-controller --save
```

Then create a file named `index.js`:

```
var controller = require('ga4gh-base-controller')({});

controller.searchVariants = function(call, callback) {
  callback(null, {variants: [{id: 1}]});
};

module.exports = function (options) {
  return controller;
}
```

You can now use your module with the `ga4gh-node-gateway` by passing it as
the `controller` option value to create your own GA4GH server.

# API

Each method in the GA4GH schemas can be attached to a controller by name. The
module itself exposes a function which allows setting of options. The
controller dictionary looks like {methodName: function(call, callback), ...}
and by viewing the files in `src` you can see how simple responses to these
methods can be formed.

## call

Contains request details in call.request (e.g. `call.request.dataset_id`).

## callback

Accepts an error and response message. Call this with your document when it
has been completely gathered: `callback(null, doc)`.
