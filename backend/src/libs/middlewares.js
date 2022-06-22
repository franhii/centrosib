const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  // "phone_number: must NOT have fewer than 8 characters"
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.json({
    status: statusCode,
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '😬' : error.stack,
    errors: error.errors,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
