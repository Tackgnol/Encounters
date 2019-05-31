// Initializes the `enemies` service on path `/enemies`
const createService = require('feathers-mongoose');
const createModel = require('../../models/enemies.model');
const hooks = require('./enemies.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/enemies', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('enemies');

  service.hooks(hooks);
};
