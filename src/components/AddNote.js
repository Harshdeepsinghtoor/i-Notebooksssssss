import React, { useState, useContext } from 'react'
import noteContext from '../context/notes/NoteContext';

export default function AddNote() {
    const notesContext = useContext(noteContext);
    const { addNote } = notesContext;

    const [note, setNote] = useState({ name: "", description: "", tag: "default" });
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };
    return (
        <div className="container my-3">
            <h2>Create a Note</h2>

            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Title
                    </label>
                    <input
                        name="title"
                        type="text"
                        className="form-control"
                        id="title"
                        aria-describedby="emailHelp"
                        onChange={onChange}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        id="description"
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button onClick={handleClick} type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

        </div>
    )
}
