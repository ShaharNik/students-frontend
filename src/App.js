import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Register from './component/Register';


const App = () => {
  
  return (
    <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">Register Student</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/register' element={< Register />}></Route>
          </Routes>
          </div>
       </Router>

  )
}

export default App
