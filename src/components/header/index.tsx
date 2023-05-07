import React from "react";
import { Icon } from "@iconify/react";
import styles from "./styles.module.scss";
import SearchComponent from "./SearchComponent";
import { useAppSelector } from "../../redux/hooks";

type Props = {};

const Header = (props: Props) => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <header className={styles.header}>
      <nav>
        <div>
          <ul>
            <li>
              <a href="">
                <Icon width={32} height={32} icon="mdi:github" />
              </a>
            </li>
            <li>
              <SearchComponent />
            </li>
            <li>
              <a href="">Pull requests</a>
            </li>
            <li>
              <a href="">Issues</a>
            </li>
            <li>
              <a href="">Codespaces</a>
            </li>
            <li>
              <a href="">Marketplace</a>
            </li>
            <li>
              <a href="">Explore</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <a href="">
                <Icon width={18} height={18} icon="fa-regular:bell" />
              </a>
            </li>
            <li>
              <a href="">
                <Icon width={18} height={18} icon="ic:baseline-plus" />
                <Icon
                  width={18}
                  height={18}
                  margin-left="40px"
                  icon="ri:arrow-drop-down-fill"
                />
              </a>
            </li>

           

            <li>
              <a href="">
                <img src={user?.avatar_url} className={styles.avatar} alt="" />
                <Icon
                  width={18}
                  height={18}
                  margin-left="40px"
                  icon="ri:arrow-drop-down-fill"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
