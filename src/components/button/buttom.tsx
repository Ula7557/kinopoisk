import './button.scss'

interface btn {
    img?:string,
    title:string
}
const Buttons = ({img,title}:btn) => {
    return (
        <div className="button-block">
            <button>
                {
                    img ? <img src={img} alt="img" /> : null
                }
                <span>{title}</span>
            </button>
        </div>
    )
}

export default Buttons