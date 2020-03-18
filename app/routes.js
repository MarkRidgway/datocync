const express = require('express');

const siteController = require('./controllers/site');

const router = express.Router();

// export the router
module.exports = router;

// Site Routes ======================================================
router.get('/hi', siteController.helloWorld);

// 404 Catch All
router.use(siteController.show404);
