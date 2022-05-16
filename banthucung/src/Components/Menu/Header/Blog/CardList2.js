import { ListGroup } from "react-bootstrap"

export default function CardList2() {

    return (
        <div className="container">
            <ListGroup horizontal>
                <ListGroup.Item className="list2">FRUIT</ListGroup.Item>
                <ListGroup.Item className="list2">TOMATO</ListGroup.Item>
                <ListGroup.Item className="list2">MANGO</ListGroup.Item>
                <ListGroup.Item className="list2">APPLE</ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal>
            <ListGroup.Item className="list2">CARROTS</ListGroup.Item>
            <ListGroup.Item className="list2">ORANGE</ListGroup.Item>
            <ListGroup.Item className="list2">PEPPER</ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal>
            <ListGroup.Item className="list2">EGGPANT</ListGroup.Item>
            </ListGroup>
        </div>
    );
}