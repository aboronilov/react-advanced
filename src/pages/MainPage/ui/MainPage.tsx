import { useTranslation } from "react-i18next";

type Props = {};

const MainPage = (props: Props) => {
  const { t } = useTranslation();
  return <div>{t("Главная страница")}</div>;
};

export default MainPage;
