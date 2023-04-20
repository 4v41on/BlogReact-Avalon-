import "./header.css"
//import topvideo from "../media/bgheader.mp4"
import topImg from "../media/header-optionn.jpg"


export default function Header() {
  return (
<div className="header">
    <div className="headerTitles">
        <span className="headerTitleLg"> AVALON</span>
        <span className="headerTitleSm"> A blog of a another dreamer.</span>

        <span className="headerText"> "La vida no es lo que uno vivió, 
        sino lo que uno recuerda, y cómo lo recuerda para contarla"  - GGM</span>
</div>
<img
        className="headerImg"
        src={topImg}
        alt=""
      />
</div>

  );
}
