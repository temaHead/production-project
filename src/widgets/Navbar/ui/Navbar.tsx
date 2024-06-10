import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLInk/AppLink';
import { NotificationButton } from 'features/notificationButton';
import { AvatarDropdown } from 'features/avatarDropdown';
import { HStack } from 'shared/ui/Stack';
import cls from './Navbar.module.scss';

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
