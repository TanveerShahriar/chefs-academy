import React from 'react';
import './Q1.css'

const Q1 = () => {
    return (
        <div className='ans p-3 mt-5 m-lg-5 rounded text-white'>
            <h3>Difference between authorization and authentication</h3>
            <p className='text-start'>
                When somebody wants to login in a website, they must have an account on that website and then they should give their log in credential. If they give the proper credential they can log in. This is called authentication means authenticating a user. But sometime there must be certain people who will have more priority or power to change something on the website. Mainly they are the owner or developer of the website. And giving them the power to do certain task is called authorization.
            </p>
        </div>
    );
};

export default Q1;