import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entites/Counter';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation();

    return (
        <div>
            <BugButton />
            {t('Главная страница')}
            <Counter />
        </div>
    );
}

export default MainPage;
