import { get } from 'lodash'
import useGet from '../../hooks/useGet'
import './cards.scss'
import Slider from 'react-slick'
const Cards = () => {

    const { data, loading } = useGet({ url: `3/discover/tv` })
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
        <Slider {...settings}>
            {
                items && items.map((item: any, index: any) => (
                    <div key={index} className="tv-list">
                        <div  className="cards">
                            <div className="cards-img">
                                <span>7.0</span>

                                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" />
                            </div>
                            <div className="cards-inf">
                                <span>Билеты</span>
                                <p className="cards-inf-name">{item.original_name.slice(0,30)}</p>
                                <p className="cards-inf-years">2024, мелодрама</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    )
}
export default Cards