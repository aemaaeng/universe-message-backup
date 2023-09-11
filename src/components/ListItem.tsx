"use client";

import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import picIcon from "@/icons/picIcon.svg";
import videoIcon from "@/icons/videoIcon.svg";
import voiceIcon from "@/icons/voiceIcon.svg";
import { Item } from "@/pages/api/list";

type Media = Omit<Item, "date">;

const SDate = styled.li`
  display: flex;
  background-color: white;
  gap: 10px;
  font-weight: 600;
  font-size: 1.3rem;
  padding: 30px 20px;
  margin: 10px;
  border-radius: 5px;
`;

const SIconGroup = styled.div`
  display: flex;
  align-items: center;
`;

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
    <SDate key={id}>
      <Link href={`chats/${content}`}>{content}</Link>
      <SIconGroup>
        {IMAGE ? (
          <Image src={picIcon} width="20" height="18" alt="picIcon" />
        ) : null}
        {VOD ? (
          <Image src={videoIcon} width="24" height="23" alt="videoIcon" />
        ) : null}
        {VOICE ? (
          <Image src={voiceIcon} width="20" height="18" alt="voiceIcon" />
        ) : null}
      </SIconGroup>
    </SDate>
  );
}

export default ListItem;
