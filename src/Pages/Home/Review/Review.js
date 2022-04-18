import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Review.css'

const Review = (props) => {
    const {picture, name, description} = props.review;
    return (
        <Col className='review'>
            <Card className='h-100'>
                <Card.Body>
                    <div className='d-flex'>
                        <img src={picture} alt="" className='col-6 me-4'/>
                        <p className='fs-2 text-color fw-bold'>{name}</p>
                    </div>
                    <p className='text-secondary text-start'>{description}</p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;