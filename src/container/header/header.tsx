import { Link } from 'react-router-dom'
import logo from './../../assets/icon/logo.svg'
import { Divider, IconButton, InputBase, Menu, MenuItem, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import './header.scss'
import './mobil-header.scss'
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import img1 from '../../assets/icon/img1.svg'
import img2 from '../../assets/icon/img2.svg'
import img3 from '../../assets/icon/img3.svg'
import img4 from '../../assets/icon/img4.svg'
import img5 from '../../assets/icon/img5.svg'
import img6 from '../../assets/icon/img6.svg'
import img7 from '../../assets/icon/img7.svg'
import axios from 'axios';
import { discour, searchInput } from '../../components/search';
export const Header = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [modal, setModal] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);

    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const [showItems, setShowItems] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)


    const fetchMovies = async () => {
        try {
            const endPoints = searchInput
            const response = await axios.get(
                endPoints,
                {
                    params: {
                        query: searchQuery,
                        page: currentPage,
                    },
                }
            )
            const { result, total_page } = response.data;
            const result1 = response.data.results

            setShowItems(result1.slice(0, 20))
            setTotalPages(total_page)
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        fetchMovies()
    }, [searchQuery])

    useEffect(() => {
        if(showItems.length !== 0) {
            setModal(true)
        } else {
            setModal(false)
        }
    },[modal,showItems])

    const menu = [
        {
            name: "Главная",
            ic: img1,
            path: "/"
        },
        {
            name: "Онлайн-кинотеатр",
            ic: img2,
            path: "/Онлайн-кинотеатр"
        },
        {
            name: "Фильмы",
            ic: img3,
            path: "/Фильмы"
        },
        {
            name: "Сериалы",
            ic: img4,
            path: "/Сериалы"
        },
        {
            name: "Спорт",
            ic: img5,
            path: "/Спорт"
        },
        {
            name: "Билеты в кино",
            ic: img6,
            path: "/Билеты"
        },
        {
            name: "Медиа",
            ic: img7,
            path: "/Медиа"
        },
    ]




    return (
        <div className="header-res">
            <div className="head">
                <div className="header">
                    <div className="header-inner container">
                        <div className="hedaer-inner_block">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="hedaer-inner_block">
                            <Link to="/play" >Онлайн-кинотеатр</Link>
                            <Link to="/play" >Оскар-2024</Link>
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                            >
                                <IconButton sx={{ p: '10px' }} aria-label="menu">
                                </IconButton>
                                <InputBase
                                    value={searchQuery}
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search Google Maps"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value)
                                        console.log(e.target.value);

                                    }}
                                />
                                {
                                    modal ?
                                        <div className='films-list'>
                                            <ul>
                                                {showItems && showItems.slice(0,10).map((item: any, index) => (
                                                    <Link to={`movies/${item.id}`} key={index} className='show-link'>
                                                        <div>
                                                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                                                        <p onClick={(e) => setShowItems([])} >{item.title}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </ul>
                                        </div>
                                        : null
                                }
                                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                                    {/* <DirectionsIcon /> */}
                                </IconButton>
                            </Paper>
                        </div>
                        <div className="hedaer-inner_block">
                            <button>Смотреть кино бесплатно</button>
                            <Link to="/auth">Войти</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-header">
                <div className="mobile-header-inner">
                    <div className="mob-header-top">
                        <div className="mob-header-top-inner">
                            <button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MenuIcon />
                            </button>
                            <img src={logo} alt="logo" />
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                {
                                    menu.map((item, index) => (
                                        <MenuItem key={index} onClick={handleClose}><Link className='mobile-link' to={item.path}> <img src={item.ic} alt={item.name} /> {item.name}</Link></MenuItem>
                                    ))
                                }
                            </Menu>
                        </div>
                        <div className="mob-header-top-inner">
                            <button>
                                <SearchIcon />
                            </button>
                            <a href="#">
                                Войти
                            </a>
                        </div>
                    </div>
                    <div className="mob-header-bottom"></div>
                </div>
            </div>
        </div>
    )
}