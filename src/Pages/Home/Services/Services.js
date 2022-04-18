import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <Container className='my-5'>
                <h1 className='service-header'>My Courses</h1>
                <div className='row row-cols-1 row-cols-lg-2 g-4'>
                    {
                        services.map(service => <Service
                                key = {service.id} 
                                review = {service}
                            ></Service>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;