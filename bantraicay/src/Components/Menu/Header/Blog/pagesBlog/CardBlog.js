import { Container } from "react-bootstrap"
import ButtonBlog from "./BlogA/Button";

export default function CardBlog(props) {
    return (
            <Container className={props.spaceCard}>
            <div className={props.class}>
                <div className="row g-0">
                    <div className="col-4">
                        <img src={props.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <p className="DateCard">{props.date}</p>
                            <h5 className="card-title">{props.titles}</h5>
                                <p className="TextContent">{props.contents}</p>
                            <div className="card-text"><small className="text-muted">
                                <ButtonBlog />
                            </small></div>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
    );
}


