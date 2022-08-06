import type { NextPage } from "next";
import { BaseLayout } from "../components/layout";
import { Desktop, Mobile } from "../components/views";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const size = useWindowSize();
  return <BaseLayout>{size.width > 400 ? <Desktop /> : <Mobile />}</BaseLayout>;
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default Home;
