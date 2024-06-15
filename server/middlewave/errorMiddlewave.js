// 404
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// handle Error middlewave
const errorMiddlewave = (error, req, res, next) => {
  if (res.headerSend) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknow error occured" });
};

module.exports = { notFound, errorMiddlewave };
