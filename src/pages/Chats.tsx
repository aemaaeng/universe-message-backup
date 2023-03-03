import { useEffect, useState } from "react";
import getData from "../util/api";
import styled from "styled-components";
import Bubble from "../components/Bubble";

export type BubbleType = {
  nickname: string;
  type: string;
  message: string;
  datetime: string;
};

const SChatContainer = styled.div`
  overflow: auto;
  padding-left: 21px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

function Chats() {
  const [data, setData] = useState<BubbleType[]>([]);

  useEffect(() => {
    getData().then((res) => {
      const sliced = res.slice(-20);
      setData(sliced);
    });
    // window.scrollTo({ top: 396, left: 0, behavior: "smooth" });
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "auto";
    }
  }, []);

  return (
    <SChatContainer>
      {data.map((el, idx) => (
        <Bubble key={idx} data={el} />
      ))}
    </SChatContainer>
  );
}

export default Chats;
