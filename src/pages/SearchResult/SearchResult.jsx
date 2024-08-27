import React, { useEffect, useState } from 'react'
import './SearchResult.css';
import { useParams } from 'react-router-dom'
import { API_KEY } from '../../data';
import VideoCard from '../../Components/VideoCard/VideoCard';
import { Link } from 'react-router-dom';
import { value_converter } from '../../data';
import moment from 'moment';
import Skeleton from '../../Components/Skeleton/Skeleton';

const SearchResult = () => {
 const {query} = useParams();
 const [result ,setResult] = useState(null);
 useEffect(()=>{
  const fetchSearchData = async() =>{
    const searchData_url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`;
    await fetch(searchData_url).then(res=>res.json()).then(data=>setResult(data.items));
  }
  fetchSearchData();
 },[query])

 if(result == null) 
  return <>
  <Skeleton/>
  </>
 
 return (
    <div className="feed">
      {
        result.map((data)=>{
                return (
                <Link key={data.id.videoId} to={`${window.location.origin.toString()}/video/24/${data.id.videoId}`} className='card'>
                  <img src={data.snippet.thumbnails.medium.url} alt="" />
                  <h2>{data.snippet.title}</h2>
                  <h3>{data.snippet.channelTitle}</h3>
                  <p>{moment(data.snippet.publishedAt).fromNow()} </p>
                </Link>
              )
        })
      }
    </div>
  )
}

export default SearchResult