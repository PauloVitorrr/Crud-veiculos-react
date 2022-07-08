import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../src/components/pages/Home'
import Navbar from './components/layout/Navbar'
import Edit from './components/pages/Edit';
import Register from './components/pages/Register';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
