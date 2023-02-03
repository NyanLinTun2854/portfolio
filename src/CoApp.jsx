import React, { useEffect, useState } from "react";
import About from "./components/About";
import Courses from "./components/Courses";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";

const CoApp = () => {
  const [li, setLi] = useState([]);
  const [liLg, setLiLg] = useState([]);
  const [sec, setSec] = useState([]);

  useEffect(() => {
    const li = document.querySelectorAll(".navText");
    setLi(li);
    const liLg = document.querySelectorAll(".navTextLg");
    setLiLg(liLg);
    const sec = document.querySelectorAll("section");
    setSec(sec);
  }, []);
  return <div>CoApp</div>;
};

export default CoApp;
