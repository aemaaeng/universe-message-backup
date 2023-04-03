import Bubble from "./Bubble";
import styled from "styled-components";
import profileImg from "../img/profileImg.jpeg";
import profileWebp from "../img/profileImg.webp";
import { ChatMessage } from "../util/groupByMinute";

const SContainer = styled.div`
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
    <SContainer>
      <SProfileImg>
        <source srcSet={profileWebp} type="image/webp" />
        <img src={profileImg} width="40px" height="40px" alt="profileImg" />
      </SProfileImg>
      <SBubbleContainer>
        <SProfileName>기현</SProfileName>
        {data.map((el, idx) => (
          <Bubble key={idx} data={el} idx={idx} length={data.length} />
        ))}
      </SBubbleContainer>
    </SContainer>
  );
}

export default GroupedByMin;
