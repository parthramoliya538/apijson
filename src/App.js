import { Routes, Route } from "react-router-dom"
import Header from "./Header"
import Posts from "./Posts"
import Comments from "./Comments"
import Albums from "./Albums"
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from "./Todos"
import Photos from "./Photos"
import Users from "./Users"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Header/> } />
        <Route path="/Posts" element={ <Posts/> } />
        <Route path="/Comments" element={ <Comments/> } />
        <Route path="/Albums" element={ <Albums/> } />
        <Route path="/Todos" element={ <Todos/> } />
        <Route path="/Photos" element={ <Photos/> } />
        <Route path="/Users" element={ <Users/> } />
      </Routes>
    </div>
  )
}

export default App