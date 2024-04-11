import './calendar.scss'
import saveIcon from '../../assets/icon/save.svg'
import useGet from '../../hooks/useGet'
import { get } from 'lodash'

const CalendarCard = () => {


    const { data, loading } = useGet({ url: `3/movie/upcoming` })
    const items: any | undefined = get(data, "data.results")

    return (
        <div className="calendar-Card">
            <h6>
                Скоро в кино
            </h6>
            <div className="calendar-inner">
                {
                    items && items.slice(10,20).map((item:any, index:any) => (
                        <div key={index} className="calendar-inner-card">
                            <div className="block block1">
                                <img className='newFilms' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" />
                                <span className='filmsName'>{item.title}</span>
                            </div>
                            <div className="block block2">
                                <span>{item.release_date}</span>
                            </div>
                            <div className="block">
                                <img src={saveIcon} alt="save" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CalendarCard