import './footer.scss'
import footerImg from '../../assets/footer.png'
import so1 from '../../assets/icon/so1.svg'
import so2 from '../../assets/icon/so2.svg'
import so3 from '../../assets/icon/so3.svg'
import so4 from '../../assets/icon/so4.svg'

import do1 from '../../assets/icon/do1.svg'
import do2 from '../../assets/icon/do2.svg'
import do3 from '../../assets/icon/do3.svg'
import do4 from '../../assets/icon/do4.svg'
const Footer = () => {

    const arr = [
        {
            name:"Вакансии"
        },
        {
            name:"Реклама"
        },
        {
            name:"Соглашение"
        },
        {
            name:"Правила рекомендаций"
        },
        {
            name:"Блог"
        },
        {
            name:"Кинопоиск PRO"
        },
        {
            name:"Предложения"
        },
        {
            name:"Все фильмы"
        },
        {
            name:"Все сериалы"
        },
        {
            name:"Что посмотреть"
        },
        {
            name:"Служба поддержки"
        },
    ]
    return (
        <div className="footer">
            <div className="footer-dark container">
            <div className="footer-top">
                <div className="footer-top-inner">
                    <h2>
                    Смотрите сериалы в Плюсе с Амедиатекой
                    </h2>
                    <div className="footer-top-btn">
                        <button className='footer-btn'>
                        Оформить подписку
                        </button>
                    </div>
                </div>
                <div className="footer-top-inner">
                    <img src={footerImg} alt="img" />
                </div>
            </div>
            <div className="footer-middle">
                <div className="social">
                  <a href="#"><img src={so1} alt="" /></a>
                  <a href="#"><img src={so2} alt="" /></a>
                  <a href="#"><img src={so3} alt="" /></a>
                  <a href="#"><img src={so4} alt="" /></a>
                </div>
                <div className="partnor">
                    <ul className='partnor-ul'>
                        {
                            arr.map((item,index) => (
                                <li key={index}>{item.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="download">
                    <a href="">
                        <img src={do1} alt="img" />
                    </a>
                    <a href="">
                        <img src={do2} alt="img" />
                    </a>
                    <a href="">
                        <img src={do3} alt="img" />
                    </a>
                    <a href="">
                        <img src={do4} alt="img" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-inner">
                    <p>© 2003 — 2024,</p>
                    <a href="#">Кинопоиск</a>
                    <span>18+</span>
                </div>
                <div className="footer-bottom-inner">
                    <a href="Телепрограмма"></a>
                    <a href="Музыка"></a>
                    <a href="Афиша"></a>
                    <a href="Букмейт"></a>
                </div>
                <div className="footer-bottom-inner">
                    <p>Проект компании</p>
                    <a href="#">Яндекс</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer