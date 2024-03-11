import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './container/header/header';
import './index.scss'
import { Main } from './pages/main/main';
import { PlayFilms } from './pages/playFilms';
import { Sidebar } from './container/sidebar/sidebar';
import Footer from './container/footer/footer';
import SingleMovie from './container/singleMovie/singleMovie';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app-menu container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
