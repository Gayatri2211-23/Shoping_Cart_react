import { Route, Routes } from "react-router-dom"
import Menu from "./components/Menu"
import Home from "./components/Home"
import Cart from "./components/Cart"
import About from "./components/About"
import Contact from "./components/Contact"

function App(){
 return <div className="container-fluid">
  <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>

 </div>
}
export default App