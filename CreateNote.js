// my-app/src/pages/CreateNote.js  -> noteForm.js
import React, { useState } from 'react';
import { createNote } from '../API/noteapi';

const NoteForm = ({ onNoteCreated }) => {
  const [description , setdescription] = useState('');
  const [title, setTitle] = useState('');
 


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() && !description.trim()) return;
    try {
      await createNote({ title,description });
      setdescription('');
      setTitle('');
      onNoteCreated(); // Refresh notes
    } catch (err) {
      console.error('Error creating note:', err);
    }
  };   

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}  
        placeholder="Note Title"
      />
      <textarea
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        placeholder="Write your note..."
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
