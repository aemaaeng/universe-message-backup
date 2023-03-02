import styled from "styled-components";
import { BubbleType } from "../pages/Chats";

type BubbleProps = {
  data: BubbleType;
};

const SBubbleContainer = styled.div`
  background-color: var(--deepPurple);
  margin: 5px 0px;
  padding: 10px 25px 10px 17px;
  width: fit-content;
  max-width: 255px;
  border-radius: 3px 20px 20px 3px;

  .content {
    color: white;
    line-height: 1.4rem;
  }
`;

function Bubble({ data }: BubbleProps) {
  // 15자 이상은 다음 줄에 보여주기
  // content의 타입에 따라 다르게 보여주기
  return (
    <SBubbleContainer>
      <div className="content">{data.message}</div>
    </SBubbleContainer>
  );
}

export default Bubble;
