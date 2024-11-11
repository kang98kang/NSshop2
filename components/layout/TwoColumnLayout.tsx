import styles from "@/styles/page.module.css";

interface TwoColumnLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  leftWidth?: string;
  rightWidth?: string;
}

export default function TwoColumnLayout({
  leftContent,
  rightContent,
  leftWidth = "50%",
  rightWidth = "50%",
}: TwoColumnLayoutProps) {
  return (
    <div className={styles.columnList}>
      <div className={styles.column} style={{ width: leftWidth }}>
        {leftContent}
      </div>
      <div className={styles.column} style={{ width: rightWidth }}>
        {rightContent}
      </div>
    </div>
  );
}
