// utilities, like "emberizeJSON", "parsePk", "parseCriteria".
var utils = require('./blueprints/utils/emberUtils.js');

// sails blueprints
var create = require('./blueprints/create.js');
var destroy = require('./blueprints/destroy.js');
var find = require('./blueprints/find.js');
var findone = require('./blueprints/findone.js');
var populate = require('./blueprints/populate.js');
var update = require('./blueprints/update.js');

/**
 * Ember Data compatible blueprints and utilities.
 *
 * @type Object
 */
var sailsEmberBlueprints = module.exports = {};

// expose utils
sailsEmberBlueprints.utils = utils;

// expose blueprints
sailsEmberBlueprints.blueprints = {
  create: create,
  destroy: destroy,
  find: find,
  findone: findone,
  populate: populate,
  update: update
};
