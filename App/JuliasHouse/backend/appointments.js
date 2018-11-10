var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AppointmentsSchema = new Schema(
  {
    Date: {type: String},
    Carer_ID: {type: Schema.Types.ObjectId, ref: 'Carers', required: true},
    Family_ID: {type:a Schema.Types.ObjectId, ref: 'Families', required: true},
    Start: {type: Date, default: Date.now},
    End: {type: Date, default: Date.now},
    Comments: {type: String}
  }
);



//Export model
module.exports = mongoose.model('Appointments', AppointmentsSchema);

