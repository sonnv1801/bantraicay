import { Container } from "react-bootstrap"

export default function CardList() {
    return (
        <Container>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Cherry</li>
                <li className="list-group-item">Grape</li>
                <li className="list-group-item">Apple</li>
                <li className="list-group-item">Mango</li>
                <li className="list-group-item">Banana</li>
            </ul>
        </Container>
    );
}