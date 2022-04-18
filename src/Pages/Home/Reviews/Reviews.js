import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
        .then(res=> res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div>
            <Container className='my-5'>
                <h1 className='service-header'>Reviews</h1>
                <h3 className='text-color mb-5 mt-0'>By My Former Students</h3>
                <div className='row row-cols-1 row-cols-lg-3 g-4'>
                    {
                        reviews.map(review => <Review
                                key = {review.id} 
                                review = {review}
                            ></Review>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Reviews;