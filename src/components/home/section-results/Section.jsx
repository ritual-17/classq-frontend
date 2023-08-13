import React, { useContext } from 'react'
import './Section.css'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';
import { CartContext } from '../../../contexts/CartContext';

const Section = ({ section }) => {

    const [cart, setCart] = useContext(CartContext);
    const addToCart = (section) => {
        if (!cart.includes(section)) {
            const newCart = [...cart, section]
            setCart(newCart)
            console.log(newCart)
        }
    }

    return (
        <Card className='section-card'>
            <Card.Body className='section-title'>
                <Card.Title>{section.name}</Card.Title>
            </Card.Body>
            <ListGroup className='section-info' >
                <ListGroup.Item key='type'>Type: {section.activity}</ListGroup.Item>
                <ListGroup.Item key='term'>Term: {section.term}</ListGroup.Item>
                <ListGroup.Item key='instructor'>Instructor: {section.instructor}</ListGroup.Item>
                <ListGroup.Item key='days'>Days: {section.days}</ListGroup.Item>
                <ListGroup.Item key='time'>Time: {section.start} - {section.end}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button variant="primary" href={section.seatsURL} target='_blank' >Section Page</Button>
                <Button variant="secondary" onClick={() => addToCart(section)}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default Section