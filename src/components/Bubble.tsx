import styled from "styled-components";
import { ChatMessage } from "../util/groupByMinute";
import Image from "./Image";

const SContainer = styled.div`
  margin: 5px 0px;
  display: flex;
  align-items: flex-end;
  gap: 7px;

  .lastBubble {
    border-radius: 3px 20px 20px 20px;
  }
`;

const STextContainer = styled.div`
  background-color: var(--deepPurple);
  padding: 10px 23px 10px 17px;
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

const STime = styled.span`
  color: var(--gray);
  font-size: 0.8rem;
  margin-bottom: 3px;
`;

function Bubble({
  data,
  idx,
  length,
}: {
  data: ChatMessage;
  idx: number;
  length: number;
}) {
  const isLastBubble = idx === length - 1 ? true : false;
  const bubbleClassName = isLastBubble ? "lastBubble" : "";

  // content의 타입에 따라 다르게 보여주기
  return (
    <SContainer>
      {data.type === "TEXT" ? (
        <STextContainer className={bubbleClassName}>
          <div className="text">{data.message}</div>
        </STextContainer>
      ) : null}
      {data.type === "IMAGE" ? (
        <Image src={data.message} isLast={bubbleClassName} />
      ) : null}
      {data.type === "VOD" ? (
        <SVideoContainer
          className={bubbleClassName}
          width="275"
          height="475"
          preload="metadata"
          controls
        >
          <source src={`media/${data.message}`} />
        </SVideoContainer>
      ) : null}
      {data.type === "VOICE" ? (
        <audio
          className={bubbleClassName}
          src={`media/${data.message}`}
          controls
        ></audio>
      ) : null}
      {isLastBubble ? <STime>{data.datetime.slice(11, 16)}</STime> : null}
    </SContainer>
  );
}

export default Bubble;
