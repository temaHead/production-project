import { classNames } from "shared/lib/classNames/className";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((perv) => !perv);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>tg</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Sidebar;
