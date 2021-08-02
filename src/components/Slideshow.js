import React from 'react';
import { Slide } from 'react-slideshow-image';
import { NavLink } from 'react-router-dom';

import img1 from '../img/hd/the_shining_4k_28.png'
import img2 from '../img/hd/the_shining_4k_69.png'
import img3 from '../img/hd/the_shining_4k_52.png'





  const Slideshow = () => {
    const properties = {
        pauseOnHover: false,
        arrows: false,
        scale: 1,
      };


    return (
      <div>
        <Slide easing="ease" {...properties}>
          <div className="each-slide">
            <div className="fp-slide" style={{backgroundImage: `url(${img1})`, 'background-position': 'center', objectFit: "cover", width: "100%"}}>
              <div className="slide-desc">
                <h1 className="slide-head" >Your private resort</h1>
                <p>Enjoy the fresh snow on the slopes, and our legendary service at this exclusive getaway deep in the Rocky Mountains. </p>
                <NavLink className="slide-nav" to="/Experiences">Discover</NavLink>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div className="fp-slide" style={{backgroundImage: `url(${img2})`, 'background-position': 'center', objectFit: "cover", width: "100%"}}>
            <div className="slide-desc">
                <h1 className="slide-head">the gold room</h1>
                <p>Spend an evening enjoying a signature cocktail or our classic Red Rum at The Gold Room lounge. </p>
                <NavLink className="slide-nav" to="/Dining">Discover</NavLink>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div className="fp-slide" style={{backgroundImage: `url(${img3})`, 'background-position': 'center', objectFit: "cover", width: "100%"}}>
            <div className="slide-desc">
                <h1 className="slide-head">Deluxe Rooms</h1>
                <p>Enjoy the classic decor of the 1970s and gorgeous mountain view in our high class rooms. </p>
                <NavLink className="slide-nav" to="/Rooms">Discover</NavLink>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
