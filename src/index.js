import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header'
import About from './Components/About';
import Works from './Components/Works';
import Footer from './Components/Footer';
import {Fade} from 'react-reveal';
import Contact from './Components/Contact';
import 'tachyons'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fade left cascade>
      <Header />
      <About />
      <Works />
      <Contact />
      <Footer />
    </Fade>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
