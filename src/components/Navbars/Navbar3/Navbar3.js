import { sampleLinks } from "../../../models/LinksModel";
import style from "./Navbar3.module.css";

export default function Navbar3(props) {
  const links = sampleLinks.map((element) => {
    return (
      <p className={style.link} key={element.description}>
        {element.name}
      </p>
    );
  });

  // this is a basic structure on what this navbar will look like - obviously add all the functionally if it was a production navbar -
  // this is there just so the basic structure is there

  return (
    <nav className={style.overall} key={props.passedKey}>
      <div className={style.gridLeft}>
        <img src={"/assets/images/sampleLogo.svg"} className={style.logo} />
        {links}
      </div>
      <div className={style.gridRight}>
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
        <img src={"/assets/icons/user-solid.svg"} className={style.icon} />
        <img
          src={"/assets/icons/bag-shopping-solid.svg"}
          className={style.icon}
        />
      </div>
    </nav>
  );
}
