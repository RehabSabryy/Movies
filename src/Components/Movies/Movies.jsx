import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function Movies({item}) {
  let [trendingMovies , setMovies] = useState([]);
  async function getMovies() {
      let {data} = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US");
      console.log(data);
      setMovies(data.results);
  }
  useEffect(() => {
      getMovies();
  },[]);
return (
  <>
     <div className='row my-5'>
     <h1 className='text-center mb-5 fw-bold text-secondary'>Popular Movies</h1>

    
     {trendingMovies.length > 0 ? trendingMovies.map((movie, index) => (
          <div key={index} className='col-md-3'>
            <Link to={`/itemdetails/${movie.id}/movie`}>
              <div className="movie">
                <img className="w-100" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <h6 className='mt-2 fw-bold text-center'>{movie.title}</h6>
                <p>{movie.overview}</p>
              </div>
            </Link>
          </div>
        )) : <i className='fas fa-spinner fa-spin fa-1x'></i>}
      </div>
      </>
      )
}