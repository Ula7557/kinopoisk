import './index.scss'
import comment from '../../assets/icon/comment.svg'
import imggg from '../../assets/films.webp'

const Popular = () => {

    const arr = [
        {
            desc:"«Дюна: Часть вторая». Дени Вильнёв и свалка антиквариата",
            commonet:"21",
            icon:comment
        },
        {
            desc:"«Онегин» Сарика Андреасяна: стерильная экранизация для владельцев «Пушкинских карт»",
            commonet:"26",
            icon:comment
        },
        {
            desc:"10 ключей к пониманию фильма «Бедные-несчастные», где Эмма Стоун сводит окружающих с ума ",
            commonet:"31",
            icon:comment
        },
        {
            desc:"Главные неудачники «Оскара-2024»: 12 отличных фильмов, которые не получили ни одной номинации ",
            commonet:"13",
            icon:comment
        },
        {
            desc:"Эмма Стоун на самом деле не рыжая и вовсе не Эмма! Что еще скрывает четырехкратная номинантка на «Оскар» ",
            commonet:"6",
            icon:comment
        },
        {
            desc:"Ультимативный гид по «Дюне»: в каком порядке читать и что вспомнить перед просмотром ",
            commonet:"44",
            icon:comment
        },
        {
            desc:"Все фильмы Зака Снайдера — от худшего к лучшему",
            commonet:"37",
            icon:comment
        },
    ]
    return (
        <div className="popular">
            <h6>Популярное</h6>
            <ul>
                <img className='popular-img' src={imggg} alt="img" />
               {
                arr.map((item,index) => (
                    <li key={index} className='styles_listItem__dWdTN'>
                    <article className='styles_root__UqPmO'>
                        <span className='styles_titleWrapper__pjDVp'>
                            <p className='styles_titleLinkRegular__J6_lr styles_titleLink__nPo_z desc'>{item.desc} 
                            <img className='icon' src={item.icon} alt="svg" />
                            <span className='comment'>{item.commonet}</span>
                            </p>
                        </span>
                    </article>
                </li>
                ))
               }
            </ul>
        </div>
    )
}
export default Popular