import { get } from 'lodash'
import useGet from '../../hooks/useGet'
import './cards.scss'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
const Cards = () => {

    const { data, loading } = useGet({ url: `3/discover/movie` })
    const items: any | undefined = get(data, "data.results")

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoPlay: true,
        responsive: [
            {
                breakpoint: 1153,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {
                items && items.map((item: any, index: any) => (
                    <Link to={`/movies/${item.id}`} key={index} className="tv-list">
                        <div  className="cards cards-n">
                            <div className="cards-img">
                                     <span className={item.vote_average > 7 ? '' : 'five'} >{item.vote_average.toFixed(1)}</span>

                                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" />
                            </div>
                            <div className="cards-inf">
                                <span>Билеты</span>
                                <p className="cards-inf-name">{item.original_title}</p>
                                <p className="cards-inf-years">2024, мелодрама</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </Slider>
    )
}
export default Cards