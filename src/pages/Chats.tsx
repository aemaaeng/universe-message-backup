import { useEffect, useState } from "react";
import getData from "../util/api";
import styled from "styled-components";
import groupByMinute from "../util/groupByMinute";
import GroupedMsg from "../components/GroupedMsg";
import { ChatMessage } from "../util/groupByMinute";

const SChatContainer = styled.div`
  overflow: auto;
  padding-left: 10px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

function Chats() {
  const [data, setData] = useState<ChatMessage[][]>([]);

  useEffect(() => {
    getData().then((res) => {
      const sliced = res.slice(-20);
      setData(Object.values(groupByMinute(sliced)));
    });
    // window.scrollTo({ top: 396, left: 0, behavior: "smooth" });
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "auto";
    }
  }, []);

  // const groupedMessages = Object.values(groupByMinute(data));

  return (
    <SChatContainer>
      {data.map((group, idx) => (
        <GroupedMsg key={idx} data={group} />
      ))}
    </SChatContainer>
  );
}

export default Chats;
