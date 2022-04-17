import Fetching from './Components/Fetching'
import {BrowserRouter,Routes,Route,Link,Switch} from "react-router-dom"
import Login from './Components/Login';
import Signup from './Components/Signup';
import PrivateRoute from './Components/PrivateRoute';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path = '/' element = {<Fetching/>}/>
        <Route exact path  = '/login' element = {<Login />}/>
        <Route exact path = '/signup' element = {<Signup />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
