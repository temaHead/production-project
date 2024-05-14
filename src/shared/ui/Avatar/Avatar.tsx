import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?:string
  size?:number;
  alt?:string
}

export function Avatar({ className, src, size, alt }: AvatarProps) {
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100
    }), [size]);

    return (
        <img src={src} alt={alt} className={classNames(cls.Avatar, {}, [className])} style={styles} />
    );
}
