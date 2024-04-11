import Slider from "react-slick";
import FilmsCard from '../../components/filmsCard/filmsCard'
import { TodayFilms } from '../../components/todayFilm/todayFilms'
import './main.scss'
import Cards from '../../components/filmsCard/cards'
import Follow from '../../container/follow/follow'
import WatchCards from '../../components/filmsCard/watchCards'
import Popular from '../../components/popular/popular'
import OscarCard from '../../components/popular/oscar'
import NewVideo from '../../components/popular/newVideo'
import CalendarCard from '../../components/calendar/calendar'
import TrailerCard from '../../components/trailer/trailer'
import useGet from '../../hooks/useGet'
import { get } from 'lodash'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Main = () => {


    const { data, loading } = useGet({ url: `3/discover/tv` })
    const items: any | undefined = get(data, "data.results")

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
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
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className='main'>
            <TodayFilms />
            <h4 className="all-oscar  h4-title">
                Все, что надо знать про «Оскар»
            </h4>
            <div className="oscar-card ">
                {
                    items ?
                        <Slider {...settings}>
                            {
                                items && items.map((item: any, index: any) => (
                                    <FilmsCard
                                        poster_path={item.poster_path}
                                        key={index}
                                        id={item.id}
                                        item={item} />
                                ))
                            }
                        </Slider>
                        :
                        <div className="no-card-block">
                            <div className="no-card"></div>
                            <div className="no-card"></div>
                            <div className="no-card"></div>
                            <div className="no-card"></div>
                        </div>
                }
            </div>
            <h4 className=" h4-title">Билеты в кино</h4>
            <div className="new-films ">
                <Cards
                />
            </div>
            <div className="black-background">
                <Follow />
                <h4 className=" h4-title">
                    Смотрят сейчас
                </h4>
                <div className="watch-now ">
                    <WatchCards
                    />
                </div>
            </div>
            <div className="popular-block ">
                <Popular />
                <OscarCard />
                <NewVideo />
            </div>

            <div className="calendar ">
                <h4 className=" h4-title">
                    Календарь релизов
                </h4>
                <div className="calendar-card-box">
                    <CalendarCard />
                </div>
            </div>

            <div className="trailer ">
                <h4 className=" h4-title">
                    Новые трейлеры
                </h4>
                <div className="trailer-inner ">
                    <TrailerCard />
                </div>
            </div>

        </div>
    )
}