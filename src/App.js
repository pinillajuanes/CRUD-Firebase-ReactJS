import './App.css';
import Show from './components/Show';
import Create from './components/Create';
import Edit from './components/Edit';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const handleRegistration = (user) => {
    console.log("User registered:", user);
    // Add any additional logic you want to perform after registration
  }

  const handleLogin = (user) => {
    console.log("User logged in:", user);
    // Add any additional logic you want to perform after login
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register onRegistration={handleRegistration} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/showall" element={<Show />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
