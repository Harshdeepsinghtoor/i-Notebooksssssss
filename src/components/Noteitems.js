import React from 'react'

export default function Noteitems(props) {
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3"
            // style={{ width: "18rem" }}
            >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-edit mx-2"></i>
                    <i className="fa-solid fa-trash-alt mx-2"></i>
                </div>
            </div>

        </div>

    )
}
