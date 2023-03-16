import chatData from "../data/data.json";
import styled from "styled-components";
import groupChatsByDateAndMinute from "../util/groupByDateAndMinute";
import GroupedByDate from "../components/GroupedByDate";

const SChatContainer = styled.div`
  overflow: auto;
  padding-left: 10px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

function Chats() {
  const data = groupChatsByDateAndMinute(chatData);

  return (
    <SChatContainer>
      {data.map((group, idx) => (
        <GroupedByDate key={idx} data={group} />
      ))}
    </SChatContainer>
  );
}

export default Chats;
