const applog = require('../utilities/app-logger');

module.exports = {
  helloWorld(req, res){
    res.json({ message: 'hello, world' });
  },
  show404(req, res){
    res.status(404);
    res.json({ error: '404: Path Not Found' });
  }
}
