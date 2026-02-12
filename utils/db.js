const mongoose = require('mongoose');

const DEFAULT_DB_OPTIONS = {};

const getMongoUri = () => {
  const missing = [];
  if (!process.env.DATABASE_ATLAS) missing.push('DATABASE_ATLAS');
  if (!process.env.PASSWORD) missing.push('PASSWORD');

  if (missing.length) {
    throw new Error(
      `Missing required environment variables for MongoDB: ${missing.join(', ')}`
    );
  }

  return process.env.DATABASE_ATLAS.replace('<PASSWORD>', process.env.PASSWORD);
};

const globalCache = global.mongoose;
const cached = globalCache || { conn: null, promise: null };

if (!globalCache) {
  global.mongoose = cached;
}

const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const mongoUri = getMongoUri();
    cached.promise = mongoose.connect(mongoUri, DEFAULT_DB_OPTIONS).then((conn) => conn);
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

module.exports = { connectToDatabase, getMongoUri };
