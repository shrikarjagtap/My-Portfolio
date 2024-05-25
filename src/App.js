import React, { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import SkillsPage from './pages/Skills';
import Contact from './pages/Contact';


const App = () => {

  return (
    <BrowserRouter>
      <div id='top' className={`dark app`}>
        <Navbar/>
        <main>

          <Routes>
            <Route path='/' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/skills' element={<SkillsPage/>}/>
            <Route path='/contact' element={<Contact/>}/>

            

          </Routes>
     
        </main>
        <Footer/>
     </div>
    </BrowserRouter>
  );
}

export default App;
