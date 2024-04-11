import { Link } from "react-router-dom"
import './sidebar.scss'
import img1 from '../../assets/icon/img1.svg'
import img2 from '../../assets/icon/img2.svg'
import img3 from '../../assets/icon/img3.svg'
import img4 from '../../assets/icon/img4.svg'
import img5 from '../../assets/icon/img5.svg'
import img6 from '../../assets/icon/img6.svg'
import img7 from '../../assets/icon/img7.svg'
import { useEffect, useState } from "react"

export const Sidebar = () => {

    
    
    const menu = [
        {
            name: "Главная",
            ic: img1,
            path:"/"
        },
        {
            name: "Онлайн-кинотеатр",
            ic: img2,
            path:"/null"
        },
        {
            name: "Фильмы",
            ic: img3,
            path:"/null"
        },
        {
            name: "Сериалы",
            ic: img4,
            path:"/null"
        },
        {
            name: "Спорт",
            ic: img5,
            path:"/null"
        },
        {
            name: "Билеты в кино",
            ic: img6,
            path:"/null"
        },
        {
            name: "Медиа",
            ic: img7,
            path:"/null"
        },
    ]
    return (
        <div className="sidebar">
                <div className="sidebar-inner_wrapper">
                    <div className="sidebar-inner-block">
                        <nav>
                            <ul>
                                {
                                    menu.map((item, key) => (
                                        <li key={key}>
                                            <img src={item.ic} alt={item.name} />
                                            <Link to={item.path}>{item.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                </div>
            </div>
        </div>
    )
}