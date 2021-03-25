import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from './useFetch'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const {id} = useParams()
  const { data: movie, loading, error} = useFetch(`&i=${id}`)

console.log(error, movie, loading)
  if (loading) {
    return <div className='loading'></div>
  }
  if (error.show) {
    return <div className='page-error'>
      <h1>{error.msg}</h1>
      <Link to='/' className='btn'>Back to Movies</Link>
    </div>
  }

  console.log(movie)
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
