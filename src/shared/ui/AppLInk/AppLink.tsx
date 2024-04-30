import React from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children: React.ReactNode;
}

function AppLink(props: AppLinkProps) {
    const {
        className, children, theme = AppLinkTheme.PRIMARY, ...otherProps
    } = props;

    return (
        <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
}

export default AppLink;
