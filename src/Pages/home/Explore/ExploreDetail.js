import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ExploreDetail = props => {
    const { imgSrc, price, title, properties } = props.data;
    return (
        <Card className='p-0 overflow-hidden h-100 shadow'>
            <div className='overflow-hidden rounded p-0 bg-light'>
                <Card.Img variant='top' src={imgSrc} />
            </div>
            <Card.Body className='text-center'>
                <Card.Title>{title}</Card.Title>
                <Card.Title><small>{properties}</small></Card.Title>
                
            </Card.Body>
            {/* <Button className='w-100 rounded-0' variant='success'>Add To Cart</Button> */}
        </Card>
    )
}

export default ExploreDetail