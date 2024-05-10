import AppLink, { AppLinkTheme } from 'shared/ui/AppLInk/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { getUserAuthData } from 'entites/User';
import { useSelector } from 'react-redux';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item:SidebarItemType;
    collapsed?:boolean
}

export function SidebarItem({ item, collapsed }: SidebarItemProps) {
    const isAuth = useSelector(getUserAuthData);
    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{item.text}</span>
        </AppLink>
    );
}
