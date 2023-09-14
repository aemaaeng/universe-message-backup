import Image from "next/image";
import styles from "./Bubble.module.css";

export type ChatMessage = {
  nickname: string;
  type: "TEXT" | "IMAGE" | "VOD" | "VOICE";
  message: string;
  datetime: string;
};

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
    <li className={styles.listContainer}>
      {data.type === "TEXT" ? (
        <div className={styles.textContainer}>
          <div className={styles.text}>{data.message}</div>
        </div>
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
        <video
          className={styles.videoContainer}
          width="100%"
          height="420"
          preload="metadata"
          controls
          playsInline
        >
          <source src={`/media/${data.message}#t=0.1`} />
          Your browser does not support the video tag.
        </video>
      ) : null}
      {data.type === "VOICE" ? (
        <audio src={`/media/${data.message}`} controls></audio>
      ) : null}
      {isLastBubble ? (
        <span className={styles.minute}>{data.datetime.slice(11, 16)}</span>
      ) : null}
    </li>
  );
}

export default Bubble;
