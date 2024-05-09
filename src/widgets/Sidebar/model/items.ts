import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import ProfileIcon from 'shared/assets/icons/account.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}
export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
    },
];
