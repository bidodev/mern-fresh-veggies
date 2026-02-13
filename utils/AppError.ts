class AppError extends Error {
  statusCode: number;
  status: string;

  constructor(message: string, statusCode: number, status = 'error') {
    super(message);
    this.statusCode = statusCode;
    this.status = status;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
