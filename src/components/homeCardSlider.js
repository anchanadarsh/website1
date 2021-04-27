import React from 'react';
import Slider from "react-slick";

const CardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div className="card_item">
                <div className="card_item_inner">
                    <div className="card_img">
                        <img src="https://via.placeholder.com/400x300.jpg" alt="" />
                    </div>
                    <h2 className="card_title">Lorem</h2>
                    <p className="card_desc">Text is optional. The default is the image dimensions in pixels.</p>
                </div>
            </div>
            <div className="card_item">
                <div className="card_item_inner">
                    <div className="card_img">
                        <img src="https://via.placeholder.com/400x300.jpg" alt="" />
                    </div>
                    <h2 className="card_title">Lorem</h2>
                    <p className="card_desc">Text is optional. The default is the image dimensions in pixels.</p>
                </div>
            </div>
            <div className="card_item">
                <div className="card_item_inner">
                    <div className="card_img">
                        <img src="https://via.placeholder.com/400x300.jpg" alt="" />
                    </div>
                    <h2 className="card_title">Lorem</h2>
                    <p className="card_desc">Text is optional. The default is the image dimensions in pixels.</p>
                </div>
            </div>
            <div className="card_item">
                <div className="card_item_inner">
                    <div className="card_img">
                        <img src="https://via.placeholder.com/400x300.jpg" alt="" />
                    </div>
                    <h2 className="card_title">Lorem</h2>
                    <p className="card_desc">Text is optional. The default is the image dimensions in pixels.</p>
                </div>
            </div>
            <div className="card_item">
                <div className="card_item_inner">
                    <div className="card_img">
                        <img src="https://via.placeholder.com/400x300.jpg" alt="" />
                    </div>
                    <h2 className="card_title">Lorem</h2>
                    <p className="card_desc">Text is optional. The default is the image dimensions in pixels.</p>
                </div>
            </div>
            <div className="card_item">
                <div className="card_item_inner">
                    <div className="card_img">
                        <img src="https://via.placeholder.com/400x300.jpg" alt="" />
                    </div>
                    <h2 className="card_title">Lorem</h2>
                    <p className="card_desc">Text is optional. The default is the image dimensions in pixels.</p>
                </div>
            </div>
        </Slider>
    );
}

export default CardSlider;