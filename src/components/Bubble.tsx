import styled from "styled-components";
import { BubbleType } from "../pages/Chats";
import Image from "./Image";

type BubbleProps = {
  data: BubbleType;
};

const SBubbleContainer = styled.div`
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

function Bubble({ data }: BubbleProps) {
  // content의 타입에 따라 다르게 보여주기
  return (
    <>
      {data.type === "TEXT" ? (
        <SBubbleContainer>
          <div className="text">{data.message}</div>
        </SBubbleContainer>
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
    </>
  );
}

export default Bubble;
