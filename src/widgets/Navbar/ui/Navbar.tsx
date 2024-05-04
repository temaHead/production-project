import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useCallback, useState } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [isAuthModal, setAuthModal] = useState(false);

    const onTogleModal = useCallback(() => {
        setAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                type="button"
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onTogleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onTogleModal} />
        </div>
    );
}

export default Navbar;
