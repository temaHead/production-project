import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
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
  size?: ButtonSize;
  disabled?: boolean;
}

function Button(props: ButtonProps) {
    const {
        className, children, theme = ThemeButton.OUTLINE, square, size = ButtonSize.M, disabled, ...outherProps
    } = props;

    const mods:Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
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
