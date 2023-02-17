import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext';
import AddNote from './AddNote';
import Noteitems from './Noteitems';

export default function Notes() {
    const notesContext = useContext(noteContext);
    const { notes, addNote } = notesContext;
    return (
        <>
            <AddNote></AddNote>
            <div className="row my-3">

                <h2>Notes Listing</h2>
                {notes.map((n) => {
                    return <Noteitems note={n} key={n._id}></Noteitems>
                })}
            </div>
        </>
    )
}
