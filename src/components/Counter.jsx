import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import CountUp from "react-countup";

const Mar = ({ end }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  return <div ref={ref}>{inView && <CountUp end={end} duration={1} />}</div>;
};

export default Mar;
