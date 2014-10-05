/**
 * Module dependencies
 */
var util = require( 'util' );
var emberUtils = require('./utils/emberUtils.js');

/**
 * Enable sideloading. Edit config/blueprints.js and add:
 *   ember: {
 *     sideload: true
 *   }
 * Defaults to false.
 *
 * @type {Boolean}
 */
var performSideload = (sails.config.blueprints.ember && sails.config.blueprints.ember.sideload);

/**
 * Find One Record
 *
 * get /:modelIdentity/:id
 *
 * An API call to find and return a single model instance from the data adapter
 * using the specified id.
 *
 * Required:
 * @param {Integer|String} id  - the unique id of the particular instance you'd like to look up *
 *
 * Optional:
 * @param {String} callback - default jsonp callback param (i.e. the name of the js function returned)
 */

module.exports = function findOneRecord( req, res ) {

  var Model = emberUtils.parseModel( req );
  var pk = emberUtils.requirePk( req );

  var query = Model.findOne( pk );
  query = emberUtils.populateEach( query, req );
  query.exec( function found( err, matchingRecord ) {
    if ( err ) return res.serverError( err );
    if ( !matchingRecord ) return res.notFound( 'No record found with the specified `id`.' );

    if ( sails.hooks.pubsub && req.isSocket ) {
      Model.subscribe( req, matchingRecord );
      emberUtils.subscribeDeep( req, matchingRecord );
    }

    res.ok( emberUtils.emberizeJSON( Model, matchingRecord, req.options.associations, performSideload ) );
  } );

};
