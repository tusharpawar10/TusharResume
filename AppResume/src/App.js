import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/HOC/Main";
import Left from "./components/HOC/Left";
import Right from "./components/HOC/Right";
import Home from "./components/Home/Home";
import "./index.css";
import Social from "./components/Social/Social";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Skills1 from "./components/Skills1";
import Certificates from "./components/Certificates";
import Languages from "./components/Languages";
import Interests from "./components/Interests";
import Project from "./components/Projects";
function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      {/*========== HEADER ==========*/}
      <Header />
      <Main>
        <Left>
          <Home />
          <Social />
          <Skills />
          <Skills1 />
          <Languages />
          <Interests />
        </Left>
        <Right><br/><br/><br/><br/>
          <Profile />
          <Education />
          <Certificates />
          <Project />
        </Right>
      </Main>
      {isVisible && (
        <span className="scrolltop show-scroll" onClick={scrollToTop} id="scroll-top">
          <i className="bx bxs-up-arrow-alt scrolltop__icon"></i>
        </span>
      )}
    </>
  );
}

export default App;
