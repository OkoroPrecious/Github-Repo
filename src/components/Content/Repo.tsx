import React from 'react';
import styles from "./styles.module.scss";
import {IRepository} from "../../types/repository.type";
import formatDistance from "date-fns/formatDistance"

type Props = {
  data: IRepository
};
const Repo = ({data}: Props) => {
  return (
    <div className={styles.repo}>
      <div>
        <div className={styles.title}>
          <h3><a href={data.html_url} target="_blank" rel="noreferrer">{data.name}</a></h3>
          <p className={styles.status}>Public</p>
        </div>

        <div className={styles.info}>
          <div className={styles.stack}>
            <div/>
            <p>{data.language}</p>
          </div>
          <p>Updated {formatDistance(new Date(data.updated_at), Date.now(), {addSuffix: true})}</p>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Repo;