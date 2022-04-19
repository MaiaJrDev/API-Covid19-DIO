import axios from "axios";
import { useEffect, useState } from "react"

const useRequestData = (country) => {

    const [data, setData] = useState({})

    const getData = (country) => {

        axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${country}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    useEffect(() => {
        getData(country)
    }, [country])

    return data
}

export default useRequestData