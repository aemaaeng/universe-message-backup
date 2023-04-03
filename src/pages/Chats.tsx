import groupByMinute, { ChatMessage } from "../util/groupByMinute";
import React, { useEffect, useState, useRef } from "react";
import useIntersect from "../hooks/useIntersect";
import GroupedByMin from "../components/GroupedByMin";
import DateDivider from "../components/DateDivider";
import { Virtuoso } from "react-virtuoso";

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
        setData(Object.values(groupByMinute(res)));
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
    <Virtuoso
      style={{
        height: "calc(100vh - 50px)",
        margin: "0px",
      }}
      data={data}
      context={data}
      itemContent={(idx, el, arr) => {
        let isDifferentDate;
        if (idx >= 1 && idx < arr.length) {
          isDifferentDate =
            el[0].datetime.slice(0, 10) !==
            arr[idx - 1][0].datetime.slice(0, 10)
              ? true
              : false;
        }
        return (
          <div key={idx} style={{ paddingBottom: "1px" }}>
            {isDifferentDate || idx === 0 ? (
              <DateDivider date={el[0].datetime.slice(0, 10)} />
            ) : null}
            <GroupedByMin data={el} />
          </div>
        );
      }}
    />
  );
}

export default Chats;
