import axios from 'axios';
import { Card,Col, Row, Container,Button } from 'react-bootstrap';
import './App.css';


import { useEffect, useState } from 'react';
import Header from './Header';

function Photos() {
    let [data, setdata] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
               
                console.log(response.data);
                setdata(response.data)
                // setall(response.data.results)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [])
    return (
        <>
        <Header></Header>
            <Container>
                <Row>
                    {
                        data.map((ele, ind) => {
                            return (
                                <Col>
                                    <Card  style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={ele.url} />
                                        <Card.Body className='card-body'>
                                            <Card.Title>{ele.title}</Card.Title>
                                            <Card.Text>
                                                <p>Album id = {ele.albumId}</p>
                                                <p> id = {ele.id}</p>
                                            </Card.Text>
                                            {/* <Button variant="primary">Go somewhere</Button> */}
                                        </Card.Body>
                                        <Card.Img variant="top" src={ele.thumbnail} />
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}
export default Photos;