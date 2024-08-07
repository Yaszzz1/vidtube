import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home"
import Video from './pages/video/Video'
import SearchResult from './pages/SearchResult/SearchResult'

 const App = () => {

  const [sidebar,setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
        <Route path="/search-result/:query" element={<SearchResult/>}/>
      </Routes>
    </div>
  )
}
 export default App