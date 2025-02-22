module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('postgres:BvyXtfIekJibXJyIizaQXzMlwiBzGUyG@mainline.proxy.rlwy.net:49657/railway'),
      ssl: {
        rejectUnauthorized: false, // Allows self-signed SSL certificates
      },
    },
  },
});
