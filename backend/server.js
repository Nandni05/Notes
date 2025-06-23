require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const Note = require('./models/Note');
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
connectDB(); // Connect MongoDB

// 🟢 Get all notes
app.get('/api/notes', async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 }); // 🆕 Sort newest first
  res.json(notes);
});

// 🟢 Add a note with mood detection
app.post('/api/notes', async (req, res) => {
  const { title, content } = req.body;

  const result = sentiment.analyze(content);
  let mood = "😐"; // neutral
  if (result.score > 2) mood = "😊";
  else if (result.score < -2) mood = "😞";
  else if (result.score < 0) mood = "😠";

  const newNote = new Note({ title, content, mood });
  await newNote.save();

  res.status(201).json({ message: 'Note saved with mood!', note: newNote });
});

// 🟢 Delete a note
app.delete('/api/notes/:id', async (req, res) => {
  const id = req.params.id;
  await Note.findByIdAndDelete(id);
  res.json({ message: 'Note deleted!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
