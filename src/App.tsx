import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './container/header/header';
import './index.scss'
import { Main } from './pages/main/main';
import { PlayFilms } from './pages/playFilms';
import { Sidebar } from './container/sidebar/sidebar';
import Footer from './container/footer/footer';
import SingleMovie from './container/singleMovie/singleMovie';
import SingleTv from './container/singleMovie/singleTv';
import SearchFIlms from './container/searchFilms/searchFilms';
import { useEffect, useState } from 'react';
import NullFolder from './container/nullFolder/nullFolder';
import useIsMountedRef from 'use-is-mounted-ref';



function App() {
   
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <BrowserRouter>
      <div className="App container">
        <Header />
        <div className="app-menu">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/nulls" element={<NullFolder />} />
            <Route path="/searchInfo" element={<SearchFIlms />} />
            <Route path="/movies/:id" element={<SingleMovie />} />
            <Route path="/tv/:id" element={<SingleTv />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
