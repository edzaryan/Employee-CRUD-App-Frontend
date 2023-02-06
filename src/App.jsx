import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import EmployeePage from './components/pages/EmployeePage';
import DepartmentPage from './components/pages/DepartmentPage';
import NotfoundPage from './components/pages/NotfoundPage';

import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/employee" element={ <EmployeePage /> } />
        <Route path="/department" element={ <DepartmentPage /> } />
        <Route path="*" element={ <NotfoundPage /> } />
      </Routes>
    </div>
  );
}

export default App;
