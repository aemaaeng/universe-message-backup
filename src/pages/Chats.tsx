import styled from "styled-components";
import groupChatsByDateAndMinute, {
  ChatGroup,
} from "../util/groupByDateAndMinute";
import GroupedByDate from "../components/GroupedByDate";
import { useEffect, useState } from "react";
import useIntersect from "../hooks/useIntersect";

const SChatContainer = styled.div`
  overflow: hidden;
  margin: 0px;
  margin-bottom: 50px;
`;

function Chats() {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const LIMIT = 40;

  const [data, setData] = useState<ChatGroup[]>([]);
  const ref = useIntersect(() => {
    setPage(page + 1);
    getNextData(page, LIMIT);
  });

  useEffect(() => {
    fetch("data/data.json", {
      headers: {
        Accept: "application / json",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setData(groupChatsByDateAndMinute(res.slice(0, 40)));
      });
  }, []);

  // TODO: 다음 페이지가 존재하는지 리턴하는 함수 (불리언)
  function hasNextPage(): boolean {
    return true;
  }

  function getNextData(skip: number, take: number) {
    console.log("함수 호출됐어요!!");
    fetch("data/data.json", {
      headers: {
        Accept: "application / json",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(skip * take, take * page);
        // console.log(res.slice(skip * take, take * (page + 1)));
        // console.log(data);
        setData(
          data.concat(
            groupChatsByDateAndMinute([
              ...res.slice(skip * take, take * (page + 1)),
            ])
          )
        );
        // setTotal()
      });
  }

  return (
    <SChatContainer>
      {data.map((el, idx) => {
        return <GroupedByDate key={idx} data={el} />;
      })}
      <div ref={ref}></div>
    </SChatContainer>
  );
}

export default Chats;
