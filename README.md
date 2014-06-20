Sails > Ember Blueprints
======================

Ember Data compatible blueprints for Sails v0.10


Since version v0.10 [Sails](http://beta.sailsjs.org/) supports overriding the default blueprints, which gives us a remarkable flexibility in making Sails work together with a variety of clients and frontend libraries.

The blueprints in this repository are meant as a starting point to make Sails work with Ember, Ember Data and the default Ember Data RESTAdapter.


### Ember Data expectations

Ember Data expects the JSON responses from the API to follow certain conventions. 
Some of these conventions are mentioned in the [Ember model guide](http://emberjs.com/guides/models/connecting-to-an-http-server/).
However, there is a more [complete list of expected responses](https://stackoverflow.com/questions/14922623/what-is-the-complete-list-of-expected-json-responses-for-ds-restadapter) on Stackoverflow.



# Getting started


* Install the latest Sails version `npm install sails@beta -g`
* Create a new Sails project `sails new myproject`
* Configure sails to use **pluralized** blueprint routes.

	In `myproject/config/blueprints.js` set `pluralize: true`


      module.exports.blueprints = {
        // ...
        pluralize: true
      };


* Add node dependencies `npm install --save lodash` and `npm install --save pluralize`
* Drop the blueprints from this repository in `myproject/api/blueprints`
* Generate some API resources, e.g. `sails generate api user`
* Start your app with `sails lift`


Now you should be up and running and your Ember Data app should be able to talk to your Sails backend.


### One more thing

If you have logged in users and you always want to associate newly created records with the current user, take a look at `blueprints/create.js` lines 40-47 and uncomment the code if it fits your needs.


# Todo

### Adapt all blueprints or remove unused blueprints

Some blueprints like `add` or `remove` aren't adapted yet, because I didn't run into a situation where Ember's RESTAdapter would acutally make use of them. If you know, when Ember Data might use subroutes for related models, please let me know.

### Make the blueprints testable

I am still trying to figure out how to make these blueprints more maintainable and testable.
@davidrivera suggested to put the blueprints into a generator.

# Scope

The blueprints in this repository should provide a starting point for a Sails backend that works with an Ember frontend app. However, there are a lot of things missing that would be needed for a full blown app (like authentication and access control) but these things don't really fit into the blueprints.
