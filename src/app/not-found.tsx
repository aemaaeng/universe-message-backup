import Link from "next/link";
import styles from "./not-found.module.css";
import { Bagel_Fat_One, Orbit } from "next/font/google";

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

export default function NotFound() {
  return (
    <main className={styles.notFoundContainer}>
      <h1 className={bagelFatOne.className}>Oops!</h1>
      <h3>Page Not Found</h3>
      <p className={orbit.className}>요청하신 페이지를 찾을 수 없습니다.</p>
      <Link href="/">
        <u>메인 화면으로 돌아가기</u>
      </Link>
    </main>
  );
}
