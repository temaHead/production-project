import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Counter } from '@/entities/Counter';
import { Input } from '@/shared/ui/Input/Input';

function MainPage() {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const onChange = (val:string) => {
        setValue(val);
    };

    return (
        <div>
            <BugButton />
            {t('Главная страница')}
            <Counter />
            <Input onChange={onChange} value={value} placeholder="Введите текст" />
        </div>
    );
}

export default MainPage;
