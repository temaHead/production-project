import { classNames } from 'shared/lib/classNames/classNames';
import {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps=Omit<InputHTMLAttributes<HTMLInputElement>, 'value'|'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?:string;
  onChange?:(value:string)=>void;
  autofocus?:boolean;
}

export function Input({
    className, value, onChange, type = 'text', placeholder, autofocus, ...otherProps
}: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [carriagePosition, setCarriagePosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

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
                    {...otherProps}
                />
                {isFocused && (
                    <span className={cls.carriage} style={{ left: `${carriagePosition * 9}px` }} />
                )}
            </div>
        </div>
    );
}
export default memo(Input);
