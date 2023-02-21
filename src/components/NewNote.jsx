import React, {useState} from 'react';

const NewNote = ({create, notes}) => {

    // для инпута должно быть отдельное состояние
    const [note, setNote] = useState("")

    
    const addNewNote = (e) => {
        e.preventDefault()
        if(note === "") {
            alert("Поле не должно быть пустым!")
        } else if (note.length > 60) {
            alert("Слишком длинное название задачи!")
            setNote("")
        } else {
            if(notes.length ===17) {
                alert("Нельзя добавить больше 17 записей!")
            } else {
// По хорошему лучше переделать функцию добавления задачи и передавать в неё не фул объект, а лишь текст.
// А создавать структуру объекта уже в самой функции создания, которая в App.jsx
            const name = note
            create(name)
            setNote("")
        }
        }
    }
    
    return (
        <form className='newNote'>
            <input className='newNoteInput' value={note} onChange={e => setNote(e.target.value)} placeholder="Напиши здесь новую задачу..."/>
            <button className='newNoteBtn' onClick={addNewNote}>Добавить</button>
        </form>
    );
};

export default NewNote;