import React from 'react';
import './Q1.css'

const Q1 = () => {
    return (
        <div className='ans p-3 mt-5 m-lg-5 rounded text-white'>
            <h3>Difference between authorization and authentication</h3>
            <p className='text-start'>Context API is a react framework. It is used to deal with prop drilling. Prop drilling means when there is a tree of components to send something via prop to the lowest component we have to pass props to every component. To solve that we use context API. By using this we can send props to any component within its scope.
            </p>
        </div>
    );
};

export default Q1;