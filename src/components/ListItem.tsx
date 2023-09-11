"use client";

import Link from "next/link";
import styled from "styled-components";

const SDate = styled.li`
  background-color: white;
  /* color: var(--deepPurple); */
  font-weight: 500;
  /* text-align: center; */
  font-size: 1.3rem;
  padding: 30px 20px;
  margin: 10px;
  border-radius: 5px;
`;

function ListItem({ content, id }: { content: string; id: number }) {
  return (
    <SDate key={id}>
      <Link href={`chats/${content}`}>{content}</Link>
    </SDate>
  );
}

export default ListItem;
