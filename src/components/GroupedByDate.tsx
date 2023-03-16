import { ChatGroup } from "../util/groupByDateAndMinute";
import GroupedByMin from "./GroupedByMin";
import styled from "styled-components";

const SContainer = styled.div`
  #line {
    font-size: 0.75rem;
    margin-top: 15px;
    color: var(--gray);
    display: flex;
    align-items: center;
    flex-basis: 100%;
  }

  #line::before {
    content: "";
    flex-grow: 1;
    margin: 0px 10px;
    background: var(--gray);
    height: 0.5px;
    font-size: 0px;
    line-height: 0px;
  }

  #line::after {
    content: "";
    flex-grow: 1;
    margin: 0px 10px;
    background: var(--gray);
    height: 0.5px;
    font-size: 0px;
    line-height: 0px;
  }
`;

function GroupedByDate({ data }: { data: ChatGroup }) {
  const parsedDate = data.date.split("-");

  return (
    <SContainer>
      <div id="line">
        {`${parsedDate[0]}년 ${parsedDate[1]}월 ${parsedDate[2]}일`}
      </div>
      {data.chats.map((byMin, idx) => (
        <GroupedByMin key={idx} data={byMin} />
      ))}
    </SContainer>
  );
}

export default GroupedByDate;
