import style from "./Navbar5.module.css";
import { sampleLinks } from "../../../models/LinksModel";

export default function Navbar5(props) {
  const links = sampleLinks.map((link) => {
    return <p className={style.name}>{link.name}</p>;
  });

  const socialMediaLinks = [
    "/assets/icons/facebook.svg",
    "/assets/icons/instagram.svg",
    // "/assets/icons/twitter.svg",
    // "/assets/icons/youtube.svg",
    // "assets/icons/linkedin.svg",
    // "assets/icons/pinterest.svg",
    // "assets/icons/hashtag-solid.svg",
    // "assets/icons/twitch.svg",
    "assets/icons/snapchat.svg",
    // "assets/icons/reddit.svg",
    "assets/icons/tiktok.svg",
  ];

  const socialIcons = socialMediaLinks.map((element) => {
    return <img src={element} className={style.socialIcons} key={element} />;
  });

  return (
    <nav className={style.overall} key={props.passedKey}>
      <div className={style.gridLeft}>
        <img className={style.logo} src={"/assets/images/sampleLogo.svg"} />
        <p className={style.ctaButton}>Download Now</p>
      </div>
      <div className={style.gridCenter}>{links}</div>
      <div className={style.gridRight}>{socialIcons}</div>
    </nav>
  );
}
