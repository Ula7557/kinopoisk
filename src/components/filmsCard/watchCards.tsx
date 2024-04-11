import { get } from 'lodash'
import useGet from '../../hooks/useGet'
import './watchCards.scss'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const WatchCards = () => {

   


    const { data, loading } = useGet({ url: `3/discover/movie`})
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
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 410,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
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
                            <Link to={`/movies/${item.id}`} key={index} className="watch-cards">
                                <div className="cards-img">
                                <span className={item.vote_average > 7 ? '' : 'five'} >{item.vote_average.toFixed(1)}</span>
                                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" />
                                </div>
                            </Link>
                        ))
                    }
                </Slider>
            </div>
    )
}
export default WatchCards