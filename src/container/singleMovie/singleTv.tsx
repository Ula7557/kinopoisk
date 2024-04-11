import { get } from 'lodash'
import useGet from '../../hooks/useGet'
import './singleTv.scss'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Buttons from '../../components/button/buttom'
import saves from '../../assets/icon/save.svg'
import { Button, Menu, MenuItem } from '@mui/material'
import fail from '../../assets/icon/fail.svg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoaderFunc from '../../components/loader/loader'

const SingleTv = () => {


    
    const arr = [
        {
            des: "  ",
        },
        {
            des: "Страна",
        },
        {
            des: "Жанр",
        },
        {
            des: "Слоган",
        },
        {
            des: "Режиссер",
        },
        {
            des: "Сценарий",
        },
        {
            des: "Продюсер",
        },
        {
            des: "Оператор",
        },
        {
            des: "Композитор",
        },
        {
            des: "Художник",
        },
        {
            des: "Монтаж",
        },
        {
            des: "Зрители",
        },
        {
            des: "Сборы в России",
        },
        {
            des: "Премьера в России",
        },
        {
            des: "Возраст",
        },
        {
            des: "Время",
        },
    ]

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const params = useParams()
    const prodId = params.id;

    const { data, loading } = useGet({ url: `3/tv/${prodId}` })
    const item: any | undefined = get(data, "data")


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      if (!!loading) return <div style={{minHeight:"100vh"}}><LoaderFunc /></div>
    return (
        item &&
        <div className='single-block-item'>
            <Link to="/" className='single-url-link'>
                <Button variant="outlined" style={{ marginTop: "20px"}}>
                    <ArrowBackIcon />
                    back
                </Button>
            </Link>
            <div className='single'>
                <div className="single-inner">
                    <div>
                        <img className='novie-img' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" />
                    </div>
                    <span className='single-movie-date'>{item.release_date}</span>
                    <Buttons
                        img={fail}
                        title='Добавить в папку'
                    />
                </div>
                <div className="single-inner">
                    <h1 className='single-movie-name'>{item.name}</h1>
                    <span className='eag-movie'>12+</span>
                    <div className='dash-block'>
                        <Buttons
                            img={saves}
                            title='Буду смотреть'
                        />
                        <div>
                            <button className="dashboard-btn"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Неинтересно</MenuItem>
                                <MenuItem onClick={handleClose}>Просмотрен</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className="films-info-single">
                        <h4 className='single-title'>
                            О фильме
                        </h4>
                        <div className="films-info-single-inner">
                            <ul className='info-name'>
                                {
                                    arr.map((item) => (
                                        <li>{item.des}</li>
                                    ))
                                }
                            </ul>
                            <ul className='api-info'>
                                <li>{item.release_date}</li>
                                <li>{item.production_countries[0].name}</li>
                                <li>
                                    {item.genres.map((el: any) => (
                                        <div>{el.name}</div>
                                    ))}
                                </li>
                                <li>-</li>
                                <li>{item.imdb_id}</li>
                                <li>
                                    {item.production_companies.map((it: any) => (
                                        <>
                                            <div>{it.name} <img src={`https://image.tmdb.org/t/p/w500/${it.logo_path}`} alt="img" /></div>
                                        </>
                                    ))}
                                </li>
                                <li>{item.runtime} min</li>
                                <li>{item.status}</li>
                                <li>-</li>
                                <li>-</li>
                                <li>-</li>
                                <li>-</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="single-inner">
                <span className={item.vote_average > 7 ? 'reyting' : 'reyting five'} >{item.vote_average.toFixed(1)}</span>
                    <span className="osenka">{item.vote_count} оценки</span>
                    <Buttons
                        title='Оценить фильм'
                    />
                    <ul className="film-actors">
                        <h5>В главных ролях</h5>
                        <p className='lorem-inp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam distinctio delectus, commodi omnis totam illo sapiente? Accusantium eligendi asperiores deleniti,</p>
                    </ul>
                </div>
            </div>
            <h4 className='pro-comp'>Production companies</h4>
           <div className="comp-na">
           {
                item.production_companies.map((e: any) => (
                    <div className='divs'>
                        <p className="pro-comp-name">{e.name}</p>
                        <img src={`https://image.tmdb.org/t/p/w500/${e.logo_path}`} alt="img" />
                    </div>
                ))
            }
           </div>
            <p className="films-info-desc">
                {item.overview}
            </p>
        </div>
    )
}

export default SingleTv