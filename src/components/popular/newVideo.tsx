import { get } from 'lodash'
import comment from '../../assets/icon/comment.svg'
import useGet from '../../hooks/useGet'
import './newVideo.scss'

const NewVideo = () => {

    const { data, loading } = useGet({ url: `3/movie/popular` })
    const items: any | undefined = get(data, "data.results")

    const arr = [
        {
            desc: "За что дают «Оскар»? И почему не дают?",
        },
        {
            desc: "«Ледниковый период»: что пошло не так",
        },
        {
            desc: "Как устроен «Настоящий детектив»",
        },
        {
            desc: "За что дают «Оскар»? И почему не дают?",
        },
        {
            desc: "Как удаленные сцены могли изменить «Голодные игры»",
        },
    ]
    return (
        <div className="new-video">
            <h6>
                Новые видео
            </h6>
            {
                items && items.slice(10,14).map((item:any, index:any) => (
                    <div key={index} className="new-video-inner">
                        <div className="oscar-img-block">

                        <img className='oscar-icons' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" />
                        </div>
                        <div className="video-information">
                        <span>{item.overview.slice(0,60)} <img src={comment} alt="img" /> </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default NewVideo