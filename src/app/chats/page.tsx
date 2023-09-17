"use client";

import { useEffect, useState } from "react";
import ListItem from "@/components/ListItem";
import { Item } from "@/pages/api/list";
import styles from "./page.module.css";
import FilterButton from "@/components/FilterButton";
import Loading from "@/components/Loading";

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

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/api/list")
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false);
        setList(res);
        setOriginalList(res);
      })
      .catch((err) => console.error(err));
  }, []);

  function filterData(arr: Item[], type: string) {
    return arr.filter((el) => el[type] === true);
  }

  function handleFilterButtonClick(type: string) {
    if (type === "all") {
      setFilterStates({
        all: true,
        IMAGE: false,
        VOD: false,
        VOICE: false,
      });
      setList(originalList);
    } else {
      setFilterStates((prev) => {
        return {
          ...prev,
          [type]: !prev[type],
        };
      });

      const filterEnabled: boolean = [
        filterStates.IMAGE,
        filterStates.VOD,
        filterStates.VOICE,
      ].some((isSelected) => isSelected === true);

      if (!filterEnabled) {
        setFilterStates((prev) => {
          return { ...prev, all: false };
        });
      }

      const filtered = filterData(list, type);
      setList(filtered);
    }
  }

  return (
    <>
      <div className={styles.buttonContainer}>
        <FilterButton
          label="전체"
          state={filterStates.all}
          onClick={() => handleFilterButtonClick("all")}
        />
        <span className={styles.text}>포함: </span>
        <div className={styles.optionContainer}>
          <FilterButton
            label="사진"
            state={filterStates.IMAGE}
            onClick={() => handleFilterButtonClick("IMAGE")}
          />
          <FilterButton
            label="동영상"
            state={filterStates.VOD}
            onClick={() => handleFilterButtonClick("VOD")}
          />
          <FilterButton
            label="음성"
            state={filterStates.VOICE}
            onClick={() => handleFilterButtonClick("VOICE")}
          />
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <ol id="chatlist">
          {list.map((item: Item, index: number) => {
            const { IMAGE, VOD, VOICE } = item;
            const media = { IMAGE, VOD, VOICE };

            return (
              <ListItem
                key={index}
                content={item.date}
                id={index}
                media={media}
              />
            );
          })}
        </ol>
      )}
    </>
  );
}
