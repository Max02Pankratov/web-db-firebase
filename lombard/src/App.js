import { Auth } from "./components/auth";
import { Card } from "./components/card";
import { Header } from "./components/header";
import {Routes, Route} from 'react-router-dom'

function App() {
  

  return(
    <div>
        <Header/>

        <div>
          <Routes>
            <Route path="/" element={<Auth/>}/>
            <Route path="/card" element={<Card/>}/>
          </Routes>
        </div>
    </div>
  )
}
export default App;