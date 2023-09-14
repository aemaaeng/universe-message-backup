import styles from "./ListItem.module.css";
import Link from "next/link";
import Image from "next/image";
import { Item } from "@/pages/api/list";

type Media = Omit<Item, "date">;

function ListItem({
  content,
  id,
  media,
}: {
  content: string;
  id: number;
  media: Media;
}) {
  const { IMAGE, VOD, VOICE } = media;

  return (
    <li className={styles.date} key={id}>
      <Link className={styles.link} href={`chats/${content}`}>
        {content}
      </Link>
      <div className={styles.iconGroup}>
        {IMAGE ? (
          <Image src="/icon/picIcon.svg" width="20" height="18" alt="picIcon" />
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
    </li>
  );
}

export default ListItem;
