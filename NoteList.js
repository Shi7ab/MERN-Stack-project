// NoteList.js
import React, { useEffect, useState } from 'react';
import { getNotes } from '../API/noteapi';
import { Link } from 'react-router-dom';

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const { data } = await getNotes();
      setNotes(data.data || []); // ❗️ تأكد أن backend يرجع `data` وليس `note`
      console.log('Fetched notes:', data.data);
    } catch (err) {
      console.error('Error fetching notes:', err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <Link to="/">Back</Link>
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
