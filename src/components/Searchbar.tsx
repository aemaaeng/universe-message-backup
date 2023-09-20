"use client";

import styles from "./Searchbar.module.css";

function Searchbar({
  value,
  onChange,
  onKeyUp,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={styles.searchBarContainer}>
      <label htmlFor="searchInput">Search</label>
      <input
        type="text"
        name="searchInput"
        placeholder="검색어를 입력하세요"
        id="searchInput"
        className={styles.searchInput}
        autoComplete="off"
        onChange={onChange}
        value={value}
        onKeyUp={onKeyUp}
      />
    </div>
  );
}

export default Searchbar;
