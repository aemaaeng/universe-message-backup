"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const SNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  margin-bottom: 20px;
  background-color: var(--lightPurple);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 8px;

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
      <h2 id="title" className={montserrat.className}>
        {title}
      </h2>
    </SNavContainer>
  );
}

export default Navbar;
