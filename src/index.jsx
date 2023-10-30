import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Home from './pages/Home';
import Nav from './components/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Router>
         <Header />
         <main>
            <Nav />
            <Routes>
               <Route path="/" element={<Home />} />
            </Routes>
         </main>
      </Router>
   </React.StrictMode>
);
