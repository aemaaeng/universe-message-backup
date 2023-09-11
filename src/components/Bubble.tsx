"use client";
import styled from "styled-components";
import Image from "next/image";

export type ChatMessage = {
  nickname: string;
  type: "TEXT" | "IMAGE" | "VOD" | "VOICE";
  message: string;
  datetime: string;
};

const SContainer = styled.li`
  margin: 5px 0px;
  display: flex;
  align-items: flex-end;
  gap: 7px;
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
  border-radius: 3px 20px 20px 3px;
  max-width: 300px;
`;

const SMinute = styled.span`
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
  const isLastBubble = idx === length - 1 ? "lastBubble" : "";

  // content의 타입에 따라 다르게 보여주기
  return (
    <SContainer>
      {data.type === "TEXT" ? (
        <STextContainer>
          <div className="text">{data.message}</div>
        </STextContainer>
      ) : null}
      {data.type === "IMAGE" ? (
        <Image
          src={`/media/${data.message}`}
          alt={`${data.message}`}
          width={0}
          height={0}
          sizes="65vw"
          style={{ height: "auto" }}
        />
      ) : null}
      {data.type === "VOD" ? (
        <SVideoContainer
          width="100%"
          height="420"
          preload="metadata"
          controls
          playsInline
        >
          <source src={`media/${data.message}#t=0.1`} />
          Your browser does not support the video tag.
        </SVideoContainer>
      ) : null}
      {data.type === "VOICE" ? (
        <audio src={`media/${data.message}`} controls></audio>
      ) : null}
      {isLastBubble ? <SMinute>{data.datetime.slice(11, 16)}</SMinute> : null}
    </SContainer>
  );
}

export default Bubble;
