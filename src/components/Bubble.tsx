import styled from "styled-components";
import { ChatMessage } from "../util/groupByMinute";
import Image from "./Image";

const SContainer = styled.div`
  margin: 5px 0px;
`;

const STextContainer = styled.div`
  background-color: var(--deepPurple);
  padding: 10px 25px 10px 17px;
  width: fit-content;
  max-width: 255px;
  border-radius: 3px 20px 20px 3px;

  .text {
    color: white;
    line-height: 1.4rem;
  }
`;

const SVideoContainer = styled.video`
  max-width: 70%;
  border-radius: 3px 20px 20px 3px;
`;

function Bubble({ data }: { data: ChatMessage }) {
  // content의 타입에 따라 다르게 보여주기
  return (
    <SContainer>
      {data.type === "TEXT" ? (
        <STextContainer>
          <div className="text">{data.message}</div>
        </STextContainer>
      ) : null}
      {data.type === "IMAGE" ? <Image src={data.message} /> : null}
      {data.type === "VOD" ? (
        <SVideoContainer width="275" height="521" preload="metadata" controls>
          <source src={`media/${data.message}`} />
        </SVideoContainer>
      ) : null}
      {data.type === "VOICE" ? (
        <audio controls src={`media/${data.message}`}></audio>
      ) : null}
    </SContainer>
  );
}

export default Bubble;
