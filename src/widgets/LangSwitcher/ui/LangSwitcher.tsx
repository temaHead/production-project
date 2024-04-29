import { classNames } from "shared/lib/classNames/className";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "widgets/Button";

interface LangSwitcherProps {
  className?: string;
}

function LangSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();
  const togle = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={togle}
    >
      {t("Язык")}
    </Button>
  );
}

export default LangSwitcher;
