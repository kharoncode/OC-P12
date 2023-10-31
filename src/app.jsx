import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
   const [userId, setUserId] = useState(0);
   return (
      <Router>
         <Header userId={`${userId}`} />
         <main>
            <Nav userId={`${userId}`} />
            <Routes>
               <Route
                  path="/"
                  element={<Users userId={userId} setUserId={setUserId} />}
               />
               <Route path="/:userId/" element={<Home />} />
               <Route path="/:userId/profil" element={<Home />} />
               <Route path="/:userId/settings" element={<Home />} />
               <Route path="/:userId/community" element={<Home />} />
            </Routes>
         </main>
      </Router>
   );
}

export default App;
