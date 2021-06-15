import './App.css';
import React, { useState, useReducer } from 'react';


function App() {

  const addNote = () => {}
  
  const [ noteInput, setNoteInput ] = useState(' ');

  const notesReducer = ( prevState, action ) => {
    switch(action.type) {
      case 'ADD_NOTE' : {
        action.payload
      }
    }
  }

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
