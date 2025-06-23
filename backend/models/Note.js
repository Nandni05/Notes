// models/Note.js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  mood: String, // ✅ mood field is required!
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
