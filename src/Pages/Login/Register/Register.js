import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const navigate = useNavigate();

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        navigate('/home');
    }

    const handleRegister = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='container w-50 mx-auto my-5 rounded login-form'>
        <h2 className='text-white text-center mt-2'>Please Register</h2>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            {/* <Button variant="outline-light" type="submit">
                Submit
            </Button> */}
            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
            <Form.Label className={`ps-2 ${agree ? '' : 'text-white'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</Form.Label>
            <br />
            <input
                disabled={!agree}
                className='btn btn-outline-light mt-2'
                type="submit"
                value="Register" />
        </Form>
        <p className='fs-4 fw-bold my-3'>Already have an account? <Link to="/login" className='text-white pe-auto text-decoration-none'>Please Login</Link> </p>
        <SocialLogin></SocialLogin>
    </div>
    );
};

export default Register;