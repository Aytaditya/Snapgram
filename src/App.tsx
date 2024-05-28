
import {Routes,Route} from "react-router-dom"
import Home from "./root/Pages/Home"
import SignInForm from "./auth/form/SignInForm"
import SignUpForm from "./auth/form/SignUpForm"
 import AuthLayout from "./auth/AuthLayout"
import "./index.css"


const App = () => {
 
  return (
    <div className="flex h-screen">
    <Routes >
      <Route element={<AuthLayout/>}>
      <Route path="/signup" element={ <SignUpForm/> } />
      <Route path="/login" element={ <SignInForm/> } />
      </Route>
      
    </Routes>

    <Routes>
    <Route path="/" element={<Home/>} />
    </Routes>
    </div>
    
  )
}

export default App
