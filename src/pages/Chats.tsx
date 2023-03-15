import chatData from "../data/data.json";
import styled from "styled-components";
import groupChatsByDateAndMinute from "../util/groupByDateAndMinute";
import GroupedMsg from "../components/GroupedMsg";
import { ChatGroup } from "../util/groupByDateAndMinute";

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
  console.log(data);

  return (
    <SChatContainer>
      {/* TODO: 날짜별로 묶어서 렌더링하기 */}
      {data.map((group, idx) => (
        <GroupedMsg key={idx} data={group} />
      ))}
      <div>테스트 중</div>
    </SChatContainer>
  );
}

export default Chats;
