import axios from "axios";
import { useEffect, useState } from "react"

const useRequestData = (country) => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false);

    const getData = (country) => {
        setLoading(true)

        axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${country}`)
            .then((res) => {
                setData(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false)
            })
    }

    useEffect(() => {
        getData(country)
    }, [country])

    return {data, loading}
}

export default useRequestData