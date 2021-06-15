import './App.css';
import React, { useState } from 'react';


function App() {
  
  const [ noteInput, setNoteInput ] = useState(' ');

  const addNote = () => {}

  return (
    <div className="sticky-notes">
      <h1>
        Sticky Notes
      </h1>
        <form onSubmit = { addNote } className="note-form">
          <textarea 
            value = { noteInput }
            placeholder = "Create a new note"
            onChange = { (e) => { setNoteInput ( e.target.value ) } }
          >
          </textarea>
          <button>Add!</button>
        </form>
        { noteInput }
    </div>
  );
}

export default App;
