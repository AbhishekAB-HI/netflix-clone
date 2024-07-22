
import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import Youtube from 'react-youtube'
import { imageUrl,API_KEY } from '../constants/Constants'

import './Row.css'

function Rows(props) {

  const [movie,setMovie]=useState([])
  const [urlid,setUrl]=useState('')

   useEffect(() => {
    axios.get(props.url).then((response)=>{
    
      setMovie(response.data.results)

    }).catch((err)=>{
      console.log(err);
    })
    
   })

   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleObject=(id)=>{

    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((responce)=>{
      if(responce.data.results.length!==0){
        setUrl(responce.data.results[0])
        
      }else{
        console.log('Array Empty');
      }
      
    })

  }
   

  return (
    <div className='row' >
        <h1  style={{fontWeight:"bold",fontSize:"26px"}} >{props.title}</h1>
        <div className='posters' >
          {movie.map((obj)=>
          // return (braket removed)
           <img onClick={()=>handleObject(obj.id)}  className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
          )}
            
           
        </div>
        {   urlid &&  <Youtube opts={opts} videoId={urlid.key} />}
 

    </div>
  )
}

export default Rows