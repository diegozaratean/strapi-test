module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '290b2ae78bd9fb70f96fe86c1787823a'),
  },
});
