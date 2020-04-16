import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
        <div className="App">
          <Header/>
          <About/>
          <Resume/>
          <Portfolio/>
          <Testimonials/>
          <Contact/>
          <Footer/>
        </div>
  );
}

export default App;
