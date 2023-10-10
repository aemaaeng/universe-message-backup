import { useEffect, useState } from "react";

function useTypingEffect(wordsArr: string[], delay: number, pause: number) {
  const [arrIdx, setArrIdx] = useState(0);
  const [text, setText] = useState(""); // 하나씩 입력될 텍스트
  const [idx, setIdx] = useState(0); // 인덱스
  const [typingState, setTypingState] = useState<
    "typing" | "pausing" | "deleting"
  >("typing");

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        let targetWord = wordsArr[arrIdx]; // 현재 입력해야 하는 단어
        if (typingState === "typing") {
          // 단어 타이핑
          if (idx < targetWord.length) {
            setText((prevWord) => prevWord + targetWord[idx]);
            setIdx(idx + 1);
          } else {
            // 타이핑 완료 -> 잠깐 대기했다가 지우는 단계로 넘어간다
            setTypingState("pausing");
            setTimeout(() => {
              setTypingState("deleting");
            }, pause);
          }
        } else if (typingState === "deleting") {
          // 단어 지우기
          if (idx > 0) {
            setText((prevWord) => prevWord.slice(0, -1));
            setIdx(idx - 1);
          } else {
            // 단어를 다 지움 -> typing으로 바꾸고 다음 단어로 넘어간다
            setTypingState("typing");
            setArrIdx((prevArrIdx) =>
              prevArrIdx < wordsArr.length - 1 ? prevArrIdx + 1 : 0
            );
          }
        } else {
          // pausing 상태동안 할 작업
          // 아무것도 하지 않는다
        }
      },
      typingState === "pausing" ? pause : delay
    );

    return () => {
      clearInterval(intervalId);
    };
  });

  return text;
}

export default useTypingEffect;
