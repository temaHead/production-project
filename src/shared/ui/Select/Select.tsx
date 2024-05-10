import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value:string;
    content:string;
}

interface SelectProps {
  className?: string;
  label?:string;
  options?:SelectOption[];
  value?:string;
  readonly?:boolean;
  onChange?:(value:string)=>void;
}

export function Select({ className, label, options, value, readonly, onChange }: SelectProps) {
    const mods:Mods = {};

    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && (
                <span className={cls.label}>{`${label}>`}</span>
            )}
            <select
                className={cls.selector}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
}
