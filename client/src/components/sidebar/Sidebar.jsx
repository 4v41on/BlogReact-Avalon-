import "./sidebar.css";
import Img from "../media/pexels-valdemaras-d-1683688.jpg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState ([])

useEffect(() => {
  const getCats = async () =>
  {
    const res = await axios.get ("/categories")
    setCats(res.data)
  }
  getCats();
 
}, [])
return (
    <div className="sidebar">
           <span className="sidebarTitle">ABOUT ME</span>
<div className="sidebarItem">
 
 
    <img className="sidebarImg" src={Img} alt="" />
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus unde nobis id molestias quaerat, magni voluptas sunt laborum reprehenderit ad perferendis adipisci ut possimus reiciendis sint quisquam minus iste a.</p>
</div>

<div className="sidebarItem">
<span className="sidebarTitle scat">CATEGORIES</span>

 <ul className="sidebarList">
  {cats.map((c)=>(
    <Link to={`/?cat=${c.name}`} className="link"> 
  <li className="sidebarListItem">{c.name}</li>
  </Link>
  ))}
      
 </ul>
</div>
<div className="sideBarItem">
<span className="sidebarTitle">FOLLOW US</span>
<div className="sidebarSocial">
<i className="sidebarIcon fa-brands fa-facebook-f"></i>
<i className="sidebarIcon fa-brands fa-instagram"></i>
<i className="sidebarIcon fa-brands fa-github"></i>
</div>
   
</div>
    </div>
  )
}
