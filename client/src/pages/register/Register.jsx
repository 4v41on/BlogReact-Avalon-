import { Link } from "react-router-dom"
import "./register.css"
import { useState } from "react"
import axios from "axios"

export default function Register() {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState(false)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false);
  try {
      
      const res = await axios.post("/auth/register",{
      username,
      email,
      password,
    });
    res.data && window.location.replace("/login");
  } catch (err){
   setError(true)
  }
    

  };
  return (
    <div className="register">

      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit} >
      <label> username </label>
      <input 
        type="text" 
      className="registerInput"  
      placeholder= " Entre your username... "
      onChange={e=>setUsername(e.target.value)}
      />
      <label> email </label>
      <input 
      type="text" 
      className="registerInput"  
      placeholder= " Entre your email... "
      onChange={e=>setEmail(e.target.value)}
      />
      <label> Password </label>
      <input 
      type="password" 
      className="registerInput"  
      placeholder= " Entre your pass... "
      onChange={e=>setPassword(e.target.value)}
      />
      <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton">
      <Link className="link" to="/Login">LOGIN</Link>
      </button>
  {error && <span>UPPS! algo sucedio</span>}
    
    </div>
  )
}
