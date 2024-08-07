import React, { useEffect, useState } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/logo-white.png'
import { Link } from 'react-router-dom'
import { API_KEY } from '../../data'
import { useNavigate } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  const navigate = useNavigate();

  const [searchData,setSearchData] = useState(null);
  const[value, setValue] = useState("");

  const fetchSearchData = async(e) =>{
    e.preventDefault();
    const searchData_url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&key=${API_KEY}`;
    await fetch(searchData_url).then(res=>res.json()).then(data=>setSearchData(data.items[0])).then(navigate(`/search-result/${value}`));
  }

  // useEffect(()=>{
  //   fetchSearchData();
  // },[])

  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' onClick={()=>setSidebar(prev=>!prev)} src={menu_icon} alt=""/>
            <Link to='/'><img className='logo' src={logo} alt=""/></Link>
        </div>
        <div className="nav-middle flex-div">
            <form onSubmit={(e)=>fetchSearchData(e)} className="search-box flex-div">
            <input type="text" placeholder='Search' value={value} onChange={(e)=>{setValue(e.target.value)}}  />
            <button type='submit'>
            <img src={search_icon} alt="" />
            </button>
            </form>
            
        </div>

        <div className="nav-right flex-div">
            <img src={upload_icon} alt="" />
            <img src={more_icon} alt="" />
            <img src={notification_icon} alt="" />
            <img src={profile_icon} className='user-icon' alt="" />
        </div>
    </nav>
  )
}

export default Navbar