var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BugSchema = new Schema(
  {
    description: {type: String, required: true},
    developer: {type: String, ref: 'Dev', required: true},
    priority: {type: String, ref: 'Prio', required: true},
  }
);

module.exports = mongoose.model('Bug', BugSchema);