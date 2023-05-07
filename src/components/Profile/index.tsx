import React, {useState} from 'react';
import styles from "./styles.module.scss";
import Info from "./Info";
import EditForm from "./EditForm";
import {useAppSelector} from "../../redux/hooks";

type Props = {};
const Profile = (props: Props) => {
  const [active, setActive] = useState<"info" | "form">("info");
  const {user} = useAppSelector(state => state.user);

  return (
    <div className={styles.profile}>
      <div className={styles.profileImage}>
        <img src={user?.avatar_url} alt=""/>
      </div>
      {
        active === "info" ?
          <Info setActive={() => setActive("form")}/> :
          <EditForm setActive={() => setActive("info")}/>
      }
    </div>
  );
};

export default Profile;
