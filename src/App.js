
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './contexts/theme';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import SignUpForm from './SignUpForm';
import Login from './Login'





const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id='top' className={`${themeName} app`}>
      <BrowserRouter>

        
          <Routes>
            <Route path='/SignUpForm' element={<SignUpForm/> } />
            <Route path='/Login' element={<Login/> } />
            <Route path='/' element={<Home/> } />
            <Route path='/portafolio' element={<Home/> } />
            <Route path='/Header' element={<Header/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Projects' element={<Projects/>} />
            <Route path='/Skills' element={<Skills/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/ScrollToTop' element={<ScrollToTop/>} />
            <Route path='/Footer' element={<Footer/>} />

          </Routes>
        
      </BrowserRouter>
     

  
  
    </div>

);
};

export default App;
