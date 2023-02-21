// удали ненужные файлы из проекта, которые с cra создались 

import "./App.css";
import React, { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import NewNote from "./components/NewNote";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);
  const [filtered, setFiltered] = useState(notes);

  // непонятная функция, её либо вообще убрать, либо сделать иначе, фильтр здесь явно ни к чему
  const statusNote = (id) => {
    setNotes(notes.map(e => e.id === id ? ({...e, status:!e.status}) : e))
  }

  const createNote = (name) => {
    setNotes([...notes, {id: Date.now(), name:name, status:true}]);
  };

  const removeNote = (note) => {
    setNotes(notes.filter((n) => n.id !== note.id));
  };



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
