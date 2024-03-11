import './follow.scss'
import yan from '../../assets/yandex.jpeg'
const Follow = () => {
    return (
        <div className="follow">
            <div className="follow-inner">
                <div className="follow-inner-top">
                    <img src={yan} alt="" />
                    <div className="follow-block">
                        <a href="">Яндекс.Плюс</a>
                        <div className='follow-info'>
                            <div>Фильмы и сериалы по подписке </div>
                            <div>60 дней бесплатно</div>
                        </div>
                        <div className='follow-protsent'>
                            <p>60 дней бесплатно</p>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                            <p>Напишем на почту за 3 дня</p>
                        </div>
                        <div className="btn">
                            <button className='follow-btn'>Попробовать 60 дней бесплатно</button>
                        </div>
                        <p className='follow-sum'>
                            далее 9999 сумов в месяц
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Follow