"use client";

import styles from "./FilterButton.module.css";

function FilterButton({
  label,
  state,
  onClick,
}: {
  label: string;
  state: boolean;
  onClick: () => void;
}) {
  const isSelected = state ? "selected" : "default";

  return (
    <button onClick={onClick} className={styles[isSelected]}>
      {label}
    </button>
  );
}

export default FilterButton;
