import { classNames } from 'shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';
import { Button } from 'widgets/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

function PageError({ className }: PageErrorProps) {
    const { t } = useTranslation();
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
}

export default PageError;
