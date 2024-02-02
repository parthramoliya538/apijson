import './App.css';
import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
function Header() {
    return(
        <>
            <Container>
                <Row>
                    <Col className='d-flex justify-content-between one'>
                        <h5><Link to="/Posts">POSTS</Link></h5>
                        <h5><Link to="/Comments">COMMENTS</Link></h5>
                        <h5><Link to="/Albums">ALBUMS</Link></h5>
                        <h5><Link to="/Todos">TODOS</Link></h5>
                        <h5><Link to="/Photos">PHOTOS</Link></h5>
                        <h5><Link to="/Users">USERS</Link></h5>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header;