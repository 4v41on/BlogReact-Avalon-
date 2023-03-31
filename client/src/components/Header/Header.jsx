import "./header.css"
//import topvideo from "../media/bgheader.mp4"
import topImg from "../media/headerimg.jpg"


export default function Header() {
  return (
<div className="header">
    <div className="headerTitles">
        <span className="headerTitleSm"> React & Node </span>
        <span className="headerTitleLg"> AVALON</span>
</div>
<img
        className="headerImg"
        src={topImg}
        alt=""
      />
</div>

  );
}
