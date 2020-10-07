module.exports = (err, req, res, next) => {
  
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
  
    const errorObj = {
      status: err.status,
      message: err.message,
    };
  
    if (process.env.NODE_ENV === 'production') {
      if (err.isOperational) {
        return res.status(err.statusCode).json(errorObj);
      }
  
      console.error('ERROR', err);
      res.status(500).json({ status: 'error', message: 'Something went wrong' });
    }
  
    /**
     * When running in development mode send back the full error stack.
     */
    if (process.env.NODE_ENV === 'development') {
      return res.status(err.statusCode).json({
        ...errorObj,
        stack: err.stack,
        error: err,
      });
    }
  };