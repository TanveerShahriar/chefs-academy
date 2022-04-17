import React from 'react';
import './Q3.css'

const Q3 = () => {
    return (
        <div className='ans p-3 mt-5 m-lg-5 rounded text-white'>
            <h3>What other services does firebase provide other than authentication</h3>
            <p className='text-start'>
                There are many services which Firebase provides, such as --
                <ul>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </ul>
            </p>
        </div>
    );
};

export default Q3;