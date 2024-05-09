
import './App.css';
import Header from './Header';
import AddEmployee from './AddEmployee';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App(){

  return(<>
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route path='/employee/add' element={<AddEmployee/>}/>
  </Routes>
  </BrowserRouter>
  
  
  </>)
}
export default App;
