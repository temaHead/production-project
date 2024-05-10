import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entites/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entites/Profile/model/selectors/getProfileError/getPrifileError';
import { getProfileIsLoading } from 'entites/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import Text from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export function ProfileCard({ className }: ProfileCardProps) {
    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button theme={ThemeButton.OUTLINE} className={cls.editBtn}>{t('Редактировать')}</Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.first} placeholder={t('Ваше имя')} className={cls.input} />
                <Input value={data?.lastname} placeholder={t('Ваша фамилия')} className={cls.input} />

            </div>

        </div>
    );
}
