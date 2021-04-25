import React from 'react';

const Banner = (props) => {
    return ( 
        <div>
            <div className="banner_area" style={{ backgroundImage:`url(${props.imgSrc})` }}>
                <div className="banner_title">{props.bannerTitle}</div>
            </div>
        </div>
     );
}
 
export default Banner;