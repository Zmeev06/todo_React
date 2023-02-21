import React from 'react';
import Note from './Note';

const NoteList = ({notes, remove, status}) => {

    // раз ты передаёшь пропсы внутри Note с таким же названием, то можешь достать их через рест оператор из props
    // в пропсах просто props и внутри компонента -> const {notes, ...rest} = props
    // тогда можно прописать так <Note {...rest} note={note} key={note.id} />
    // но это не является каким-то каноном, просто чтобы знал, что так тоже можно

    return (
        <div className='notesList'>
            {notes.map(note => 
            <Note status={status} note={note} remove={remove} key={note.id}/>)}
        </div>
    );
};

export default NoteList;