const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);

  // If request is from browser (EJS)
  if (req.headers.accept && req.headers.accept.includes("text/html")) {
    return res.status(500).render("error", {
      message: err.message || "Something went wrong",
    });
  }

  // Otherwise API response (JSON)
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorMiddleware;