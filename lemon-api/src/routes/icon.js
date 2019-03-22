var express = require('express');
var router = express.Router();
const curd = require("mongodb-curd");
const getIcon = require("./getIcon/icon.js")
    /* GET users listing. */
router.get('/api/getIcon', getIcon.geticon);
router.post('/api/addIcon', getIcon.add);
router.get('/api/findIcon', getIcon.find);
module.exports = router;