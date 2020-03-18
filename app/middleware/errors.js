const applog = require('../utilities/app-logger');

module.exports = {
  logErrors(error, req, res, next){
    console.log(error.message);
    console.log(error.stack);
    next(error);
  },
  sendErrors(error, req, res, next){
    res.status(500);
    res.json({ error: error.message });
  }
}
