import React from 'react';
import Input from "../Input";
import Button from "../Button";
import styles from "./styles.module.scss";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};
const Filter = (props: Props) => {
  return (
    <div className={styles.filter}>
      <Input placeholder="Find a repository..." value={props.search} onChange={(e) => {
        props.setSearch(e.target.value);
      }}/>
      <Button>Type</Button>
      <Button>Language</Button>
      <Button>Sort</Button>
      <Button primary>New</Button>
    </div>
  );
};

export default Filter;