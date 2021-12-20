import EmployeeList from "./component/EmpList";
import NewEmp from "./component/NewEmp";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Navbar } from "./Navbar";
import { EditEmp } from "./component/EditEmp";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
        <Route path="home" element={<EmployeeList/>}  />
        <Route path="about" element={<NewEmp/>}  />
        <Route path="/:id/editemp" element={<EditEmp/>}  />
    </Routes>
    </BrowserRouter>
    {/* <EmployeeList/>/ */}
    {/* <NewEmp/> */}
    
    </>
  );
}

export default App;
