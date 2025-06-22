import React from 'react';

const NotesList = ({ note, deleteNote }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-all">
      <h2 className="text-xl font-semibold text-purple-700 mb-2">{note.title}</h2>
      <p className="text-gray-700">{note.content}</p>
      <button
        onClick={() => deleteNote(note._id)}
        className="mt-4 inline-block text-sm text-white bg-red-500 px-4 py-1 rounded-md hover:bg-red-600"
      >
        🗑️ Delete
      </button>
    </div>
  );
};

export default NotesList;
