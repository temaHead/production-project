import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from 'entites/Country/model/types/country';
import { memo, useCallback } from 'react';
import cls from './CurrencySelect.module.scss';

interface CountrySelectProps {
  className?: string;
  value?:Country;
  onChange?:(value:Country)=>void;
  readonly?:boolean
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
];

function CountrySelect({ className, value, onChange, readonly }: CountrySelectProps) {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
}

export default memo(CountrySelect);
