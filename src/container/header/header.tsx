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
import CloseIcon from '@mui/icons-material/Close';
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

    const [mo, setMo] = useState(false)

    const focusUsernameInputField = (input: { focus: () => void; }) => {
        if (input) {
            setTimeout(() => { input.focus() }, 100);
        }
    };

    const [showItems, setShowItems] = useState<any>([])
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [searchModal, setSearchModal] = useState(false)




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
            setShowItems(result1)
            setTotalPages(total_page)
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        if (searchQuery.length >= 3) {
            fetchMovies()
        }
    }, [searchQuery])




    const menu = [
        {
            name: "Главная",
            ic: img1,
            path: "/"
        },
        {
            name: "Онлайн-кинотеатр",
            ic: img2,
            path: "/nulls"
        },
        {
            name: "Фильмы",
            ic: img3,
            path: "/nulls"
        },
        {
            name: "Сериалы",
            ic: img4,
            path: "/nulls"
        },
        {
            name: "Спорт",
            ic: img5,
            path: "/nulls"
        },
        {
            name: "Билеты в кино",
            ic: img6,
            path: "/nulls"
        },
        {
            name: "Медиа",
            ic: img7,
            path: "/nulls"
        },
    ]


    useEffect(() => {
        if (showItems.length !== 0) {
            setModal(true)
            if (searchQuery.length === 0) {
                setShowItems([])
            }
        } else {
            setModal(false)
        }
    }, [modal, showItems, searchQuery, setShowItems])



    function searchClick() {
        setShowItems([])
        setSearchQuery('')
        setSearchModal(false)
        localStorage.setItem('name', searchQuery);
    }

    function allSearch() {
        setShowItems([])
        setSearchQuery('')
        localStorage.setItem('name', searchQuery);
        setSearchModal(false)
    }


    function closeModale() {
        setSearchModal(false)
        setShowItems([])
    }

    return (
        <div className="header-res">
            <div className="head">
                <div className="header">
                    <div className="header-inner container">
                        <div className="hedaer-inner_block">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="hedaer-inner_block">
                            <Link className='header-li' to="/play" >Онлайн-кинотеатр</Link>
                            <Link className='header-li' to="/play" >Оскар-2024</Link>
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                            >
                                <IconButton sx={{ p: '10px' }} aria-label="menu">
                                </IconButton>
                                <InputBase
                                    value={searchQuery}
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Фильмы, сериалы, персоны"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value)

                                    }}
                                />
                                {
                                    modal ?
                                        <div className='films-list'>
                                            <ul>
                                                {showItems && showItems.map((item: any, index: any) => (
                                                    <Link to={`movies/${item.id}`} key={index} className='show-link' onClick={() => searchClick()}>
                                                        <div className='films-ul'>
                                                            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                                                            <div className='search-films-info'>
                                                                <p className='search-name' onClick={(e) => setShowItems([])} >{item.title}</p>
                                                                <div className='search-spane'>
                                                                    <span className={item.vote_average > 7 ? 'search-boxo' : 'search-boxo five'} >{item.vote_average.toFixed(1)}</span>
                                                                    <p className='search-desc'>{item.overview}</p>
                                                                </div>
                                                                <p className='search-date'>{item.release_date}</p>
                                                            </div>

                                                        </div>
                                                    </Link>
                                                ))}
                                            </ul>
                                            <Link to="/searchInfo" onClick={() => allSearch()} className='all-films'>Показать все</Link>
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
                <div className="mobile-h">
                    <div className="mobile-h-inner">
                        <div onClick={() => closeModale()}  className={`search-shadov ${searchModal ? 'opened' : ''}`}></div>
                        <div className={`mobile-header-search-box ${searchModal ? 'opened' : ''}`}>
                            <SearchIcon />
                            <InputBase

                                ref={focusUsernameInputField}
                                placeholder='Фильмы, сериалы, персоны'
                                value={searchQuery}
                                sx={{ ml: 1, flex: 1 }}
                                inputProps={{ 'aria-label': 'search google maps' }}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value)

                                }}
                            />
                            {
                                modal ?
                                    <div className='films-list mobile-list'>
                                        <ul>
                                            {showItems && showItems.map((item: any, index: any) => (
                                                <Link to={`movies/${item.id}`} key={index} className='show-link' onClick={() => searchClick()}>
                                                    <div className='films-ul'>
                                                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                                                        <div className='search-films-info'>
                                                            <p className='search-name' onClick={(e) => setShowItems([])} >{item.title}</p>
                                                            <div className='search-spane'>
                                                                <span className={item.vote_average > 7 ? 'search-boxo' : 'search-boxo five'} >{item.vote_average.toFixed(1)}</span>
                                                                <p className='search-desc'>{item.overview}</p>
                                                            </div>
                                                            <p className='search-date'>{item.release_date}</p>
                                                        </div>

                                                    </div>
                                                </Link>
                                            ))}
                                        </ul>
                                        <Link to="/searchInfo" onClick={() => allSearch()} className='all-films'>Показать все</Link>
                                    </div>
                                    : null
                            }
                            <button style={{ background: "none", border: "none" }} onClick={() => closeModale()}>
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="mobile-header-inner">
                            <div className="mob-header-top container">
                                <div className="mob-header-top-inner">
                                    <button
                                        onClick={() => setMo(!mo)}
                                    >
                                        <MenuIcon />
                                    </button>
                                    <img src={logo} alt="logo" />
                                    <div className="header-mobile-modal">
                                        <div onClick={() => setMo(!mo)} className={`header-mobile-modal-shadow ${mo ? 'modals' : ''}`}></div>
                                        <div className={`header-mobile-modal-inner ${mo ? 'modals' : ''}`}>
                                            {
                                                menu.map((item, index) => (
                                                    <MenuItem key={index} onClick={handleClose}><Link className='mobile-link' to={item.path}> <img src={item.ic} alt={item.name} /> {item.name}</Link></MenuItem>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="mob-header-top-inner">
                                    <button onClick={() => setSearchModal(true)}>
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
            </div>
        </div>
    )
}