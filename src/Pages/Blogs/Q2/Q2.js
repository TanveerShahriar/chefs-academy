import React from "react";
import { Container } from "react-bootstrap";
import "./Q2.css";

const Q2 = () => {
  return (
    <Container className="ans p-3 mt-5 m-lg-5 rounded text-white">
      <h3>
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h3>
      <p className="text-start">
        Sometime we want users to create accounts on our website for providing
        our services. After creating those accounts when they need to log in, we
        must do authentication. If we do it on our own it will take a lot of
        time and it will also have lot of security issues. That's why for
        authentication we use third party providers. Firebase is one of the
        third party authentication provider created by google. There are some
        alternative for firebase that we can use. As example --
      </p>
      <ul className="text-start">
        <li>Okta</li>
        <li>OneLogin</li>
        <li>Auth0</li>
        <li>JumpCloud</li>
        <li>Microsoft Azure Active Directory</li>
        <li>ForgeRock</li>
      </ul>
    </Container>
  );
};

export default Q2;
