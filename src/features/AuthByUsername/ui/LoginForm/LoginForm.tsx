import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

function LoginForm({ className }: LoginFormProps) {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" className={cls.input} placeholder="Введите username" autofocus />
            <Input type="text" className={cls.input} placeholder="Введите пароль" />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
}

export default LoginForm;
