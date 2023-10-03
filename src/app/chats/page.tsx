"use client";

import { useEffect, useState } from "react";
import useSearch from "@/hooks/useSearch";
import ListItem from "@/components/ListItem";
import { Item } from "@/pages/api/list";
import styles from "./page.module.css";
import FilterButton from "@/components/FilterButton";
import Loading from "@/components/Loading";
import Searchbar from "@/components/Searchbar";

const IMAGE = "IMAGE";
const VOD = "VOD";
const VOICE = "VOICE";

interface FilterStates {
  [index: string]: boolean;
  all: boolean;
  IMAGE: boolean;
  VOD: boolean;
  VOICE: boolean;
}

export default function ChatList() {
  const [list, setList] = useState<Item[]>([]);
  const [originalList, setOriginalList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterStates, setFilterStates] = useState<FilterStates>({
    all: true,
    IMAGE: false,
    VOD: false,
    VOICE: false,
  });
  const [filterChanged, setFilterChanged] = useState(false);
  const { keywordInput, handleKeywordInput, handleEnterKeyPress } = useSearch();

  const filterTypes = [
    { label: "사진", type: IMAGE },
    { label: "동영상", type: VOD },
    { label: "음성", type: VOICE },
  ];

  // fetch Initial Data
  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/list`)
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false);
        setList(res);
        setOriginalList(res);
      })
      .catch((err) => console.error(err));
  }, []);

  // 필터링 진행
  useEffect(() => {
    let arr: Item[] = originalList.slice();
    const filters = checkEnabledFilters();
    while (filters.length) {
      const type = filters.shift()!;
      arr = filterData(arr, type);
    }
    setList(arr);
  }, [filterStates]);

  // 선택된 필터 검증
  useEffect(() => {
    const filters = checkEnabledFilters();
    if (!filterStates.all && filters.length === 0) {
      setFilterStates((prev) => {
        return { ...prev, all: true };
      });
    } else if (filters.length > 0) {
      setFilterStates((prev) => {
        return { ...prev, all: false };
      });
    }
  }, [filterChanged]);

  function filterData(arr: Item[], type: string): Item[] {
    if (type === "all") return originalList;
    return arr.filter((el) => el[type] === true);
  }

  function checkEnabledFilters(): string[] {
    const arr = Object.entries(filterStates);
    const enabledFilters = arr
      .filter((el) => {
        return el[0] !== "all" && el[1] === true;
      })
      .map((el) => el[0]);
    return enabledFilters;
  }

  function handleFilterButtonClick(type: string) {
    if (type === "all") {
      setFilterStates({
        all: true,
        IMAGE: false,
        VOD: false,
        VOICE: false,
      });
    } else {
      setFilterStates((prev) => {
        return {
          ...prev,
          [type]: !prev[type],
        };
      });
      setFilterChanged(!filterChanged);
    }
  }

  return (
    <>
      <div className={styles.barContainer}>
        <div className={styles.buttonContainer}>
          <FilterButton
            label="전체"
            state={filterStates.all}
            onClick={() => handleFilterButtonClick("all")}
          />
          <span className={styles.text}>포함: </span>
          <div className={styles.optionContainer}>
            {filterTypes.map((el, idx) => (
              <FilterButton
                key={idx}
                label={el.label}
                state={filterStates[el.type]}
                onClick={() => handleFilterButtonClick(el.type)}
              />
            ))}
          </div>
        </div>
        <Searchbar
          value={keywordInput}
          onChange={handleKeywordInput}
          onKeyDown={handleEnterKeyPress}
        />
      </div>
      {keywordInput.length === 0 && isLoading ? (
        <Loading />
      ) : list.length === 0 ? (
        <div className={styles.noResults}>검색 결과가 없습니다.</div>
      ) : (
        <ol id="chatlist">
          {list.map((item: Item, index: number) => {
            const { IMAGE, VOD, VOICE, message } = item;
            const media = { IMAGE, VOD, VOICE };

            return (
              <ListItem
                key={index}
                content={item.date}
                id={index}
                media={media}
                message={message}
                keyword={keywordInput}
              />
            );
          })}
        </ol>
      )}
    </>
  );
}
