import Bubble from "./Bubble";
import { ChatMessage } from "../util/groupByMinute";
import styled from "styled-components";
import profileImg from "../img/profileImg.jpeg";

const SContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const SProfileImg = styled.img`
  border-radius: 50%;
  width: 10%;
  height: 10%;
  max-width: 40px;
  max-height: 40px;
`;

const SBubbleContainer = styled.div`
  padding-left: 10px;
`;

const SProfileName = styled.div`
  font-weight: 700;
`;

function GroupedMsg({ data }: { data: ChatMessage[] }) {
  return (
    <SContainer>
      <SProfileImg src={profileImg} />
      <SBubbleContainer>
        <SProfileName>기현</SProfileName>
        {data.map((msg, idx) => (
          <Bubble key={idx} data={msg} />
        ))}
      </SBubbleContainer>
    </SContainer>
  );
}

export default GroupedMsg;
