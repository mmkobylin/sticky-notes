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
      rotate: Math.floor(Math.random()*15)
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
        {
          return newState;
        }
      }
    }
  }
  
  // reducer 
  const [ notesState, dispatch] = useReducer(notesReducer, initialNoteState )

  const dragOver = event => {
    event.stopPropagation();
    event.preventDefault();
  }

  // changes position by creating new left and top parameters 
  const dropNote = event => {
    event.target.style.left = `${event.pageX - 50 }px`;
    event.target.style.top = `${event.pageY - 50 }px`;
  }
  
  return (
    <div className="sticky-notes"
      onDragOver = { dragOver } 
    >
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
          <div className="note"

            draggable = "true" 
            onDragEnd = { dropNote }
            // unique reference
            key = { note.id }
            style = { { transform: `rotate(${note.rotate}deg)` } }
          >
            <pre className="text"> { note.text } </pre>
          </div>
        )

    )
      }
    </div>
  );
}

export default App;
