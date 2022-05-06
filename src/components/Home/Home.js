import React from 'react';
import './Home.css';
import FormContainer from '../Forms/Forms';

function Home() {
    return (
        <div class="homeContainer">
            <section class="cardContainer">
                <p class="businessName">Homelux</p>
                <h1 class="businessPhrase">DESIGN YOUR HOME</h1>
                <p class="businessDesc">Life is too short for boring furnitures. Choose furnitures that define you.</p>
                <a href="#" class="cardBtn">Discover Furnitures</a>
            </section>
            <FormContainer/>
        </div>
    );
}

export default Home;