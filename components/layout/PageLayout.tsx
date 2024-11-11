import styles from "@/styles/page.module.css";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <article className={styles.page}>
      <header>
        <h1 className={styles.pageTitle}></h1>
        <p className={styles.pageDescription}></p>
      </header>
      <div className={styles.pageBody}>{children}</div>
    </article>
  );
}
