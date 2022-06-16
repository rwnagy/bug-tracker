var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DevSchema = new Schema(
  {
    name: {type: String, required: true},
  }
);

module.exports = mongoose.model('Dev', DevSchema);