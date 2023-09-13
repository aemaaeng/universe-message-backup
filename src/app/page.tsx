"use client";

import Link from "next/link";
import styled from "styled-components";
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

const SHomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #title {
    font-size: 3.4rem;
    margin-bottom: 10px;
    color: white;
  }

  span {
    text-shadow: -1.2px 0 black, 0 1.2px black, 1.2px 0 black, 0 -1.2px black;
  }

  h1:not(#title) {
    font-size: 2.2rem;
    color: var(--lightBlack);
    white-space: nowrap;
  }

  #period {
    margin-top: 0px;
  }

  #typing::after {
    content: "";
    margin-left: 0.3rem;
    border-right: 3px solid black;
    animation: cursor 0.9s infinite steps(2);
  }

  @keyframes cursor {
    from {
      border-right: 3px solid var(--lightPurple);
    }
    to {
      border-right: 3px solid black;
    }
  }
`;

const SEnterButton = styled.button`
  outline: none;
  border: none;
  font-size: 1rem;
  padding: 12px 18px 14px 18px;
  background-color: var(--deepPurple);
  color: white;
  border-radius: 25px;
  margin-top: 20px;
  transition: 200ms;
  height: 50px;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

function Home() {
  const wordsToType = [
    "KIHYUN Private Message",
    "똑똑",
    "뭐해요?",
    "사랑하고 빠빠이",
  ];
  const word = useTypingEffect(wordsToType, 100, 1000);

  return (
    <SHomeContainer>
      <h1 id="title">
        🐹 <span className={bagelFatOne.className}>햄니버스</span> 🐹
      </h1>
      <h1 className={montserrat.className} id="typing">
        {word}
      </h1>
      <p className={orbit.className}>
        몬스타엑스 기현 프라이빗 메시지 백업공간
      </p>
      <p className={orbit.className} id="period">
        2022-03-10 ~ 2023-02-14
      </p>
      <Link href="/chats">
        <SEnterButton className={orbit.className}>입장하기</SEnterButton>
      </Link>
    </SHomeContainer>
  );
}

export default Home;
