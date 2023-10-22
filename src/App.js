import {useState} from "react";
import {nanoid} from "nanoid";
import NotesList from "./Components/NotesList.js";
import Search from "./Components/Search.js"
import Header from "./Components/Header.js"

const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(true);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id : nanoid(),
      text : text, 
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter( (note) => note.id !== id );
    setNotes(newNotes);
  }

  return ( 
    <div className = {`${darkMode && 'dark-mode'}`} >
        <div className = "container">
          <Header handleToggleDarkMode = {setDarkMode} darkMode={darkMode}/>
          <Search handleSearchNote = {setSearchText}/>
          <NotesList 
            notes = {notes.filter( (note) => 
              note.text.toLowerCase().includes(searchText))} 
            handleAddNote = {addNote}
            handleDeleteNote = {deleteNote}
            darkMode = {darkMode}
          />        
        </div>
      </div>
    );
}

export default App;