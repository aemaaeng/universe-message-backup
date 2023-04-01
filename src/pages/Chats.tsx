import styled from "styled-components";
import groupByMinute, { ChatMessage } from "../util/groupByMinute";
import React, { useEffect, useState } from "react";
import useIntersect from "../hooks/useIntersect";
import GroupedByMin from "../components/GroupedByMin";
import DateDivider from "../components/DateDivider";

const SChatContainer = styled.div`
  overflow: hidden;
  margin: 0px;
  margin-bottom: 50px;
`;

function Chats() {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const LIMIT = 40;

  const [data, setData] = useState<ChatMessage[][]>([]);
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
        setData(Object.values(groupByMinute(res.slice(0, 120))));
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
        // setData(~~)
        // setTotal()
      });
  }

  return (
    <SChatContainer>
      {data.map((el, idx, arr) => {
        // index가 1 이상이고, arr.length를 초과하지 않아야 함.
        let isDifferentDate;
        if (idx >= 1 && idx < arr.length) {
          isDifferentDate =
            el[0].datetime.slice(0, 10) !==
            arr[idx - 1][0].datetime.slice(0, 10)
              ? true
              : false;
        }

        return (
          <React.Fragment key={idx}>
            {isDifferentDate || idx === 0 ? (
              <DateDivider date={el[0].datetime.slice(0, 10)} />
            ) : null}
            <GroupedByMin data={el} />
          </React.Fragment>
        );
      })}
      {/* <div ref={ref}></div> */}
    </SChatContainer>
  );
}

export default Chats;
