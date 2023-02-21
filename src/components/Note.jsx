import React from 'react';
const Note = (props) => {

    return (
        <div className='note'>
            <div className="noteBlock" onClick={() => props.status(props.note.id)}>
                <div className="noteText">
                    <div className={!props.note.status ? "checkNoteActive" : "checkNoteUnActive"}></div>
                    <p className={!props.note.status ? "noteNameActive" : "noteName"}>{props.note.name}</p>
                </div>
            </div>
            <button className="removeBtn" onClick={()=>props.remove(props.note)}><img src="./assets/img/cross.svg" alt="" className='removeBtnImg' /></button>
        </div>
    );
};

export default Note;

