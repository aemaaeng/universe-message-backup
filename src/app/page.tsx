"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { Montserrat, Bagel_Fat_One, Orbit } from "next/font/google";
import useTypingEffect from "@/hooks/useTypingEffect";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const bagelFatOne = Bagel_Fat_One({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
  display: "swap",
});

const orbit = Orbit({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
  display: "swap",
});

function Home() {
  const wordsToType = [
    "KIHYUN Private Message",
    "똑똑",
    "뭐해요?",
    "사랑하고 빠빠이",
  ];
  const word = useTypingEffect(wordsToType, 100, 1000);

  return (
    <main className={styles.homeContainer}>
      <h1 id={styles["title"]}>
        🐹 <span className={bagelFatOne.className}>햄니버스</span> 🐹
      </h1>
      <h1 className={montserrat.className} id={styles["typing"]}>
        {word}
      </h1>
      <p className={orbit.className}>
        몬스타엑스 기현 프라이빗 메시지 백업공간
      </p>
      <p className={orbit.className} id={styles["period"]}>
        2022-03-10 ~ 2023-02-14
      </p>
      <Link href="/chats">
        <button className={`${orbit.className} ${styles.enterButton}`}>
          입장하기
        </button>
      </Link>
    </main>
  );
}

export default Home;
