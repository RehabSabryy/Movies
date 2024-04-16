import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Tv() {
  let [tvList , setTvList] = useState([]);
  async function tv() {
    let {data} = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US");
    console.log(data);
    setTvList(data.results);
  }
  useEffect(() => {
    tv();
  })
  return (
   <>
    <div className="row my-5 pb-5 py-3">
      <h1 className='text-center mb-5 fw-bold text-secondary'>Popular Tv Shows</h1>
      {tvList.map((tv, index)=><div key={index} className='col-md-3'>
      <Link to={`/itemdetails/${tv.id}/tv`}>

        <div className="movie">
          <img className="w-100" src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} alt={tv.name} />
          <h6 className='mt-2 fw-bold text-center mb-5'>{tv.name}</h6>
        </div>
        </Link>
      </div>)}
    </div>
    </>
  )
}
