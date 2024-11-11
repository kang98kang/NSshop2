import styles from "@/styles/page.module.css";

interface InfoBoxProps {
  icon: string;
  title?: string;
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function InfoBox({
  icon,
  title,
  children,
  backgroundColor = "default",
}: InfoBoxProps) {
  return (
    <figure
      className={`${styles[`blockColor${backgroundColor}`]} ${styles.callout}`}
      style={{ whiteSpace: "pre-wrap", display: "flex" }}
    >
      <div style={{ fontSize: "1.5em" }}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <div style={{ width: "100%" }}>
        {title && (
          <strong>
            {title}
            <br />
          </strong>
        )}
        {children}
      </div>
    </figure>
  );
}
