const router = require('express').Router();
const res = require('express/lib/response');
let Bug = require('../models/bug.model.js');

router.route('/').get((req, res) => {
    Bug.find()
    .then(bug => res.json(bug))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req, res) => {
    Bug.findById(req.params.id)
    .then(bug => res.json(bug))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Bug.findByIdAndDelete(req.params.id)
    .then(() => res.json("Bug Deleted."))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Bug.findById(req.params.id)
    .then(bug => {
        bug.description = req.body.description;
        bug.developer = req.body.developer;
        bug.priority = req.body.priority;
    })
})

router.route('/add').post((req, res) => {
    const description = req.body.description;
    const developer = req.body.developer;
    const priority = req.body.priority;

    const newBug = new Bug({
        description,
        developer,
        priority,});

    newBug.save()
    .then(() => res.json("Bug added!"))
    .catch(err => res.status(400).json('error: ' + err));
})

module.exports = router;