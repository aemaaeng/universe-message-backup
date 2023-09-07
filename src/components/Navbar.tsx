"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";

const SNavContainer = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--gray);
  margin-bottom: 20px;

  #title {
    color: var(--deepPurple);
  }
`;

const SBack = styled.a`
  position: absolute;
  left: 20px;
  color: var(--lightBlack);
  font-size: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

function Navbar({ title }: { title: string }) {
  const router = useRouter();

  return (
    <SNavContainer>
      <SBack onClick={() => router.back()}>&#8249;</SBack>
      <h2 id="title">{title}</h2>
    </SNavContainer>
  );
}

export default Navbar;
