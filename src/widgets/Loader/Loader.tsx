import { classNames } from 'shared/lib/classNames/className';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

function Loader({ className }: LoaderProps) {
    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
}

export default Loader;
