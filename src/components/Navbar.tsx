"use client";

import styled from "styled-components";

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

function Navbar({ title }: { title: string }) {
  return (
    <SNavContainer>
      <h2 id="title">{title}</h2>
    </SNavContainer>
  );
}

export default Navbar;
