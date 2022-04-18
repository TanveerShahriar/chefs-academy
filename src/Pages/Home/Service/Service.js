import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'


const Review = (props) => {
    const {picture, name, description, price} = props.review;
    return (
        <Col>
            <Card className='h-100 mx-auto'>
                <Card.Img className='mx-auto img-card' variant="top" src={picture} />
                <Card.Body>
                    <div className='col-8 mx-auto px-3'>
                        <div className='text-start'>
                            <p className='fs-1 text-color fw-bold'>{name}</p>
                            <p className='fs-2 fw-bold'>Master Course</p>
                            <p className='text-secondary'>{description}</p>
                            <p className='fs-3 fw-bold'>Price: {price}</p>
                            <button className='btn btn-outline-danger'>Enroll</button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;