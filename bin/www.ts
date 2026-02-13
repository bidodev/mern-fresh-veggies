/* eslint-disable no-console */
/**
 * Module dependencies.
 */
const dotenv = require('dotenv');
const http = require('http');
const { connectToDatabase, getMongoUri } = require('../utils/db');

process.on('uncaughtException', (err: any) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({
  path: './config.env',
});
const app = require('../app');

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || '5000';
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      // eslint-disable-next-line no-console
      console.error(`💥 ${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      // eslint-disable-next-line no-console
      console.error(`💥 ${bind} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`🚀 Server running on ${bind}...`);
}

/**Mongoose connect and start the server */

let mongoUri;
try {
  mongoUri = getMongoUri();
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

connectToDatabase()
  .then(() => {
    console.log(
      mongoUri.includes('localhost')
        ? '🚀 Connected to mongodb://localhost:27017'
        : '🚀 Connected to Atlas MongoDB'
    );
  })
  .then(() => {
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });

process.on('unhandledRejection', (err: any) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});
