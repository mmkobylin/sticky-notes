import './App.css';

function App() {

  const addNote = () => {}
  return (
    <div className="App">
      <h1>
        Sticky Notes
      </h1>
        <form onSubmit = { addNote } className="note-form">
          <textarea placeholder = "Create a new note" ></textarea>
          <button>Add!</button>
        </form>
    </div>
  );
}

export default App;
