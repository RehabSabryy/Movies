import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function People() {
  let [actorsList , setActorsList] = useState([]);
  async function actors () {
    let {data} = await axios.get("https://api.themoviedb.org/3/person/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US");
    console.log(data);
    setActorsList(data.results);
  }
  useEffect(() => {
    actors();
  })
  return (
  <>
    <div className="row my-5 pb-5 py-5">
    <h1 className='text-center mb-5 fw-bold text-secondary'>Popular Actors</h1>
      {actorsList.map((actor, index)=><div key={index} className='col-md-3'>
        <Link to={`/itemdetails/${actor.id}/person`}>
        <div className="movie">
          <img className="w-100" src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
          <h6 className='mt-2 fw-bold text-center mb-5'>{actor.name}</h6>
        </div>
        </Link>
      </div>)}
    </div>

  </>
  )
}
