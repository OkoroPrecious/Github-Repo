import React from "react";
import { Icon } from "@iconify/react";
import styles from "./styles.module.scss";

type Props = {};

const SearchComponent = (props: Props) => {
  return (
    <div className={styles.search}>
      <div>
        <Icon icon="iconamoon:search" className={styles.icon} />
        <input type="text" className={styles.input} placeholder="Search or jump to..." />
        <Icon icon="solar:slash-square-linear" width={20} height={20} className={styles.slash} />
      </div>
    </div>
  );
};

export default SearchComponent;
