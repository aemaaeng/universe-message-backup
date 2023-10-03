import { useState } from "react";
import { useRouter } from "next/navigation";

export default function useSearch() {
  const router = useRouter();
  const [keywordInput, setKeywordInput] = useState("");
  // 공통으로 빼낼 것: 키워드, 검색 후 창 이동, 키워드 input 다루는 함수
  function handleKeywordInput(e: React.ChangeEvent<HTMLInputElement>) {
    setKeywordInput(e.target.value);
  }

  function handleEnterKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter" || e.nativeEvent.isComposing) return;
    if (keywordInput.length === 0) {
      window.alert("검색어를 입력해주세요.");
      return;
    }
    // search 페이지로 이동
    router.push(`/search?keyword=${encodeURIComponent(keywordInput)}`);
  }

  return {
    keywordInput,
    handleKeywordInput,
    handleEnterKeyPress,
  };
}
