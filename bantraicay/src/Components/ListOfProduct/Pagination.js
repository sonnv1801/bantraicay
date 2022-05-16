import { 
    Link
} from "react-router-dom";

export default function Pagination(props){
    return(
    <nav aria-label="...">
        <ul className="pagination">
            <li className="page-item disabled">
            <Link to={props.href} className="page-link">Previous</Link>
            </li>

            <li className="page-item active"><Link className="page-link" to={props.href}>1</Link></li>

            <li className="page-item" aria-current="page">
            <Link to={props.href} className="page-link">2</Link>
            </li>
        
            <li className="page-item"><Link className="page-link" to={props.href}>3</Link></li>
            <li className="page-item"><Link className="page-link" to={props.href}>4</Link></li>
            <li className="page-item"><Link className="page-link" to={props.href}>5</Link></li>

            <li className="page-item">
            <Link className="page-link" to={props.href} >Next</Link>
            </li>
        </ul>
    </nav>
);
}