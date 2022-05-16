


export default function Products(props) {
    return(
        <div className="products">
           <span>{props.title}</span>
           <h2><b>{props.content}</b></h2>
           <p>{props.description}</p>
        </div>
    )
}