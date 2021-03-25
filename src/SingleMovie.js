import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from './useFetch'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({show:false, msg:''})

  const fetchMovie = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    if (data.Response === 'False') {
      setError({show: true, msg: data.Error})
      setLoading(false)
    } else {
      setMovie(data)
      console.log(movie)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`)
  }, [id])

  if (loading) {
    return <div className='page-error'>
      <h1>{error.msg}</h1>
      <Link to='/' className='btn'>Back to Movies</Link>
    </div>
  }

  const { Poster:poster, Title:title, Plot:plot, Year:year } = movie
  return (
    <section className='single-movie'>
      <img src={poster} alt={title}/>
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  )

}

export default SingleMovie
