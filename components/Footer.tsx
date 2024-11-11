import styles from "@/styles/page.module.css";

interface FooterProps {
  children?: React.ReactNode;
}

export default function Footer({ children }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {children || (
          <>
            <h2 className={styles.h2}>
              📕<strong>교육문의</strong>
            </h2>
            <hr className={styles.hr} />

            <h3 className={styles.h3}>
              <strong>몬스테라텍</strong>
            </h3>
            <p className={styles.p}>
              <mark className={styles.highlightgray}>
                담당자 : lessingohoi@monsteraedu.co.kr
              </mark>
            </p>

            <p className={styles.p}>
              <strong>🏠 (06045) 서울특별시 강남구 학동로161 4층, 406호</strong>
            </p>

            <p className={styles.p}>
              <strong>☎️ 010-9936-3490</strong>
            </p>

            <p className={styles.p}>
              <strong>© MONSTERA. ALL RIGHTS RESERVED.</strong>
            </p>
          </>
        )}
      </div>
    </footer>
  );
}
