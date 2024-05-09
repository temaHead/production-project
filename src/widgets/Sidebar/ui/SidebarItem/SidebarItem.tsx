import AppLink, { AppLinkTheme } from 'shared/ui/AppLInk/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item?:SidebarItemType;
    collapsed?:boolean
}

export function SidebarItem({ item, collapsed }: SidebarItemProps) {
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
