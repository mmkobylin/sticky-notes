import './App.css';
import React, { useState, useReducer } from 'react';


function App() {

  const initialNoteState = {
    lastNoteCreated: null, 
    totalNotes: 0,
    notes: [],
  }

  const [ noteInput, setNoteInput ] = useState(' ');
  const addNote = ( e ) => {
    e.preventDefault(); 

   
    // return on empty
    if (!noteInput) {
      return 
    } 

    const newNote = {
      text: noteInput,
    }; 

    dispatch( { type: 'ADD_NOTE', payload: newNote } )
  }

  const notesReducer = ( prevState, action ) => {
    switch (action.type) {
      case 'ADD_NOTE' : {
        // updating the state from intial state
        const newState = {
          lastNoteCreated: new Date().toTimeString().slice(0, 8),
          totalNotes: prevState.notes.length + 1,
          notes: [...prevState.notes, action.payload]
        };
        console.log('After ADD_NOTE: ', newState); {
          return newState;
        }
      }
    }
  }
  
  // reducer 
  const [ notesState, dispatch] = useReducer(notesReducer, initialNoteState )


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
