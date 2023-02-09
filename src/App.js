import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes,Route } from "react-router-dom"
import Ticked from "./components/Tickeds/Ticked";
import './index.css'
import Overvienw from "./components/Overview/Overview";

function App() {
  return (
    <>
    <Header/>
    <Sidebar/>
   
   
  <Routes>
    <Route path="/" element={ <Overvienw/>}/>
    <Route path="/Ticked" element={<Ticked/>}/>
  </Routes>
    </>
  )
}

export default App;
