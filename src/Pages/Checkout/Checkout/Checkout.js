import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
    let params = useParams();
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        navigate('/thanks')
    }

    return (
        <div className='my-3'>
            <div className='fs-2 fw-bold'>
                <p>Enroll In Our</p>
                <p><span className='text-color'>{params?.serviceId}</span> Master Course</p>
            </div>
            <div className='container w-50 mx-auto my-5 p-5 rounded login-form check-form'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control placeholder="Your name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <button className='btn btn-outline-light rounded' type="submit">Checkout</button>
                </Form>
            </div>
        </div>
    );
};

export default Checkout;