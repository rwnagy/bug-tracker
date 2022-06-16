var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PrioSchema = new Schema(
  {
    rank: {type: String, required: true},
  }
);

module.exports = mongoose.model('Prio', PrioSchema);