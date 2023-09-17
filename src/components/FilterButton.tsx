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
  const handleToggleClick = () => {
    onClick();
  };
  const isSelected = state ? "selected" : "default";

  return (
    <button onClick={handleToggleClick} className={styles[isSelected]}>
      {label}
    </button>
  );
}

export default FilterButton;
