const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

// loads schema into mongodb
mongoose.model('users', userSchema);
