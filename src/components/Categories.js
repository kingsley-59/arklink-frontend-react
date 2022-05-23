import React from 'react'
import Slider from "react-slick";
import tileRoom from '../assets/images/tile-room.png';

const Category = ({name}) => {
    let styles = {
        aspectRatio: "auto 4 / 3"
    }
    return (
        <div className='bg-primary category-wrapper d-flex align-items-center justify-content-center p-3 mx-3' style={styles}>
            <span className="text-white"> {name} </span>
        </div>
    );
}

const Categories = () => {
    const categoryList = ['Tiles', 'Toilets', 'Marbles', 'Doors', 'Bath tubs'];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <div className='site-section bg-brown p-5'>
            <div className="container section-title text-center mb-3">categories</div>
            <div className="slider-wrapper">
                <Slider {...settings} className=''>
                    <div>
                        <Category name='Tiles' />
                    </div>
                    <div>
                        <Category name='Toilets' />
                    </div>
                    <div>
                        <Category name='Marbles' />
                    </div>
                    <div>
                        <Category name='Doors' />
                    </div>
                    <div>
                        <Category name='Bath tubs' />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Categories