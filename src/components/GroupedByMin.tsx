import Bubble from "./Bubble";
import styled from "styled-components";
import profileImg from "../img/profileImg.jpeg";
import profileWebp from "../img/profileImg.webp";
import { ChatMessage } from "../util/groupByDateAndMinute";

const SContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const SProfileImg = styled.picture`
  img,
  source {
    border-radius: 50%;
    max-width: 40px;
    max-height: 40px;
  }
`;

const SBubbleContainer = styled.div`
  padding-left: 10px;
`;

const SProfileName = styled.div`
  font-weight: 700;
`;

function GroupedByMin({ data }: { data: ChatMessage[] }) {
  return (
    <SContainer>
      <SProfileImg>
        <source srcSet={profileWebp} type="image/webp" />
        <img src={profileImg} alt="profileImg" />
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
