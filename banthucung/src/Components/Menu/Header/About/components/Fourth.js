import React from "react"

export default function Fourth(props) {
    return (
        <div className="col-xl-4">
            <div className="card">
            <img src={props.image} className="card-img-top fourth" alt="..."/>
            <div className="card-body">
                <p className="card-text">{props.title}</p>
                <h5 className="card-title kill">{props.name}</h5>
                <p className="card-title kill">{props.letter}</p>
            </div>
            </div>
        </div>
        
    )
}