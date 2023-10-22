import Note from "./Note.js"
import AddNote from "../Components/AddNote.js";

const NotesList = ({notes, handleAddNote, handleDeleteNote, darkMode}) =>{
    return (
        <div className = "notes-list">
            <AddNote handleAddNote = {handleAddNote}  darkMode = {darkMode}/> 
            {notes.map((notes)=> 
            <Note 
                id = {notes.id}
                date = {notes.date} 
                text = {notes.text} 
                handleDeleteNote = {handleDeleteNote}
            />)}            
            {/* <AddNote handleAddNote = {handleAddNote}  darkMode = {darkMode}/>  */}
        </div>  
        
    )
}

export default NotesList;