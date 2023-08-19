import React from 'react'
import {useState,useEffect} from 'react'
import './Rowpost.css' 
/* import { API_KEY,imageBaseUrl } from '../constants/constants'*/
import {API_KEY, imageBaseUrl } from '../constants/constants'
import axios from '../axios'

import Youtube from 'react-youtube'  //this is a component that displays like i frame. ie, play videos when link is given

function Rowpost({title,size,url}) {
//set default post as null array because
  const [post, setPost] = useState([]) 
  const [videoKey, setVideoKey] = useState('') // at first key value will be null but when you click you pass movie id , now collection of videos are requested and hence served. from this key of the first video from the array is picked and updates the key immediately with this key

  
  
  useEffect(() => {
   axios.get(url).then((response)=>{
    console.log(response.data);
    console.log(response.data.results[0]);
    setPost(response.data.results) /*  all 20 items will be replicated */  
   })
  },[url])
  // since this is a variable it should be included as second argument array. they call it a depencencies. any number of varibles can be added in this array

  let handleOnclick=(event,movieId)=>{

    console.log(movieId,'this is the movie id of the movie image clicked'); //now that it prints the movie id here .we can use TMDB video collection fetching api.this will serve us all the youtube videos related to this movie (movie id was used to identify the movie here for which respective videos will be fetched from youtube)
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){ //if no videos are there related to it dont do anything
        setVideoKey(response.data.results[0].key)
      }
      else console.log('related videos are not found')
    }) // we request this get request to get all the respective videos.it will be in the response obj
  }
  //this is options to set height and width etc. Define everything outside return be it variable,function, object
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  
  
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='posters'>
              {/*<img className='poster' src='https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w' alt="poster-card" />*/}
          {post.map((item)=>{
            return <img src={imageBaseUrl+item.backdrop_path} alt="rowpostImages" className={size} onClick={(event)=>{handleOnclick(event,item.id)}}/>
          })}
      </div>

      {videoKey && (
      <div className='video-player'>
             <Youtube videoId={videoKey} opts={opts}/>
      </div>)} 
      {/* this is an if condition -if(videoKey){<Youtube/>} */}
    </div>
  )
}

export default Rowpost