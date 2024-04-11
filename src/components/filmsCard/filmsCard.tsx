import { Link } from "react-router-dom"
import './index.scss'
interface IArr {
    poster_path: any
    item: any
    id: any
}
const FilmsCard = (item: IArr) => {


    return (
        item && <div className="card">
            <Link to={`/tv/${item.id}`}>
                <span>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" />
                </span>
            </Link>
        </div>
    )
}
export default FilmsCard