import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Team from './components/team/Team';
import Projects from './components/projects/Projects';
import ReactCalendar from './components/calendar/ReactCalendar';

import NotFoundPage  from './components/NotFoundPage';

function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar/> 
    <Routes>   
    <Route path='/' element={<Dashboard/>} exact />
    <Route path='/team' element={< Team />} />
    <Route path='/projects' element={< Projects />} />
    <Route path='/calendar' element={< ReactCalendar />} />
    <Route path="*" element={< NotFoundPage />} />
    </Routes>

    </BrowserRouter>
    </>
  );

}

export default App;
