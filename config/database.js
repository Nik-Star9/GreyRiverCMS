module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('postgresql://postgres:BvyXtfIekJibXJyIizaQXzMlwiBzGUyG@postgres.railway.internal:5432/railway'),
      ssl: {
        rejectUnauthorized: false, // Bypasses SSL certificate errors
      },
    },
  },
});
