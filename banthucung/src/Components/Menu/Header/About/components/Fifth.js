import React from "react"

export default function Fifth(props) {
    return (
        <div className="col-xl-3">
            <div className="boder-img">
                <img src={props.image} className="card-img-top iconAbouts" alt="..."/>
            </div>
            <div className="card">
            <div className="card-body">
                <h6 className="card-title kill">{props.name}</h6>
                <p className="card-text kill">{props.title}</p>
                
            </div>
            </div>
        </div>
        
    )
}