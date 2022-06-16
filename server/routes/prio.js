const router = require('express').Router();
const res = require('express/lib/response');
let Prio = require('../models/priority.model.js');

router.route('/').get((req, res) => {
    Prio.find()
    .then(prio => res.json(prio))
    .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;