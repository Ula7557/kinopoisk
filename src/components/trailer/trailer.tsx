import './trailer.scss'
import useGet from '../../hooks/useGet'
import { get } from 'lodash'
import Slider from 'react-slick'

const TrailerCard = () => {

    const { data, loading } = useGet({ url: `3/movie/top_rated` })
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
        <div className='trailer-box'>
            <Slider {...settings}>
            {
                items && items.map((item:any,index:any) => (
                    <div key={index} className="card-trailer">
                        <img className='card-trailer-img' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" />
                        <p className="trailer-name">{item.title}</p>
                        <span className='trailer-info'>{item.release_date}, комедия</span>
                    </div>
                ))
            }
            </Slider>
        </div>
    )
}

export default TrailerCard