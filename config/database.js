module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('postgres:BvyXtfIekJibXJyIizaQXzMlwiBzGUyG@mainline.proxy.rlwy.net:49657/railway'),
      ssl: env.bool('DATABASE_SSL', false)
      ? { rejectUnauthorized: false }
      : false,
    },
  },
});
