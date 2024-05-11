import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';
import Text from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export function ProfilePageHeader({ className }: ProfilePageHeaderProps) {
    const { t } = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={cls.ProfilePageHeader}>
            <Text title={t('Профиль')} />

            {readonly ? (
                <Button
                    theme={ThemeButton.OUTLINE}
                    className={cls.editBtn}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </Button>
            ) : (
                <>
                    <Button
                        theme={ThemeButton.OUTLINE_RED}
                        className={cls.editBtn}
                        onClick={onCancelEdit}
                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        theme={ThemeButton.OUTLINE}
                        className={cls.saveBtn}
                        onClick={onSave}
                    >
                        {t('Сохранить')}
                    </Button>
                </>
            )}
        </div>
    );
}
