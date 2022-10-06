import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "../pages";
import Detail from "../pages/DetailMovie"
import NotFound from '../pages/NotFound';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            {/* sub derectori */}
            <Route path="/" element={<Home />} />
            {/* mengambil path params dari id movie */}
            <Route path="/detail/:id_movie" element={<Detail />} />
            <Route path="/Favorite/:id_movie" element={<Detail />} />
            {/* wild card */}
            <Route path="*" element={<NotFound />} />
            
        </Routes>
      
      </BrowserRouter>
    )
  }
}

export default App