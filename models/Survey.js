const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient'); // sub document collection

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date,
  // credits: { type: Number, default: 0 },
});

// loads schema into mongodb
mongoose.model('surveys', surveySchema);
