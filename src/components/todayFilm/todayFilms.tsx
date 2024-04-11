import './index.scss'
import { get } from "lodash"
import useGet from "../../hooks/useGet"
import saves from '../../assets/icon/save.svg'
import Slider from 'react-slick'

export const TodayFilms = () => {

    const { data, loading } = useGet({ url: "3/discover/movie" })
    const items: any | undefined = get(data, "data.results")

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };


    return (
      <div className="today-films-cards container">
      {
            items ?
            <Slider {...settings}>
              {items && items.map((item:any,index:any) => (
                <div key={index} className='today-block container'>
                 <div className="today">
                 <div className="shadow"></div>
                 <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" />
                 <div className="today-films">
                     <h4 className="films-name">{item.title}</h4>
                     <p className="today-desc">{item.overview}</p>
                     <p className="today-aktors">В главных ролях:Виктор Добронравов, Елизавета Моряк, Владимир Вдовиченков</p>
                     <span className='kino'>Уже в кино</span>
                     <div className="save-filems">
                         <button>
                         Купить билет
                         </button>
                         <div className="save-icon-block">
                         <img className='save-icon' src={saves} alt="img" />
                         </div>
                     </div>
                 </div>
             </div>
              </div>
              ))}
            </Slider>
            : <div className='today-no-info container'>
                <div className="today-no-info-inner"></div>
            </div>
      }
      </div>
    )
}