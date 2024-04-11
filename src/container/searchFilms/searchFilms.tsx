import './searchFilms.scss'
import films from '../../assets/films.webp'
import { searchInput } from '../../components/search'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const SearchFIlms = () => {

    const searchQuery = localStorage.getItem('name')
    const [showItems, setShowItems] = useState<any>([])
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
            setShowItems(result1)
            setTotalPages(total_page)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="search-films">
            <Link to="/" onClick={() => localStorage.removeItem('name')}>
                <Button variant="outlined" style={{ marginTop: "20px" }}>
                    <ArrowBackIcon />
                    back
                </Button>
            </Link>
            <div className="search-top">
                <div className="search-top-in">
                    <div className="search-top-inner">
                        <span>поиск:</span>
                        <span><b>{searchQuery}</b></span>
                        <span>результаты:</span>
                    </div>
                    <div className="search-top-inner">
                        <span><b>подробно</b> •</span>
                        <span> кратко</span>
                    </div>
                </div>
            </div>
            <h6 className="search-title">Скорее всего, вы ищете:</h6>
            {
                showItems && showItems.map((item: any, index: any) => (
                    <div className="search-films-block">
                        <div className="search-films-card-d1">
                            <div className="search-films-card">
                                <div className="saerch-films-card-inner-img">
                                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" />
                                </div>
                                <div className="saerch-films-card-inner">
                                    <Link to={`/movies/${item.id}`} className='search-name-block'><h6 className="saerch-films-name">{item.title}</h6><span>{item.release_date}</span></Link>
                                    <div className='search-desc'><span>{item.overview}</span></div>
                                    <span className='search-from'>{item.original_language}</span>
                                </div>
                            </div>
                            <div>
                                <span className={`search-reyting ${item.vote_average > 7 ? 'search-reyting' : 'reyting-f'}`}>{item.vote_average.toFixed(1)}</span>
                            </div>
                            <div></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default SearchFIlms