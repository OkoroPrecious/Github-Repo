import React from "react";
import { Icon } from "@iconify/react";
import styles from "./styles.module.scss";
import { NavItemProps } from "./navItem.types";

const NavItem = (props: NavItemProps) => {
  return (
    <li>
      <a
        href={props.url}
        className={`${styles.navItem} ${props.active ? styles.active : ""}`}
      >
        <div>
          <Icon icon={props.icon} />
          <p>{props.title}</p>
        </div>
      </a>
    </li>
  );
};

export default NavItem;
