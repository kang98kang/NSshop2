import styles from "@/styles/page.module.css";

interface HighlightTextProps {
  color: "pink" | "blue" | "gray" | "default" | "purple";
  children: React.ReactNode;
}

export default function HighlightText({ color, children }: HighlightTextProps) {
  return <mark className={styles[`highlight${color}`]}>{children}</mark>;
}
