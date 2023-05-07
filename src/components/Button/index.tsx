import React, {ButtonHTMLAttributes} from 'react';
import styles from "./styles.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  primary?: boolean;
}

const Button = ({children, className, primary, ...props}: Props) => {
  return (
    <button className={`${styles.button} ${primary ? styles.primary : ""} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;