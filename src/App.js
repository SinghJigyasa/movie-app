import {BrowserRouter, Switch, Route, Link,  useRouteMatch, Routes,} from "react-router-dom";
import './App.css';
import Login from './component/login';
import Singup from "./component/singup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>  
          <Route path="/signup" element={<Singup/>}/> 
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
