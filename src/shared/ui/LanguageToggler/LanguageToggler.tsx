import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageToggler.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import Button, { ThemeButton } from "../Button/Button";

interface LanguageTogglerProps {
  className?: string;
}

const LanguageToggler: FC<LanguageTogglerProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(styles.LanguageToggler, {}, [className])}
      onClick={toggle}
    >
      {t("Язык")}
    </Button>
  );
};

export default LanguageToggler;
