import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Testimonials.css';

function Testimonial() {
  return (
    <div className='p-5'>
        <CardGroup>
                <Card className='m-4 card shadow-2-strong'>
                    <Card.Img className='card-img' variant="top" src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720" />
                    <Card.Body className='card-info'>
                        <Card.Title className='card-info-h2'>Online Experiences</Card.Title>
                        <Card.Text className='card-info-h4'>
                        Unique activities we can do together, led by a world of hosts.
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card className='m-4 card shadow-2-strong'>
                    <Card.Img className='card-img' variant="top" src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720" />
                    <Card.Body className='card-info'>
                        <Card.Title className='card-info-h2'>Unique stays</Card.Title>
                        <Card.Text className='card-info-h4'>
                        Spaces that are more than just a place to sleep.
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card className='m-4 card shadow-2-strong'>
                    <Card.Img className='card-img' variant="top" src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg" />
                    <Card.Body className='card-info'>
                        <Card.Title className='card-info-h2'>3 Bedroom Flat in Chittagang</Card.Title>
                        <Card.Text className='card-info-h4'>
                        Superhost with a stunning view of the beachside in Sunny Chittagang.
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card className='m-4 card shadow-2-strong'>
                    <Card.Img className='card-img' variant="top" src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" />
                    <Card.Body className='card-info'>
                        <Card.Title className='card-info-h2'>Entire homes</Card.Title>
                        <Card.Text className='card-info-h4'>
                        Comfortable private places, with room for friends or family.
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card className='m-4 card shadow-2-strong'>
                    <Card.Img className='card-img' variant="top" src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg" />
                    <Card.Body className='card-info'>
                        <Card.Title className='card-info-h2'>Penthouse in Chittagang</Card.Title>
                        <Card.Text className='card-info-h4'>
                        Enjoy the amazing sights of Chittagang with this stunning penthouse.
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
            </CardGroup>
    </div>
  )
}

export default Testimonial;