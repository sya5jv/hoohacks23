import React from 'react';

const Home = () => {
    let title = "Home page";
    let temp_name = "Sam";
    let welcome_message = "Welcome back, ";


    return (
        <div>
            <h1>{title}</h1>
            <p>This is the homepage.</p>

            <h2>{welcome_message}{temp_name}</h2>
        </div>
    );
};

export default Home;