import { get } from 'lodash'
import useGet from '../../hooks/useGet'
import './watchCards.scss'
import Slider from 'react-slick'
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from 'react';

const WatchCards = () => {

   


    const { data, loading } = useGet({ url: `3/tv/airing_today`})
    const items: any | undefined = get(data, "data.results")



    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoPlay: true,
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
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };




    return (
            items &&
            <div className="airing-today" >
                <Slider {...settings}>
                    {
                        items && items.map((item: any, index: any) => (
                            <div key={index} className="watch-cards">
                                <div className="cards-img">
                                    <span>7.0</span>
                                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" />
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
    )
}
export default WatchCards