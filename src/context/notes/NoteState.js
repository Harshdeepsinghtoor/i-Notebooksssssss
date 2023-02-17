import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {

    const initialNotes = [
        {
            "_id": "63eddedf9c0b8ef5f077fc46",
            "title": "My Title",
            "description": "Hello How are you doing",
            "tag": "Personal",
            "user": "63e6393dc62086fffd12897d",
            "date": "2023-02-16T07:44:31.690Z",
            "__v": 0
        },
        {
            "_id": "63ede0870befdbe563f6d3d5",
            "title": "My Title 7",
            "description": "Hello How are you doing",
            "tag": "Personal",
            "user": "63e6393dc62086fffd12897d",
            "date": "2023-02-16T07:51:35.028Z",
            "__v": 0
        },
        {
            "_id": "63ede0870befdbe563f6d3d5r",
            "title": "My Title 7",
            "description": "Hello How are you doing",
            "tag": "Personal",
            "user": "63e6393dc62086fffd12897d",
            "date": "2023-02-16T07:51:35.028Z",
            "__v": 0
        },
        {
            "_id": "63ede0870befdbe563f6d3d5rr",
            "title": "My Title 7",
            "description": "Hello How are you doing",
            "tag": "Personal",
            "user": "63e6393dc62086fffd12897d",
            "date": "2023-02-16T07:51:35.028Z",
            "__v": 0
        },
        {
            "_id": "63ede0870befdbe563f6d3d5rrr",
            "title": "My Title 7",
            "description": "Hello How are you doing",
            "tag": "Personal",
            "user": "63e6393dc62086fffd12897d",
            "date": "2023-02-16T07:51:35.028Z",
            "__v": 0
        },
        {
            "_id": "63ede0870befdbe563f6d3d5rrrr",
            "title": "My Title 7",
            "description": "Hello How are you doing",
            "tag": "Personal",
            "user": "63e6393dc62086fffd12897d",
            "date": "2023-02-16T07:51:35.028Z",
            "__v": 0
        },
        {
            "_id": "63ede0870befdbe563f6d3d5rrrrrrr",
            "title": "My Title 7",
            "description": "Hello How are you doing",
            "tag": "Personal",
            "user": "63e6393dc62086fffd12897d",
            "date": "2023-02-16T07:51:35.028Z",
            "__v": 0
        }
    ];

    const [notes, setNotes] = useState(initialNotes);

    // Add a Note 
    const addNote = (title, description, tags) => {
        const note = {
            "_id": "63ede0870befdbe563f6d3d5rrrrrrrs",
            "title": title,
            "description": description,
            "tag": tags,
            "user": "63e6393dc62086fffd12897d",
            "date": "2023-02-16T07:51:35.028Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }
    // Edit a Notes 
    const editsNote = () => {

    }
    // Deletes a Notes 
    const deletesNote = () => {

    }
    return (
        <noteContext.Provider value={{ notes, addNote, editsNote, deletesNote }}>
            {props.children}
        </noteContext.Provider>
    )
};

export default NoteState;