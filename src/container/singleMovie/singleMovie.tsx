import { get } from 'lodash'
import useGet from '../../hooks/useGet'
import './singleMovie.scss'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Buttons from '../../components/button/buttom'
import saves from '../../assets/icon/save.svg'
import { Box, Button, Menu, MenuItem, Modal, Typography } from '@mui/material'
import fail from '../../assets/icon/fail.svg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoaderFunc from '../../components/loader/loader'
import YouTube, { YouTubeProps } from 'react-youtube';

const SingleMovie = () => {

    const [videos, setVideos] = useState<any>()
    const arr = [
        {
            des: "Год производства",
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

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [opens, setOpens] = useState(false);
    const handleOpen = () => setOpens(true);
    const handleCloses = () => setOpens(false);

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

    const { data, loading } = useGet({ url: `3/movie/${prodId}` })
    const item: any | undefined = get(data, "data")

    const getVideos = async () => {
        try {
            await fetch(`https://api.themoviedb.org/3/movie/${prodId}/videos?api_key=a2006311928939b35613c28405038c87&language=en-US`)
                .then(res => res.json())
                .then(json => setVideos(json.results))
        } catch (err) {
            console.log(err);

        }
    }
    useEffect(() => {
        if (prodId) {
            getVideos()
        }
    }, [prodId])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])





    if (!!loading) return <div style={{ minHeight: "100vh" }}><LoaderFunc /></div>
    return (
        item &&
        <div className='single-block-item'>
            <Link to="/" className='single-url-link'>
                <Button variant="outlined" style={{ marginTop: "20px" }}>
                    <ArrowBackIcon />
                    back
                </Button>
            </Link>
            <div className='single'>
                <div className="single-inner">
                    <div className='single-first-child'>
                        <img className='novie-img' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" />
                    </div>
                    <span className='single-movie-date'>{item.release_date}</span>
                    <div className='treyler-divs'>
                        <YouTube videoId={videos[0]?.key} className={'you-tra'} />
                        <div className="shadov-div" onClick={handleOpen}></div>
                    </div>
                    <Buttons
                        img={fail}
                        title='Добавить в папку'
                    />
                </div>
                <div className="single-inner">
                    <h1 className='single-movie-name'>{item.title}</h1>
                    <span className='eag-movie'>12+</span>
                    <div className='dash-block'>
                        <Buttons
                            img={saves}
                            title='Буду смотреть'
                        />
                        <div className='qiziqarli'>
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
                                    arr.map((item, index) => (
                                        <li key={index}>{item.des}</li>
                                    ))
                                }
                            </ul>
                            <ul className='api-info'>
                                <li>{item.release_date.slice(0, 4)}</li>
                                <li>{item.production_countries[0].name && item.production_countries[0].name}</li>
                                <li>
                                    {item.genres.map((el: any) => (
                                        <div>{el.name ? el.name : '-'}</div>
                                    ))}
                                </li>
                                <li>-</li>
                                <li>{item.imdb_id}</li>
                                <li>
                                    {item.production_companies.map((it: any) => (
                                        <>
                                            <div>{it.name ? item.name : '-'} <img src={`https://image.tmdb.org/t/p/w500/${it.logo_path}`} alt="img" /></div>
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
            <div>
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
            <div className="trailer-youtube">
                <div>
                    <p className="films-info-desc">
                        {item.overview}
                    </p>
                    <div>
                        <Modal
                            open={opens}
                            onClose={handleCloses}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            disableRestoreFocus={false}
                        >
                            <Box sx={style}>
                                <YouTube videoId={videos[0]?.key} className={'you-tras'} />
                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleMovie