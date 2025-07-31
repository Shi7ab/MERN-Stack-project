import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
// import { createNote } from './pages/CreateNote';
import NodeList from './pages/NoteList';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/notedata" element={<NodeList />} />
        {/* <Route path="/createnote" element={<createNote />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals(console.log);
