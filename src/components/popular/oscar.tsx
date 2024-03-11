import img from '../../assets/oscar123.webp'
import './oscar.scss'
import comment from '../../assets/icon/comment.svg'
import useGet from '../../hooks/useGet'
import { get } from 'lodash'

const OscarCard = () => {

    const { data, loading } = useGet({ url: `3/discover/movie` })
    const items: any | undefined = get(data, "data.results")

    const arr = [
        {
            desc: "«Дюна: Часть вторая». Дени Вильнёв и свалка антиквариата",
            commonet: "21",
            icon: comment
        },
        {
            desc: "«Онегин» Сарика Андреасяна: стерильная экранизация для владельцев «Пушкинских карт»",
            commonet: "26",
            icon: comment
        },
        {
            desc: "10 ключей к пониманию фильма «Бедные-несчастные», где Эмма Стоун сводит окружающих с ума ",
            commonet: "31",
            icon: comment
        },
        {
            desc: "Главные неудачники «Оскара-2024»: 12 отличных фильмов, которые не получили ни одной номинации ",
            commonet: "13",
            icon: comment
        },
    ]
    return (
        <div className='today-popular'>
            <div className="oscar-card-blocks">
                <h6>
                    Главное сегодня
                </h6>
                <div className="oscar-card-top">
                    <div className="oscar-card-top-img">
                <img className='oscar-icons' src={`https://image.tmdb.org/t/p/w500/${items && items[19].poster_path}`} alt="img" />
                    </div>
                    <div className="oscar-card-inner">
                        <div className='os-title'>
                            <span className="span-title">
                               {items && items[19].overview.slice(0,120)} <img src={comment} alt="img" /> <span className='spane'>18</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {
               items && items.slice(8,12).map((item:any, index:any) => (
                    <div key={index} className="oscar-mini-card">
                        <div className="mini-card">
                        <img className='oscar-icons' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" />
                            <div className="mini-card-inner">
                                <div className='os-title'>
                                    <span className="span-title">
                                        {item.overview.slice(0,100)} <img src={comment} alt="img" /> <span className='spane'>18</span>
                                    </span>
                                </div>
                                <span className='oscar-info'>
                                Всё про «Оскар»
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default OscarCard