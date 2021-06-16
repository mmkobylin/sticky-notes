import './App.css';
import React, { useState, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialNoteState = {
  lastNoteCreated: null, 
  totalNotes: 0,
  notes: [],
}

function App() {

  const [ noteInput, setNoteInput ] = useState(' ');
  const addNote = ( e ) => {
    e.preventDefault(); 

   
    // return on empty
    if (!noteInput) {
      return 
    } 

    const newNote = {
      id: uuidv4(),
      text: noteInput,
      // rotate
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

      {/* access noteState */} 

      { notesState 
        .notes
        .map(note => (
          <div className="note">
            <pre className="text"> { note.text } </pre>
          </div>
        )

    )
      }
    </div>
  );
}

export default App;
