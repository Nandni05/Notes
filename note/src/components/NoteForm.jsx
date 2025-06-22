import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    addNote({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-4">
      <input
        type="text"
        placeholder="Note Title"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your note here..."
        className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="4"
      />
      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow-md"
      >
        ➕ Add Note
      </button>
    </form>
  );
};

export default NoteForm;
