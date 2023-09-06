"use client";

import Bubble from "./Bubble";
import styled from "styled-components";
import Image from "next/image";
import { ChatMessage } from "./Bubble";

const SGroupContainer = styled.div`
  display: flex;
  margin: 5px 0px;
  padding-left: 10px;
`;

const SProfileImg = styled.picture`
  img,
  source {
    border-radius: 50%;
    max-width: 40px;
    max-height: 40px;
  }
`;

const SBubbleContainer = styled.ul`
  padding-left: 10px;

  img {
    width: 65vw;
    max-width: 300px;
    object-fit: contain;
    border-radius: 3px 20px 20px 3px;
  }

  li:last-child > *:not(span) {
    border-radius: 3px 20px 20px 20px;
  }
`;

const SProfileName = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
`;

function GroupedByMin({ data }: { data: ChatMessage[] }) {
  return (
    <SGroupContainer>
      <SProfileImg>
        <Image
          src="/media/profileImg.jpeg"
          width="40"
          height="40"
          alt="profileImg"
        />
      </SProfileImg>
      <SBubbleContainer>
        <SProfileName>기현</SProfileName>
        {data.map((el, idx) => {
          return <Bubble key={idx} data={el} idx={idx} length={data.length} />;
        })}
      </SBubbleContainer>
    </SGroupContainer>
  );
}

export default GroupedByMin;
