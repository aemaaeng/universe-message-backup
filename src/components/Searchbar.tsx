"use client";

import styles from "./Searchbar.module.css";

function Searchbar() {
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
      />
    </div>
  );
}

export default Searchbar;
