import "./sidebar.css";
import Img from "../media/sidebar-3.jpg";
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
           <span className="sidebarTitle">JUAN</span>
<div className="sidebarItem">
 
 
    <img className="sidebarImg" src={Img} alt="" />
    <h1 className="aboutmetitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DESCRITO X UNA IA</h1>
<p>Juan es un soñador nato, un eterno buscador de respuestas en un mundo que parece cada vez más confuso y desorientado. 
   A pesar de no saber con certeza qué es lo que lo ha llevado hasta aquí, sigue avanzando con la firme convicción de que hay algo más allá,
   algo que está esperando a ser descubierto.
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

es un apasionado de la vida, un amante de la naturaleza y de todo lo que se pueda aprender de ella. 
Siempre está dispuesto a explorar nuevos lugares y descubrir nuevas cosas, y disfruta de cada momento que pasa al aire libre, rodeado de la belleza natural del mundo.

Este espacio que ha creado es su lugar de escape, un espacio donde puede desahogar sus pensamientos, 
compartir sus ideas y sentirse libre para expresarse tal y 
como es. Aquí, el que llega por casualidad, siempre encuentra algo que le mueve, que le inspira, que le motiva a seguir adelante.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
es un soñador, pero también es un creador. 
A través de sus palabras, él construye un mundo propio, 
un universo donde sus ideas pueden tomar forma y convertirse en algo más grande 
y significativo. Su estilo es único, su voz es auténtica, y su mensaje siempre está lleno de esperanza y optimismo.
 Un documentalista de la vida,
 un observador detallado de cada instante, 
 de cada emoción, de cada pequeño detalle que conforma nuestro mundo. 
 Él nos recuerda que la vida es una aventura fascinante, una oportunidad para descubrir lo que somos y lo que podemos llegar a ser.

Así que si alguna vez te encuentras buscando respuestas,
si alguna vez sientes que te has perdido en el camino, recuerda
la casualidad no existe, cada encuentro es una oportunidad, cada momento es una experiencia única e irrepetible,
 y cada sueño es un paso hacia la realización de lo imposible.</p>
</div>

<div className="sidebarItem">
<span className="sidebarTitle scat">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CATEGORIES</span>

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
