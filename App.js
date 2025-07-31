import React from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import NoteForm from './pages/CreateNote'
import NotesList from './pages/NoteList';
import './App.css';

function App() {
   const [update, setUpdate] = React.useState(false);

  const handleNoteCreated = () => setUpdate(!update);
  return (
    <div className="App">
      <header className="App-header">
         <Link to="/notedata">NoteData</Link>
         <Link to="/">Home</Link>
          <div className="App">
          <h1>My Notes</h1>
          <NoteForm onNoteCreated={handleNoteCreated} />
          {/* <NotesList key={update} /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
