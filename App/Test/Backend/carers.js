var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CarersSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    carer_id: {type: String, required: true, max: 100},
    contact: {type: String, required: true, max: 100},
    address: {type: String, required: true, max: 100},
    next_kin: {type: String, required: true, max: 100}
  }
);

// Virtual for carer's full name
CarersSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for carer's contact
CarersSchema
.virtual('contact')
.get(function () {
  return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
});

// Virtual for carer's ID
CarersSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);