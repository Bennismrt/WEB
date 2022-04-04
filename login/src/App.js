import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/home" element={<Dashboard/>}/>

      </Routes>
    
    </Router>
  );
}

export default App;
