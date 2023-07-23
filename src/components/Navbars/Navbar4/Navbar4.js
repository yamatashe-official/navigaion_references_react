import style from "./Navbar4.module.css";
import { sampleLinks } from "../../../models/LinksModel";

export default function Navbar4(props) {
  // switch this to obviously whatever links you want - use <p></p> just for placeholder for now
  const links = sampleLinks.map((element) => {
    console.log(element.icon);
    return (
      <div className={style.linkContainer} key={element.description}>
        <img src={element.icon} className={style.linkIcon} />
        <p className={style.link} key={element.description}>
          {element.name}
        </p>
      </div>
    );
  });

  return (
    <nav className={style.overall} key={props.passedKey}>
      <div className={style.gridLeft}>
        <img src={"/assets/images/sampleLogo.svg"} className={style.logo} />
        <div className={style.searchInputContainer}>
          <input
            className={style.searchInput}
            type="text"
            id="searchInputField"
            placeholder="Search"
          />
          <img
            src={"/assets/icons/magnifying-glass-solid.svg"}
            className={style.searchInputIcon}
          />
        </div>
      </div>
      <div className={style.gridCenter}>{links}</div>
      <div className={style.gridRight}>
        <p className={style.ctaButton}>Download Now</p>
      </div>
    </nav>
  );
}
