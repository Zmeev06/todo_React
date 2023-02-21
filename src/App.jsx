// удали ненужные файлы из проекта, которые с cra создались 

import "./App.css";
import React, { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import NewNote from "./components/NewNote";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);

  // непонятная функция, её либо вообще убрать, либо сделать иначе, фильтр здесь явно ни к чему
  const statusNote = (note) => {
    let newNotes = [...notes].filter(n => {
      if (n.id === note.id) {
        n.status = !n.status
      }
      return n
    })
    setNotes(newNotes)
  }

  const createNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const removeNote = (note) => {
    setNotes(notes.filter((n) => n.id !== note.id));
  };

  // стейты в начале компонента должны находиться
  const [filtered, setFiltered] = useState(notes);

  const setFilter = (status) => {
    if (status === "all") {
      setFiltered(notes);
    } else {
      setFiltered([...notes].filter((n) => n.status === status));
    }
  };

  useEffect( () => {
    setFiltered(notes)
  }, [notes])

  return (
    <div className="App">
      <div className="mainBlock">
        <NewNote create={createNote} notes={notes} />
        <NoteList remove={removeNote} status={statusNote} notes={filtered} />
        <Footer filter={setFilter} counter={filtered.length} />
      </div>
    </div>
  );
}

export default App;
