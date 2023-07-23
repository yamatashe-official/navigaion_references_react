import { useEffect, useState } from "react";
import Navbar1 from "../components/Navbars/Navbar1/Navbar1.js";
import Navbar2 from "../components/Navbars/Navbar2/Navbar2";
import Navbar3 from "../components/Navbars/Navbar3/Navbar3";
import Navbar4 from "../components/Navbars/Navbar4/Navbar4";
import Navbar5 from "../components/Navbars/Navbar5/Navbar5";

import BackgroundLayout from "../layouts/BackgroundLayout";
import { useSelector } from "react-redux";

const HomePage = () => {
  const pageState = useSelector((state) => state.pageState);
  const [backgroundImage, setBackgroundImage] = useState();

  const Navbars = [
    <Navbar1 passedKey={"nav1"} key={"navkey1"} />,
    <Navbar2 passedKey={"nav2"} key={"navkey2"} />,
    <Navbar3 passedKey={"nav3"} key={"navkey3"} />,
    <Navbar4 passedKey={"nav4"} key={"navkey4"} />,
    <Navbar5 passedKey={"nav5"} key={"navkey5"} />,
  ];

  async function getRandomImage() {
    const response = await fetch(`https://source.unsplash.com/random`).catch(
      (error) => null
    );
    if (response.ok) {
      setBackgroundImage(response.url);
    }
  }

  const renderedNavbar = Navbars.map((navbar, index) => {
    return index === pageState.page ? navbar : null;
  });

  useEffect(() => {
    // console.log(`Page ${pageState.page} is rendered`);
    setBackgroundImage(null);
    getRandomImage();
    console.log(backgroundImage);
  }, [pageState.page]);

  return (
    <BackgroundLayout backgroundImage={backgroundImage}>
      <header>
        <title>Navigation References</title>
      </header>
      {renderedNavbar}
    </BackgroundLayout>
  );
};

export default HomePage;
