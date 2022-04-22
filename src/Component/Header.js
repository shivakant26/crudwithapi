import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "./Menu";

const Header = () => {
    return (
        <div className="header">
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <h2 className="logo">★彡𝔠𝔯𝔲𝔡𝔴𝔦𝔱𝔥𝔞𝔭𝔦彡★</h2>
                    </Col>
                    <Col md={8}><Menu /></Col>
                </Row>
            </Container>
        </div>
    )
}


export default Header;