import React, {useMemo, useState} from 'react';
import Container from "../container";
import styles from "./styles.module.scss";
import Repo from "./Repo";
import Divider from "../Divider";
import Profile from "../Profile";
import Filter from "./Filter";
import {useAppSelector} from "../../redux/hooks";
import isEmpty from "is-empty";

type Props = {};
const Content = (props: Props) => {
  const {repos} = useAppSelector(state => state.repo);

  const [search, setSearch] = useState("");

  const data = useMemo(() => {
    if (isEmpty(search)) {
      return repos;
    } else {
      return repos.filter((r) => r.name.toLowerCase().includes(search.toLowerCase()));
    }
  }, [search, repos]);

  return (
    <Container>
      <div className={styles.wrapper}>
        <div>
          <Profile/>
        </div>
        <div>
          <Filter search={search} setSearch={setSearch}/>
          <div className={styles.repos}>
            {
              data.map((repo, index) => (
                <>
                  {index === 0 && <Divider key={`${index.toString()}-divider-o`}/>}
                  <Repo key={index} data={repo}/>
                  <Divider key={`${index.toString()}-divider`}/>
                </>
              ))
            }
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Content;
