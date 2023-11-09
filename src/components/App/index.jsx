import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Users from '../../pages/Users';
import Header from '../Header';
import Nav from '../Nav';
import Home from '../../pages/Home';
import Dev from '../../components/Dev';

function App() {
   const [userId, setUserId] = useState(0);
   return (
      <Router>
         <Nav userId={`${userId}`} />
         <Header userId={`${userId}`} />
         <main>
            <Routes>
               <Route
                  path="/"
                  element={<Users userId={userId} setUserId={setUserId} />}
               />
               <Route path="/:userId/" element={<Home />} />
               <Route path="/:userId/profil" element={<Home />} />
               <Route path="/:userId/settings" element={<Home />} />
               <Route path="/:userId/community" element={<Home />} />
               <Route path="/user/:id/:category" element={<Dev />} />
            </Routes>
         </main>
      </Router>
   );
}

export default App;
