import style from "./Navbar2.module.css";
import { sampleLinks } from "../../../models/LinksModel";

export default function Navbar2(props) {
  // simply add whatever icon image you want here - link to it as needed
  const socialMediaLinks = [
    // "/assets/icons/facebook.svg",
    "/assets/icons/instagram.svg",
    "/assets/icons/twitter.svg",
    // "/assets/icons/youtube.svg",
    // "assets/icons/linkedin.svg",
    // "assets/icons/pinterest.svg",
    // "assets/icons/hashtag-solid.svg",
    // "assets/icons/twitch.svg",
    "assets/icons/snapchat.svg",
    // "assets/icons/reddit.svg",
    "assets/icons/tiktok.svg",
  ];

  const links = sampleLinks.map((element) => (
    /* switch out this with a link tag - for now just keep it a <p></p> for demo purposes*/
    <p className={style.link} key={element.description}>
      {element.name}
    </p>
  ));

  const socialMediaIcons = socialMediaLinks.map((element) => {
    return <img src={element} className={style.icon} key={element} />;
  });

  return (
    <nav className={style.overall} key={props.passedKey}>
      <div className={style.gridLeft}>{links}</div>
      <div className={style.gridRight}>{socialMediaIcons}</div>
    </nav>
  );
}
