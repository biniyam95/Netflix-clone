import React from 'react'
import { useEffect, useState } from 'react'
import {imageBaseUrl} from '../constants/constants'  // to import one or two items only from the file we created. we can use curly.importing api key from constants
import './Banner.css'
import { TrendingUrl } from '../urls'

// since we need data here from tmdb, we can call the axios instance here. since this was default export, we can rename anything while importing
import axios from '../axios'

function Banner() {

const [movie, setMovie] = useState('')
  /* useEffect(()=>{function reference },[initial value]) */
  useEffect(() => {
    axios.get(TrendingUrl).then((response)=>{  //base url was included in this url but now its not included because we already specified that in the axios  instance
      console.log(response.data);
      console.log(response.data.results[0]);
  setMovie(response.data.results[0])
    })
  }, [])
  
  return (
    /* <div class="banner" style={{backgroundImage: 'url("+ imageUrl + movie.backdrop_path + ")'}}> */
    /* backgroundImage:'url()' */
    //below we are actually concatenating base imageurl and backdrop_path which completes the real image url because in the results array we only have image id and jpg format. this is our normal way of storing image in db- just its id and format png or jpg. recap multer
    <div className='banner' style={{backgroundImage:`url(${imageBaseUrl}${movie.backdrop_path})`}}>   
      <div className='content'>
        <h1 className='title'>{movie.title}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie.overview}</h1>{/* description */}
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner