const app = require('../app');
const { connectToDatabase } = require('../utils/db');

module.exports = async (req, res) => {
  try {
    await connectToDatabase();
  } catch (err) {
    console.error('Database connection failed:', err.message);
    return res.status(500).json({
      status: 'error',
      message: 'Database connection failed. Check server logs for details.',
    });
  }

  return app(req, res);
};
