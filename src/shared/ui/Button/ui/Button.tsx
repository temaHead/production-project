import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
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
  /**
   * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
   */
  theme?: ButtonTheme;
  /**
   * Флаг, делающий кнопку квадратной
   */
  square?: boolean;
  /**
   * Размер кнопки в соответствии с дизайн системой
   */
  size?: ButtonSize;
  /**
   * Флаг, отвечающий за работу кнопки
   */
  disabled?: boolean;
  /**
   * Содержимое кнопки
   */
  children?: ReactNode;
  /**
   * Увеличивает кнопку на всю свободную ширину
   */
  fullWidth?: boolean;
}

function Button(props: ButtonProps) {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.M,
        disabled,
        fullWidth,
        ...outherProps
    } = props;

    const mods:Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
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
