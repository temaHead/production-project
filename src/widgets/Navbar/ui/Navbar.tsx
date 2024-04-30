import { classNames } from 'shared/lib/classNames/className';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLInk/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                    main
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    about
                </AppLink>
            </div>
        </div>
    );
}

export default Navbar;
