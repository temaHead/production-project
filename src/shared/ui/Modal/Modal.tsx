import { ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';
import Portal from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ModalProps {
  className?: string;
  children?:ReactNode;
  isOpen?:boolean;
  onClose?:()=>void;
  lazy?:boolean
}

const ANIMATION_DELAY = 300;

function Modal(props: ModalProps) {
    const {
        className, children, isOpen, onClose, lazy,
    } = props;

    const { theme } = useTheme();
    const { close, isClosing, isMounted, } = useModal({ animationDelay: ANIMATION_DELAY, onClose, isOpen });

    const mods:Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
}

export default Modal;
