import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'bakground',
  BACKGROUND_INVERTED = 'bakgroundInverted'

}

export enum ButtonSize{
  M = 'size_m',
  L='size_l',
  XL='size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: ButtonSize
}

function Button(props: ButtonProps) {
    const {
        className, children, theme, square, size = ButtonSize.M, ...outherProps
    } = props;

    const mods:Record<string, boolean> = {
        [cls.square]: square,
    };
    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            {...outherProps}
        >
            {children}
        </button>
    );
}

export default Button;
