import styles from "@/styles/page.module.css";

interface ExpandableSectionProps {
  summary: React.ReactNode;
  children: React.ReactNode;
}

export default function ExpandableSection({
  summary,
  children,
}: ExpandableSectionProps) {
  return (
    <ul className={styles.toggle}>
      <li>
        <details>
          <summary>{summary}</summary>
          {children}
        </details>
      </li>
    </ul>
  );
}
