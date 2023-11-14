import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import Users from '../../pages/Users';
import Home from '../../pages/Home';
import Dev from '../../pages/Dev';

function App() {
   const [userId, setUserId] = useState(12);
   const [isMocked, setIsMocked] = useState(true);
   return (
      <Router>
         <Nav userId={`${userId}`} />
         <Header userId={`${userId}`} />
         <main>
            <Routes>
               <Route
                  path="/"
                  element={
                     <Users setUserId={setUserId} setIsMocked={setIsMocked} />
                  }
               />
               <Route path="/:userId/" element={<Home isMocked={isMocked} />} />
               <Route path="/user/:userId/:category?" element={<Dev />} />
            </Routes>
         </main>
      </Router>
   );
}

export default App;
