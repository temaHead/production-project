import {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps=Omit<InputHTMLAttributes<HTMLInputElement>, 'value'|'onChange'| 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?:string|number;
  onChange?:(value:string)=>void;
  autofocus?:boolean;
  readonly?:boolean
}

export function Input({
    className, value, onChange, type = 'text', placeholder, autofocus, readonly, ...otherProps
}: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [carriagePosition, setCarriagePosition] = useState(0);

    const ref = useRef<HTMLInputElement>(null);

    const isCarriageVisible = isFocused && !readonly;

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCarriagePosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };
    const onSelect = (e:any) => {
        setCarriagePosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const mods:Mods = {
        [cls.readonly]: readonly
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])} onChange={onChangeHandler}>
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cls.carriageWrapper}>

                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCarriageVisible && (
                    <span className={cls.carriage} style={{ left: `${carriagePosition * 9}px` }} />
                )}
            </div>
        </div>
    );
}
export default memo(Input);
