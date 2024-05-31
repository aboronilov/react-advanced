import { FC } from "react";

import styles from "./ThemeToggler.module.scss";
import { Themes, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import Button, { ThemeButton } from "../Button/Button";

interface ThemeTogglerProps {
  className?: string;
}

export const ThemeToggler: FC<ThemeTogglerProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      className={classNames(styles.ThemeToggler, {}, [className])}
      theme={ThemeButton.CLEAR}
    >
      {theme === Themes.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
