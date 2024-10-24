module.exports = ({ env }) => ({
  auth: {
    secret: env('secret.test-store-kk9f66u6t9'),
  },
  apiToken: {
    salt: env('secret.test-store-kk9f66u6t9'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
