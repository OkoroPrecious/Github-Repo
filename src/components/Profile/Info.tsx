import React from 'react';
import styles from "./styles.module.scss";
import Button from "../Button";
import {Icon} from "@iconify/react";
import {useAppSelector} from "../../redux/hooks";

type Props = {
  setActive: () => void;
};
const Info = (props: Props) => {
  const {user} = useAppSelector(state => state.user);

  return (
    <div>
      <h3 className={styles.name}>{user?.name}</h3>
      <p className={styles.username}>{user?.login}</p>
      <p className={styles.about}>
        {user?.bio}
      </p>

      <Button onClick={props.setActive} className={styles.editButton}>Edit profile</Button>

      <p className={styles.follow}>{user?.followers} followers &middot; {user?.following} following</p>

      <div className={styles.socials}>
        <p><Icon icon="iconamoon:location-pin"/> {user?.location}</p>
        <p><Icon icon="mdi:twitter"/> @{user?.twitter_username}</p>
        {/*<p><Icon icon="mdi:instagram"/> @precious</p>*/}
        {/*<p><Icon icon="ri:facebook-box-fill"/> @precious</p>*/}
        {/*<p><Icon icon="uil:linkedin"/> @precious</p>*/}
      </div>
    </div>
  );
};

export default Info;