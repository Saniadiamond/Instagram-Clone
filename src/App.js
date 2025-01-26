import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Slides from './Pages/Slides'
import Profile from './Pages/Profile';
import Search from './components/Search';
import Reels from './Pages/Reels';
import Messages from './Pages/Messages';
import Notifications from './Pages/Notifications';
import Explore from './Pages/Explore';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/explore" element={<Explore />} />
            <Route path='/Slides' element={<Slides/>}/>     
            <Route path='/Footer' element={<Footer/>}/>     
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
