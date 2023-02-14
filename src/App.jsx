import { Routes, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import EmployeePage from './components/pages/Employee/EmployeePage';
import DepartmentPage from './components/pages/Department/DepartmentPage';
import NotfoundPage from './components/pages/NotfoundPage';
import EmployeeDetails from "./components/pages/Employee/EmployeeDetails";

import Navbar from './components/Navbar'
import DepartmentList from "./components/pages/Department/DepartmentList";

function App() {
  return (
    <div className="flex faic fl-dir mg50-t">
      <div className="w800">
        <Navbar />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/employee/*" element={ <EmployeePage /> } />
          <Route path="/department/*" element={ <DepartmentPage /> } />
          <Route path="/employee/:id/details" element={ <EmployeeDetails /> } />

          <Route path="*" element={ <NotfoundPage /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
