import React from 'react';

const NotesList = ({ note, deleteNote }) => {
  return (
    <div className="bg-white h-[240px] rounded-xl p-5 shadow-md border-l-4 border-purple-500 hover:shadow-xl transition-all space-y-3 overflow-scroll overflow-x-hidden">
      {note.createdAt && (
        <p className="text-sm text-gray-500 mt-1">
        🕒{new Date(note.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
         })}
       </p>
     )}
      <div className="flex justify-between items-start">
        
        <h2 className="text-xl font-bold text-purple-800">{note.title}</h2>
        <span className="text-2xl">{note.mood || '😐'}</span>
      </div>
      
      <p className="text-gray-700 leading-relaxed">{note.content}</p>

      <div className="flex justify-end">
        <button
          onClick={() => deleteNote(note._id)}
          className="text-sm text-white bg-red-500 px-4 py-1 rounded-md hover:bg-red-600 transition"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default NotesList;

