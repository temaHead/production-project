import { classNames } from "shared/lib/classNames/className";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

function Button(props: ButtonProps) {
  const { className, children, theme, ...outherProps } = props;
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...outherProps}>
      {children}
    </button>
  );
}

export default Button;
