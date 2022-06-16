const router = require('express').Router();
const res = require('express/lib/response');
let Dev = require('../models/developer.model.js');

router.route('/').get((req, res) => {
    Dev.find()
    .then(devs => res.json(devs))
    .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;