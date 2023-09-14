import styles from "./GroupedByMin.module.css";
import Bubble from "./Bubble";
import Image from "next/image";
import { ChatMessage } from "./Bubble";

function GroupedByMin({ data }: { data: ChatMessage[] }) {
  return (
    <div className={styles.groupContainer}>
      <picture className={styles.profileImg}>
        <Image
          src="/media/profileImg.jpeg"
          width="40"
          height="40"
          alt="profileImg"
        />
      </picture>
      <ul className={styles.bubbleContainer}>
        <div className={styles.profileName}>기현</div>
        {data.map((el, idx) => {
          return <Bubble key={idx} data={el} idx={idx} length={data.length} />;
        })}
      </ul>
    </div>
  );
}

export default GroupedByMin;
