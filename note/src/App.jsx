import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await axios.get('http://localhost:5000/api/notes');
    setNotes(res.data);
  };

  const addNote = async (note) => {
    await axios.post('http://localhost:5000/api/notes', note);
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/api/notes/${id}`);
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* 🔷 Top Heading */}
      <header className="py-6 bg-purple-600 shadow-md text-white text-center text-3xl font-bold">
        📝 My Notes
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* 🔶 Notes Section */}
        <section className="mb-10">
          <NoteForm addNote={addNote} />
        </section>

        {/* 🟩 Add Note Form */}
         {/* 🔶 Notes Section */}
        <section >
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {notes.map((note) => (
              <NotesList key={note._id} note={note} deleteNote={deleteNote} />
            ))}
          </div>
        </section>
        
      </main>
    </div>
  );
};

export default App;

