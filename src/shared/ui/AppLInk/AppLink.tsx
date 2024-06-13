import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children: React.ReactNode;
}

export function AppLink(props: AppLinkProps) {
    const {
        className, children, theme = AppLinkTheme.PRIMARY, ...otherProps
    } = props;

    return (
        <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
}
