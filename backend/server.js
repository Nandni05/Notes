require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const Note = require('./models/Note');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
connectDB(); // Connect MongoDB

// Get all notes
app.get('/api/notes', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Add a note
app.post('/api/notes', async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });
  await newNote.save();
  res.status(201).json({ message: 'Note saved!', newNote });
});

// Delete a note
app.delete('/api/notes/:id', async (req, res) => {
  const id = req.params.id;
  await Note.findByIdAndDelete(id);
  res.json({ message: 'Note deleted!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
