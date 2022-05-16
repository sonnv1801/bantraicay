import React from "react"

export default function ContactLetter(props) {
    return (
        <div className="col-xl-3">
            <div className="card informations">
            <div className="card-body">
                <p className="card-text ko"><span>{props.name}</span>{props.title}</p>
            </div>
            </div>
        </div>
    )
}