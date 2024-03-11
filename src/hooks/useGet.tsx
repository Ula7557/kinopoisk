import { useEffect, useState } from "react"
import api from "../service/api"

interface IProp {
    url: string,
    params?: any,
    onSuccess?: (data?: any) => void
    onError?: (data?: any) => void
    isVisible?:boolean
}
function useGet(prop: IProp) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const {
        url, params, onSuccess = () => { }, onError = () => { },isVisible = true
    } = prop
    async function get() {
        setLoading(true)
        await api.get(url)
            .then((res: any) => {
                setLoading(false);
                onSuccess(res);
                setData(res);
            })
            .catch((err: any) => {
                setLoading(false);
                onError(err)
            });
    }
    useEffect(() => {
        if(isVisible) {
            get()
        }
    }, [isVisible])
    return { data, loading }

}

export default useGet