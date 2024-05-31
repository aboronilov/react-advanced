import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme: ThemeButton;
}

const Button: FC<ButtonProps> = (ButtonProps) => {
  const { className, children, theme, ...restProps } = ButtonProps;
  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
