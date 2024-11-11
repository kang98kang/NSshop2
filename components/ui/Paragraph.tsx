import styles from "@/styles/page.module.css";

interface ParagraphProps {
  children: React.ReactNode;
}

export default function Paragraph({ children }: ParagraphProps) {
  return <p className={styles.p}>{children}</p>;
}
