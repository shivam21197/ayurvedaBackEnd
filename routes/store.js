const express = require('express');
const { body } = require('express-validator/check');

const storeController = require('../controllers/store');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /feed/posts
///stores?pin=560090&location='koremangla'
router.get('/getAll', storeController.getStores);

// /stores/search?searchQuery
router.get('/search/:searchQuery', storeController.findStoresByItem);

module.exports = router;
