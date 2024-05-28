import {Routes,Route} from "react-router-dom"
import Home from "./root/Pages/Home"
import SignInForm from "./auth/form/SignInForm"
import SignUpForm from "./auth/form/SignUpForm"
import "./index.css"


const App = () => {
 
  return (
    <div className="flex h-screen">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={ <SignUpForm/> } />
      <Route path="/login" element={ <SignInForm/> } />
    </Routes>
    </div>
    
  )
}

export default App
