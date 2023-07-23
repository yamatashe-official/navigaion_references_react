import style from "./Navbar1.module.css";
import { sampleLinks } from "../../../models/LinksModel";

export default function Navbar1(props) {
  const links = sampleLinks.map((element, index) => (
    /* switch out this with a link tag - for now just keep it a <p></p> for demo purposes*/
    <p className={style.link} key={element.description}>
      {element.name}
    </p>
  ));

  return (
    <nav className={style.overall} key={props.passedKey ?? "navbar1Key"}>
      <div className={style.gridLeft}>
        <img src={"/assets/images/sampleLogo.svg"} className={style.logo} />
      </div>
      <div className={style.gridCenter}>{links}</div>
    </nav>
  );
}
