import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'widgets/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

function PageLoader({ className }: PageLoaderProps) {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
}

export default PageLoader;
