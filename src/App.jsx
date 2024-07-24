import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import InputBox from "./main/InputBox";
import HeaderTop from "./header/HeaderTop";


function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuidv4(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <>
    
    <div className="App">
        <Sidebar 
            notes={notes}
            onAddNote={onAddNote}
            onDeleteNote={onDeleteNote}
            activeNote={activeNote}
            setActiveNote={setActiveNote}
        />
        <div style={{width:"100vw"}}>
        {/* <HeaderTop/> */}
        <InputBox activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
        </div>
        
    </div>
    </>
  );
}

export default App;

