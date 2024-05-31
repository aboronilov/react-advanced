import { FC, useState } from "react";
import styles from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeToggler } from "shared/ui/ThemeToggler/ThemeToggler";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>Toggle</button>
      <div className={styles.switchers}>
        <ThemeToggler />
        {/* Language Switcher */}
      </div>
    </div>
  );
};
