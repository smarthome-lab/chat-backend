// Initializes the `chats` service on path `/chats`
const createService = require('feathers-sequelize');
const createModel = require('../../models/chats.model');
const hooks = require('./chats.hooks');

module.exports = app => {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/chats', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('chats');

  service.hooks(hooks);
};
