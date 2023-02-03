import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import About from "./components/About";
import Courses from "./components/Courses";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {
  const [li, setLi] = useState([]);
  const [liLg, setLiLg] = useState([]);
  const [sec, setSec] = useState([]);
  const [loading, setLoading] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  console.log(inView);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const li = document.querySelectorAll(".navText");
    setLi(li);
    const liLg = document.querySelectorAll(".navTextLg");
    setLiLg(liLg);
    const sec = document.querySelectorAll("section");
    setSec(sec);
  }, [loading]);

  console.log(li);
  console.log(sec);

  const activeMenu = () => {
    let len = sec.length;
    // console.log(len);
    if (sec[len] === null) {
    }
    console.log(sec[len]);
    while (--len && window.scrollY + 100 < sec[len].offsetTop) {}
    li.forEach((ltx) => ltx.classList.remove("active"));
    liLg.forEach((ltxLg) => ltxLg.classList.remove("active"));
    li[len].classList.add("active");
    liLg[len].classList.add("active");
  };

  window.addEventListener("scroll", activeMenu);

  return (
    <>
      {loading ? (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <ClipLoader size={70} color={"#754ef9"} loading={loading} />
        </div>
      ) : (
        <div className="w-full h-auto" onScroll={activeMenu}>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Courses />
          <GetInTouch />
        </div>
      )}
    </>
  );
};

export default App;
