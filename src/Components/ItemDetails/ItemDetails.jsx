import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet';

export default function ItemDetails() {
    let {id, media_type} = useParams();
    const [details, setDetails] = useState([]);
    async function getItemDetails(id, media_type) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=0571b3897a59a86549eb721a218f5f26`);
        setDetails(data);
    }
    useEffect(() => {
        getItemDetails(id, media_type);
    })
  return (
        <>
          <Helmet>
        <meta charSet='utf-8' />
        <title>{details.title || details.name}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <div className="row mt-5">
            <div className="col-md-3 position-relative ">
            {details.poster_path?<img className='w-100' src={'https://image.tmdb.org/t/p/w500/'+details.poster_path} alt="" />:<img className='w-100' src={'https://image.tmdb.org/t/p/w500/'+details.profile_path} alt="" />}
            </div>
            <div className="col-md-9">
                <h3>{details.title}{details.name}</h3>
                <p className='text-secondary'>{details.overview}{details.biography}</p>
                {details.release_date && <p>Release Date: {details.release_date}</p>}
                {details.popularity && <p>Popularity: {details.popularity?.toFixed(1)}</p>}
                {details.vote_average && <p>Vote Average: {details.vote_average?.toFixed(1)}</p>}
                {details.vote_count && <p>Vote Count: {details.vote_count?.toFixed(1)}</p>}
                <p>{details.place_of_birth}</p>
            </div>
        </div>
        </>
  )
}
