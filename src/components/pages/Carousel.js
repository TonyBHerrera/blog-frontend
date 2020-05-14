import React from "react"
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css'


import image1 from '../../../static/assets/images/smiley.jpg'
import image2 from '../../../static/assets/images/skull-and-crossbones.jpg'
import image3 from '../../../static/assets/images/logo-min.png'

export default function CarouselThing() {


    return (
        <div className="carousel-wrapper">
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                <div style={{
                    width: "100%",
                    height: "200px",
                    color: "#fff"

                }}>
                    <h2>Sneaker of the Week</h2>
                    <img src={image1} />
                </div>
                <div style={{ width: "100%", height: "200px", color: "#fff" }}>
                    <h2>Video of the Week</h2>
                    <img src={image2} />
                </div>
                <div style={{ width: "100%", height: "200px", color: "#fff" }}>
                    <h2>Other Stuff</h2>
                    <img src={image3} />
                </div>
            </Carousel>
        </div>
    );
}