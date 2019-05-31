const assert = require('assert');
const app = require('../../src/app');

describe('\'enemies\' service', () => {
  it('registered the service', () => {
    const service = app.service('enemies');

    assert.ok(service, 'Registered the service');
  });
});
