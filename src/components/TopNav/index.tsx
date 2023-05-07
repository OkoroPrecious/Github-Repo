import React, {useState} from "react";
import Container from "../container";
import styles from "./styles.module.scss";
import NavItem from "./navItem";
import navItems from "./items";
import Sticky from "react-stickynode"
import {useAppSelector} from "../../redux/hooks";

type Props = {};

const TopNav = (props: Props) => {
  const [active, setActive] = useState(false);
  const {user} = useAppSelector(state => state.user);

  return (
    <Sticky top={-30} onStateChange={(status) => {
      setActive(status.status === Sticky.STATUS_FIXED)
    }}>
      <div className={styles.topNav}>
        <Container>
          <div className={styles.wrapper}>
            <div>
              {
                active && (
                  <div className={styles.profile}>
                    <div>
                      <img src={user?.avatar_url} alt=""/>
                    </div>
                    <p>{user?.login}</p>
                  </div>
                )
              }
            </div>
            <div>
              <ul>
                {navItems.map((navItem, index) => (
                  <NavItem key={index} {...navItem} />
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </Sticky>
  );
};

export default TopNav;
