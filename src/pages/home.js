import React from 'react';
import Banner from '../components/banner';
import CardSlider from '../components/homeCardSlider';

const Home = () => {
    return (
        <div id="home_page">
            <Banner imgSrc="images/1.jpg" bannerTitle="Home" />
            <div className="card_wrap">
                <div className="container">
                    <CardSlider />
                </div>
            </div>

        </div>
    );
}

export default Home;