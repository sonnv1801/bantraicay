import React from "react";
import { Carousel } from "react-bootstrap"

export default class JMGHeaderBlog extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Carousel variant="">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgheader"
                            src={"https://riibeautybox.com/wp-content/uploads/2020/05/bao-quan-trai-cay-5-1536x865.jpg"}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="titleblog">
                            <h1><p>HOME BLOG</p></h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}