const { clone } = require('lodash');

const config = clone(require('../default.config'));

config.features = {
  request: true,
  requestUri: { requireRequestUriRegistration: false },
  claimsParameter: true,
};
config.unsupported = {
  requestObjectSigningAlgValues: ['HS384'],
};

module.exports = {
  config,
  clients: [{
    client_id: 'client',
    client_secret: 'its48bytes_____________________________________!',
    redirect_uris: ['https://client.example.com/cb'],
  }, {
    client_id: 'client-with-HS-sig',
    client_secret: 'atleast32byteslongforHS256mmkay?',
    request_object_signing_alg: 'HS256',
    redirect_uris: ['https://client.example.com/cb'],
  }],
};
