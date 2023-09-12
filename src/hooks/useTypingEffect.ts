import { useEffect, useState } from "react";

function useTypingEffect(completedWord: string, delay: number) {
  const [text, setText] = useState(""); // 하나씩 입력될 텍스트
  const [idx, setIdx] = useState(0); // 인덱스

  useEffect(() => {
    const typingWords = setInterval(() => {
      if (text.length === completedWord.length) return;

      setText((prevWord) => {
        let nextWord = prevWord
          ? prevWord + completedWord[idx]
          : completedWord[0];
        setIdx(idx + 1);

        return nextWord;
      });
    }, delay);

    return () => {
      clearInterval(typingWords);
    };
  });

  return text;
}

export default useTypingEffect;
