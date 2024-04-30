import { classNames } from 'shared/lib/classNames/className';
import { Theme, useTheme } from 'app/providers';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'widgets/Button';

interface ThemeSwitcherProps {
  className?: string;
}

function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, togleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={togleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
}

export default ThemeSwitcher;
