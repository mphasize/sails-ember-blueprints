Sails > Ember Blueprints
======================

`Version 0.1.4`

Ember Data compatible blueprints for Sails v0.10


Since version v0.10 [Sails](http://beta.sailsjs.org/) supports overriding the default blueprints, which gives us a remarkable flexibility in making Sails work together with a variety of clients and frontend libraries.

The blueprints in this repository are meant as a starting point to make Sails work with Ember, Ember Data and the default Ember Data RESTAdapter.

`!` *On August 18th, [Ember Data 1.0 beta-9](http://emberjs.com/blog/2014/08/18/ember-data-1-0-beta-9-released.html) was released, including a lot of improvements for delivering model associations/relations as Embedded Records (instead of Sideloading). Embedding records is much closer to what Sails does orginally, so it might be better to move into that direction. But since the actual JSON API structure is very different for these two approaches and since most APIs will be designed to work with multiple clients, I'd like to see support/alternatives for both ways. If you happen to know a project that will support the embedded style, please send me a note!*


### Ember Data expectations

Ember Data expects the JSON responses from the API to follow certain conventions.
Some of these conventions are mentioned in the [Ember model guide](http://emberjs.com/guides/models/connecting-to-an-http-server/).
However, there is a more [complete list of expected responses](https://stackoverflow.com/questions/14922623/what-is-the-complete-list-of-expected-json-responses-for-ds-restadapter) on Stackoverflow.



# Getting started

### Installing dependencies

On your project's root directory:

```
npm install --save ember-sails-blueprints
```

### Configuring your project

First, configure Sails to use **pluralized** blueprints routes.

In `myproject/config/blueprints.js` set `pluralize: true`

```
module.exports.blueprints = {
	// ...
	pluralize: true
};
```

Next, you need to override the default blueprints (provided by Sails).

1. Inside your `api/` directory, create a new directory called `blueprints`.
2. Inside this new directory, create the following files with its contents:
	* create.js: `module.exports = require('sails-ember-blueprints').blueprints.create;`
	* destroy.js: `module.exports = require('sails-ember-blueprints').blueprints.destroy;`
	* find.js: `module.exports = require('sails-ember-blueprints').blueprints.find;`
	* findone.js: `module.exports = require('sails-ember-blueprints').blueprints.findone;`
	* populate.js: `module.exports = require('sails-ember-blueprints').blueprints.populate;`
	* update.js: `module.exports = require('sails-ember-blueprints').blueprints.update;`

Finally, generate some API resources, e.g. `sails generate api user`, and start your app with `sails lift`.

Now you should be up and running and your Ember Data app should be able to talk to your Sails backend.

### Ember RESTAdapter

If you're using [Ember CLI](//ember-cli.com), you only need to setup the RESTAdapter as the application adapter.
( You can also use it for specific models only. )

In your Ember project: app/adapters/application.js

	export default DS.RESTAdapter.extend( {
	  coalesceFindRequests: true,   // these blueprints support coalescing (reduces the amount of requests)
	  namespace: '/',               // same as API prefix in Sails config
	  host: 'http://localhost:1337' // Sails server
	} );



### Create with current user

If you have logged in users and you always want to associate newly created records with the current user, edit your `config/blueprints.js` file and add the following lines:

```
// config/blueprints.js
module.exports.blueprints = {
	// existing configuration
	// ...

	ember: {
		createWithCurrentUser: true
	}
}
```

### Sideloading records

To enable this behavior, add the following lines to the `config/blueprints.js` file:

```
// config/blueprints.js
module.exports.blueprints = {
  // existing configuration
  // ...

  ember: {
    sideload: true
  }
}
```

### Useful utilities

You can manually use the utils bundled with this package (such as `emberizeJSON`):

```
var emberUtils = require('sails-ember-blueprints').utils;

// ...

var emberizedResults = emberUtils.emberizeJSON( model, records, associations, sideload );

```

### Accessing the REST interface without Ember Data

If you want to access the REST routes with your own client or a tool like [Postman](http://www.getpostman.com/) you may have to set the correct HTTP headers:

    Accept: application/json
    Content-Type: application/json



# Changelog

* 0.1.4: Added global config for `performSideload` thanks to @sergiolepore
* 0.1.3: Added package.json for more convenient installation using `npm install`
* 0.1.2: Fixed #3 - find() request could end up as a findOne() response, added docs on setting HTTP headers
* 0.1.1: Added Ember service to handle "links" (alternative to populating records), added `populate` blueprint
* 0.1.0: Fresh start from Sails RC8, blueprints: `create`, `update`, `destroy`, `find`, `findone`


# Todo

### Add documentation for utils

Given that emberUtils is now exposed, it's highly recommended to add a little guide or description about every utility.

README.md
```
Utils
-----

emberizeJSON:
- Prepare records and populated associations to be consumed by Ember's DS.RESTAdapter
- Usage:

	blablabla...

```

### Support pagination metadata

Ember Data supports information about pagination in the form of a `meta` attribute at the top level of the generated JSON response. See description in the [Handling Metadata](http://emberjs.com/guides/models/handling-metadata/) Guide. Supporting this out-of-the-box might be a nice addition for the blueprints.


### Support bulk commits

I didn't try it yet, but the Stackoverflow link above mentions, that the RESTAdapter is capable of issuing bulk requests for create, update and delete.
The blueprints don't support these bulk commits yet.

### Make the blueprints testable

I am still trying to figure out how to make these blueprints more maintainable and testable.
@davidrivera suggested to put the blueprints into a generator.

# Scope

The blueprints in this repository should provide a starting point for a Sails backend that works with an Ember frontend app. However, there are a lot of things missing that would be needed for a full blown app (like authentication and access control) but these things don't really fit into the blueprints.


# Sails Ember Starter Kit

@artificialio used these blueprints to create the first version of their Vagrant-based [Sails Ember Starter Kit](https://artificialio.github.io/sane/). Cool!
