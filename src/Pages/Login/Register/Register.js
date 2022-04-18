import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

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
        // <div className='register-form'>
        //     <h2 style={{textAlign: 'center'}}>Please Register</h2>
        //     <form onSubmit={handleRegister}>
                
        //         <input type="email" name="email" id="" placeholder='Email Address' required/>
                
        //         <input type="password" name="password" id="" placeholder='Password' required/>
        //         <input type="submit" value="Register" />
        //     </form>
        //     <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        // </div>
        <div className='container w-50 mx-auto my-5 rounded login-form'>
        <h2 className='text-white text-center mt-2'>Please Register</h2>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="outline-light" type="submit">
                Submit
            </Button>
        </Form>
        <p className='fs-4 fw-bold my-3'>Already have an account? <Link to="/login" className='text-white pe-auto text-decoration-none'>Please Login</Link> </p>
    </div>
    );
};

export default Register;