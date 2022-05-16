


export default function Single_car(props) {
    return (
        <div className="col-xl-3">
            <div className="card ducts">
                <img src={props.image} className="card-img-top zoom" alt="..." />
                <div className="card-body">
                    <h5 className="card-title skin">{props.name}</h5>
                    <p className="card-text skin">{props.title}</p>
                    <p className="card-title skin">{props.letter}</p>
                </div>
            </div>
        </div>
    )
}
