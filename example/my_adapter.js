/* eslint-disable */
'use strict';

class MyAdapter {

  /**
   *
   * Creates an instance of MyAdapter for an oidc-provider model.
   *
   * @constructor
   * @param {string} name Name of the oidc-provider model. One of "Session", "AccessToken",
   * "AuthorizationCode", "RefreshToken", "ClientCredentials", "Client", "InitialAccessToken",
   * "RegistrationAccessToken"
   *
   */
  constructor(name) {

  }

  /**
   *
   * Update or Create an instance of an oidc-provider model.
   *
   * @return {Promise} Promise fulfilled when the operation succeeded. Rejected with error when
   * encountered.
   * @param {string} id Identifier that oidc-provider will use to reference this model instance for
   * future operations.
   * @param {object} payload Object with all properties intended for storage.
   * @param {integer} expiresIn Number of seconds intended for this model to be stored.
   *
   */
  async upsert(id, payload, expiresIn) {

    /**
     *
     * When this is one of AccessToken, AuthorizationCode, RefreshToken, ClientCredentials,
     * InitialAccessToken or RegistrationAccessToken the payload will contain the following
     * properties depending on the used `formats` value for the given token (or default).
     *
     * when `legacy`
     * - grantId {string} grant identifier, tokens with the same value belong together
     * - header {string} oidc-provider tokens are themselves JWTs, this is the header part of the token
     * - payload {string} second part of the token
     * - signature {string} the signature of the token
     *
     * Hint for legacy format: you can JSON.parse(base64decode( ... )) the header and payload to get
     * the token properties and store them too, they may be helpful for getting insights on your usage.
     * Modifying any of header, payload or signature values will result in the token being invalid,
     * remember that oidc-provider will do a JWT signature check of both the received and stored
     * token to detect potential manipulation.
     *
     * when `opaque`
     * - jti {string} unique identifier of the token
     * - kind {string} token class name
     * - exp {number} - timestamp of the token's expiration
     * - iat {number} - timestamp of the token's creation
     * - iss {string} - issuer identifier, useful in multi-provider instance apps
     * - accountId {string} - account identifier the token belongs to
     * - clientId {string} client identifier the token belongs to
     * - aud {array of strings} array of audiences the token is intended for
     * - authTime {number} timestamp of the end-user's authentication
     * - claims {object} requested claims (see claims parameter in OIDC Core 1.0)
     * - codeChallenge {string} - client provided PKCE code_challenge value
     * - codeChallengeMethod {string} - client provided PKCE code_challenge_method value
     * - grantId {string} - grant identifier, tokens with the same value belong together
     * - nonce {string} - random nonce from an authorization request
     * - redirectUri {string} - redirect_uri value from an authorization request
     * - scope {string} - scope value from on authorization request
     * - sid {string} - session identifier the token comes from
     *
     *
     * when `jwt`
     * - same as `opaque` with the addition of
     * - jwt {string} - the jwt value returned to the client
     *
     * Hint2: in order to fulfill all OAuth2.0 behaviors in regards to invalidating and expiring
     * potentially misused or sniffed tokens you should keep track of all tokens that belong to the
     * same grantId.
     *
     * Client model will only use this when registered through Dynamic Registration features and
     * will contain all client properties.
     *
     * OIDC Session model payload contains the following properties:
     * - account {string} the session account identifier
     * - authorizations {object} object with session authorized clients and their session identifiers
     * - loginTs {number} timestamp of user's authentication
     * - exp {number} timestamp of the session's expiration
     *
     * Short-lived Interaction Session model payload contains the following properties:
     * - accountId {string} current session account identifier
     * - returnTo {string} after resolving interactions send the user-agent to this url
     * - interaction {object} details on the interaction details (error, reason code and descriptions)
     * - exp {number} timestamp of the session's expiration
     * - uuid {string} - uuid of the grant
     * - params {object} - parsed recognized parameters object
     * - signed {array} - array of parameter names (keys) that were received from a signed and/or
     *                    symmetrically encrypted request/_uri object
     * - result {object} - interaction results object is expected here
     *
     */
  }

  /**
   *
   * Return previously stored instance of an oidc-provider model.
   *
   * @return {Promise} Promise fulfilled with either Object (when found and not dropped yet due to
   * expiration) or falsy value when not found anymore. Rejected with error when encountered.
   * @param {string} id Identifier of oidc-provider model
   *
   */
  async find(id) {

  }

  /**
   *
   * Mark a stored oidc-provider model as consumed (not yet expired though!). Future finds for this
   * id should be fulfilled with an object containing additional property named "consumed" with a
   * truthy value (timestamp, date, boolean, etc).
   *
   * @return {Promise} Promise fulfilled when the operation succeeded. Rejected with error when
   * encountered.
   * @param {string} id Identifier of oidc-provider model
   *
   */
  async consume(id) {

  }

  /**
   *
   * Destroy/Drop/Remove a stored oidc-provider model and other grant related models. Future finds
   * for this id should be fulfilled with falsy values.
   *
   * @return {Promise} Promise fulfilled when the operation succeeded. Rejected with error when
   * encountered.
   * @param {string} id Identifier of oidc-provider model
   *
   */
  async destroy(id) {

    /**
     *
     * See upsert for the note on grantId, it's imperitive to destroy all tokens with the same
     * grantId when destroy is called. To query your persistancy store for the grantId of this token
     * and also trigger a chain of removals for all related tokens is recommended.
     *
     */
  }


  /**
   *
   * A one time hook called when initializing the Provider instance, use to establish necessary
   * connections if applicable, afterwards only new instances will initialized.
   *
   * @return {Promise} Promise fulfilled when the operation succeeded. Rejected with error when
   * encountered.
   * @param {Provider} provider Provider instance for which the connection is needed
   *
   */
  static async connect(provider) {

  }
}

module.exports = MyAdapter;
