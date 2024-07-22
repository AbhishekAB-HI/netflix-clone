import React,{useEffect, useState} from 'react'
import './Banner.css'
import { API_KEY ,imageUrl } from '../constants/Constants'
import axios from '../../axios'

function Banner() {

  const [movie, setmovie] = useState()
 
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((responce)=>{
      console.log(responce.data.results[0],'dsooooooooooooooooooooooooo');
      setmovie(responce.data.results[4])
    }).catch((err)=>{
      console.log(err);
    })
    
  }, [])
  
  return (
    <div 
      style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}}
    className='banner'   >
        <div className='content' >
            <h1 className='title'>{movie?movie.title:''}</h1>
            <div className='banner_buttons' >
                <button className='buttons' >Play</button>
                <button className='buttons' >My List</button>
            </div>
            <h1  className='description'  >{movie?movie.overview:''}</h1>
        </div>
        <div className="fade_bottom">
            

        </div>
        
    </div>
  )
}

export default Banner