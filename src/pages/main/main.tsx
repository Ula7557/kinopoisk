import Slider from "react-slick";
import FilmsCard from '../../components/filmsCard/filmsCard'
import { TodayFilms } from '../../components/todayFilm/todayFilms'
import './main.scss'
import filmsI from '../../assets/iii.webp'
import Cards from '../../components/filmsCard/cards'
import img from '../../assets/films.webp'
import Follow from '../../container/follow/follow'
import WatchCards from '../../components/filmsCard/watchCards'
import FilmsTv from '../../components/filmsTv/filmsTv'
import Popular from '../../components/popular/popular'
import OscarCard from '../../components/popular/oscar'
import NewVideo from '../../components/popular/newVideo'
import CalendarCard from '../../components/calendar/calendar'
import TrailerCard from '../../components/trailer/trailer'
import useGet from '../../hooks/useGet'
import { get } from 'lodash'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoaderFunc from "../../components/loader/loader";
export const Main = () => {


    const { data, loading } = useGet({ url: `3/discover/movie` })
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
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className="main">
            <TodayFilms />
            <h4 className="all-oscar"> 
                Все, что надо знать про «Оскар»
            </h4>
            <div className="oscar-card container">
               {
                items ? 
                <Slider {...settings}>
                {
                    items && items.map((item: any, index: any) => (
                        <FilmsCard
                            poster_path={item.poster_path}
                            key={index}
                            id={item.id}
                            item={item}/>
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
            <h4>Билеты в кино</h4>
            <div className="new-films container">
                <Cards
                />
            </div>
            <div className="black-background">
                <Follow />
                <h4>
                    Смотрят сейчас
                </h4>
                <div className="watch-now container">
                    <WatchCards
                    />
                </div>
                {/* <h4 className='kino-tv-and'>
                    Смотрите Кинопоиск на телевизоре
                </h4>
                <FilmsTv /> */}
            </div>
            <div className="popular-block container">
                <Popular />
                <OscarCard />
                <NewVideo />
            </div>

            <div className="calendar container">
                <h4>
                    Календарь релизов
                </h4>
                <div className="calendar-card-box">
                    <CalendarCard />
                </div>
            </div>

            <div className="trailer">
                <h4>
                    Новые трейлеры
                </h4>
                <div className="trailer-inner">
                    <TrailerCard />
                </div>
            </div>

        </div>
    )
}