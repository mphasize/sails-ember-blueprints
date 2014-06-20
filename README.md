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



* Drop the blueprints from this repository in `myproject/api/blueprints`
* Generate some API resources, e.g. `sails generate api user`
* Start your app with `sails lift`


Now you should be up and running and your Ember Data app should be able to talk to your Sails backend.
