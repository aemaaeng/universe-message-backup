"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Searchbar from "@/components/Searchbar";
import useSearch from "@/hooks/useSearch";
import ListItem from "@/components/ListItem";
import { Item } from "@/pages/api/list";
import styles from "./page.module.css";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams?.get("keyword");
  const { keywordInput, handleKeywordInput, handleEnterKeyPress } = useSearch();
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/search?keyword=${keyword}`)
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false);
        setList(res.result);
      })
      .catch((err) => console.error(err));
  }, [keyword]);

  return (
    <div>
      <div id={styles.searchContainer}>
        <p id={styles.description}>
          <strong>{keyword}</strong>에 대한 검색 결과입니다.
        </p>
        <Searchbar
          value={keywordInput}
          onChange={handleKeywordInput}
          onKeyDown={handleEnterKeyPress}
        />
      </div>
      <div id={styles.buttonContainer}>
        <Link href="/chats">
          <button id={styles.goToList}>◀︎ 전체 목록으로 돌아가기</button>
        </Link>
      </div>
      <ol className="chatlist">
        {list &&
          list.map((item: Item, index: number) => {
            const { IMAGE, VOD, VOICE, message } = item;
            const media = { IMAGE, VOD, VOICE };

            return (
              <ListItem
                key={index}
                content={item.date}
                id={index}
                media={media}
                message={message}
                keyword={keyword!}
              />
            );
          })}
      </ol>
    </div>
  );
}
