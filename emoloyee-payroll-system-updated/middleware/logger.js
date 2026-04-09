const fs = require("fs");

const logger = (req, res, next) => {
  const log = `${req.method} ${req.url} ${new Date().toISOString()}\n`;
  fs.appendFileSync("log.txt", log);
  next();
};

module.exports = logger;