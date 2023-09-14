"use client";

import styles from "./Navbar.module.css";
import { useRouter } from "next/navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

function Navbar({ title }: { title: string }) {
  const router = useRouter();

  return (
    <nav className={styles.navContainer}>
      <a className={styles.back} onClick={() => router.back()}>
        &#8249;
      </a>
      <h2 id="title" className={montserrat.className}>
        {title}
      </h2>
    </nav>
  );
}

export default Navbar;
