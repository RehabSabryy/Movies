import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MediaItem from '../MediaItem/MediaItem';
import { Helmet } from 'react-helmet';

export default function Home() {
    const [trendingMovies, setMovies] = useState([]);
    const [trendingPeople, setPeople] = useState([]);

    async function getTrendingMedia(mediaType, callback) {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=0571b3897a59a86549eb721a218f5f26`);
            callback(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getTrendingMedia('movie', setMovies);
        getTrendingMedia('person', setPeople);
    }, []);

    return (
      <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Trending</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <div className="container">
            <div className="row">
                <div className="col-md-4 mt-5">
                    <div className="border w-25 mb-5 mt-5"></div>
                    <h2 className='h3'>Trending Movies<br />To Watch Right Now</h2>
                    <p className='text-secondary'>Most Watched Movies</p>
                    <div className="border w-100 mt-5"></div>
                </div>
                {trendingMovies.map((item, index) => <MediaItem key={index} item={item} />)}
            </div>

            <div className="row">
                <div className="col-md-4 mt-5">
                    <div className="border w-25 mb-5 mt-5"></div>
                    <h2 className='h3'>Trending Actors<br />To Watch Right Now</h2>
                    <p  className='text-secondary'>Most Watched Actors</p>
                    <div className="border w-100 mt-5"></div>
                </div>
                {trendingPeople.map((item, index) => <MediaItem key={index} item={item} />)}
            </div>
        </div>
        </>
    );
}
