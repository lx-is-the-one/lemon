var express = require('express');
var router = express.Router();
const curd = require("mongodb-curd");
const getUser = require("./getUser/user.js")
    /* GET users listing. */
router.get('/api/getUser', getUser);

module.exports = router;