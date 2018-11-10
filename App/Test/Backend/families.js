var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FamilySchema = new Schema(
  {
    patient_id: {type: String, required: true, max: 100},
    name: {type: String, required: true, max: 100},
    location: {type: String, required: true, max: 100}
  }
);

//Export model
module.exports = mongoose.model('Family', FamilySchema);