"use client";

import Image from "next/image";
import topArrow from "@/icons/toparrow.svg";
import styled from "styled-components";
import {
  motion,
  Variants,
  useScroll,
  useAnimationControls,
  useMotionValueEvent,
} from "framer-motion";

const SScrollToTop = styled(motion.button)`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 999;
  background-color: transparent;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 7px 10px;

  &:hover {
    cursor: pointer;
  }
`;

const ScrollToTopVariants: Variants = {
  hide: { display: "none" },
  show: { display: "block" },
};

function ScrollToTop() {
  const { scrollY } = useScroll();
  const controls = useAnimationControls();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) controls.start("show");
    else controls.start("hide");
  });

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <SScrollToTop
      variants={ScrollToTopVariants}
      initial="hide"
      animate={controls}
      onClick={handleScrollToTop}
    >
      <Image src={topArrow} alt="scrollToTop" width="17" height="20" />
    </SScrollToTop>
  );
}

export default ScrollToTop;
