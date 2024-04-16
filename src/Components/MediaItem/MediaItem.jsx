import React from 'react'
import { Link } from 'react-router-dom'

export default function MediaItem({item}) {
  return (
    <>
        <div className="col-md-2 mt-5 mb-5 pb-4">
          <Link to={`/itemdetails/${item.id}/${item.media_type}`}>
            <div className="movies position-relative">
              {item.poster_path?<img className='w-100' src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} alt="" />:<img className='w-100' src={'https://image.tmdb.org/t/p/w500/'+item.profile_path} alt="" />}
                <h2 className='h5 my-2 mt-5'>{item.title}  {item.name}</h2>
                {item.vote_average && <div className='vote position-absolute top-0 end-0'>{item.vote_average?.toFixed(1)}</div>}
            </div>
            </Link>
        </div>
    </>
  )
}
