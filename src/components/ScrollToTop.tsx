"use client";

import styles from "./ScrollToTop.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  motion,
  Variants,
  useScroll,
  useAnimationControls,
  useMotionValueEvent,
} from "framer-motion";

const ScrollToTopVariants: Variants = {
  hide: { display: "none" },
  show: { display: "block" },
};

function ScrollToTop() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const controls = useAnimationControls();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest === 0 || pathname === "/") controls.start("hide");
    else controls.start("show");
  });

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <motion.button
      className={styles.motionButton}
      variants={ScrollToTopVariants}
      initial="hide"
      animate={controls}
      onClick={handleScrollToTop}
    >
      <Image
        src="/icon/topArrow.svg"
        alt="scrollToTop"
        width="17"
        height="20"
      />
    </motion.button>
  );
}

export default ScrollToTop;
