import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

function ArticleDetailsPage({ className }: ArticleDetailsPageProps) {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            ArticleDetailsPage
        </div>
    );
}

export default memo(ArticleDetailsPage);
