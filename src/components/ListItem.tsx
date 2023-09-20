import styles from "./ListItem.module.css";
import Link from "next/link";
import Image from "next/image";
import { Item } from "@/pages/api/list";
import highlightKeyword from "@/utils/highlightKeyword";

type Media = Omit<Item, "date">;

function ListItem({
  content,
  id,
  media,
  message,
  keyword,
}: {
  content: string;
  id: number;
  media: Media;
  message: string | undefined;
  keyword: string;
}) {
  const { IMAGE, VOD, VOICE } = media;

  return (
    <li className={styles.itemContainer} key={id}>
      <div className={styles.dateContainer}>
        <Link className={styles.link} href={`chat/${content}`}>
          {content}
        </Link>
        <div className={styles.iconGroup}>
          {IMAGE ? (
            <Image
              src="/icon/picIcon.svg"
              width="20"
              height="18"
              alt="picIcon"
            />
          ) : null}
          {VOD ? (
            <Image
              src="icon/videoIcon.svg"
              width="24"
              height="23"
              alt="videoIcon"
            />
          ) : null}
          {VOICE ? (
            <Image
              src="icon/voiceIcon.svg"
              width="20"
              height="18"
              alt="voiceIcon"
            />
          ) : null}
        </div>
      </div>
      {message ? (
        <div className={styles.message}>
          {highlightKeyword(message, keyword)}
        </div>
      ) : null}
    </li>
  );
}

export default ListItem;
