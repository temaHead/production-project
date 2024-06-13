import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLinkTheme } from '@/shared/ui/AppLink';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { HStack } from '@/shared/ui/Stack';
import cls from './Navbar.module.scss';
import { RoutePath } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [isAuthModal, setAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const onCloseModal = useCallback(() => {
        setAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Ulbi TV App')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </header>
        );
    }
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                type="button"
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </header>
    );
}

export default memo(Navbar);
