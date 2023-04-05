import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Movie from './pages/Movie';
import Search from './pages/Search';
import About from './pages/About';
import AddMovie from './pages/AddMovie';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/movies/:id" element={<Movie/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/add-movie" element={<AddMovie />} />

        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
