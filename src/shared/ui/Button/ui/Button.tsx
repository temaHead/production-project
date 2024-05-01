import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

function Button(props: ButtonProps) {
    const {
        className, children, theme, ...outherProps
    } = props;
    return (
        <button type="button" className={classNames(cls.Button, {}, [className, cls[theme]])} {...outherProps}>
            {children}
        </button>
    );
}

export default Button;
