import { useState, useEffect } from 'react'
import { API_ENDPOINT } from './context'


const useFetch = (urlParams) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({show:false, msg: ''})
  const [data, setData] = useState([])

    const getData = async (url) => {
        setLoading(true)
            try {
                const response = await fetch(url)
                const data = await response.json()
            
                if (data.Response === 'True'){
                    setData(data.Search)
                    setError({show:false, msg:''})
                } else {
                    setError({show:true, msg:data.Error })
                }
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData(`${API_ENDPOINT}${urlParams}`)
        console.log(data)
    }, [urlParams])

    return { loading, data, error }
}


export default useFetch