import { Routes,Route } from 'react-router-dom';
import './App.css';
import  {Take_attendance} from './components/Take_attendance';
import { Navbar } from './components/navbar/Navbar';
import { Attendance } from './components/attedancecomponents/Attendance';
import { HomeDashboard } from './components/Dashboard/HomeDashboard';
import { StudentDetailsList } from './components/attedancecomponents/StudentDetailsList';
import { ManualAttendance } from './components/attedancecomponents/ManualAttendance';
import { User } from './components/User/User';
// import { Popup1 } from './components/attendancecard/Popup';
import { Report } from './components/attedancecomponents/Report';
import { Login } from './components/Login/Login';
import { Signup } from './components/Login/Signup';
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
     
      {/* <Popup1/> */}
      {/* <Donutchart/> */}
      <Routes>
        
        {/* <Route path='/' element={<Login/>}/> */}
        {/* <Route path='/signup' element={<Signup/>}/> */}
        <Route path='/'element={ <> <Navbar/> <HomeDashboard/></>}/>
        <Route path='/take_face_attendance' element={<> <Navbar/> <Take_attendance/> </>}/>
        <Route path='/attendance/Manual_attendance' element={<> <Navbar/> <ManualAttendance/> </>}/>
        <Route path='/attendance' element={<> <Navbar/> <Attendance/> </>}/>
        <Route path='/studentdetails' element={<> <Navbar/> < StudentDetailsList/> </>}/>
        <Route path='/todaysattendance' element={<> <Navbar/> <ManualAttendance /></>}/>
        <Route path='/user' element={<> <Navbar/> <User/></>}/>
        <Route path='/attendance/Report' element={<> <Navbar/><Report/></>}/> 
      </Routes>
      
    </div>
  );
}

export default App;
