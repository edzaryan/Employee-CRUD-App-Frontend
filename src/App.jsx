import { Routes, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import EmployeePage from './components/pages/Employee/EmployeePage';
import DepartmentPage from './components/pages/Department/DepartmentPage';
import NotfoundPage from './components/pages/NotfoundPage';
import EmployeeDetails from "./components/pages/Employee/EmployeeDetails";
import Layout from "./components/Layout";


function App() {
  return (
    <div className="flex faic fl-dir mg50-t">
      <div className="w800">

        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <HomePage /> } />
            <Route path="/employee/*" element={ <EmployeePage /> } />
            <Route path="/department/*" element={ <DepartmentPage /> } />
            <Route path="/employee/:id/details" element={ <EmployeeDetails /> } />

            <Route path="*" element={ <NotfoundPage /> } />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
