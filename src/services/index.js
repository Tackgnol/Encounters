const enemies = require('./enemies/enemies.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(enemies);
};
