module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        connectionString: env('postgresql://postgres:BvyXtfIekJibXJyIizaQXzMlwiBzGUyG@mainline.proxy.rlwy.net:49657/railway'),
        ssl: env.bool('DATABASE_SSL', true) ? { rejectUnauthorized: false } : false,
      },
    },
  });
  module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        connectionString: env('DATABASE_URL'),
        ssl: env.bool('DATABASE_SSL', true) ? { rejectUnauthorized: false } : false,
      },
    },
  });
  