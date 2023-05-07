import React, {InputHTMLAttributes} from 'react';
import styles from "./styles.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {

}

const Input = ({className, ...props}: Props) => {
  return (
    <input className={`${styles.input} ${className}`} {...props}/>
  );
};

export default Input;
