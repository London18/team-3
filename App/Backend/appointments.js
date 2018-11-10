var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AppointmentsSchema = new Schema(
  {
    Date: {type: Date, default: Date.now},
    Carer_ID: {type: Schema.Types.ObjectId, ref: 'Carers', required: true},
    Family_ID: {type: Schema.Types.ObjectId, ref: 'Families', required: true},
    // Start: 
    // End: 
    Comments: {type: String}
  }
);



//Export model
module.exports = mongoose.model('Appointments', AppointmentsSchema);

