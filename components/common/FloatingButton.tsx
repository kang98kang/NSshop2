"use client";

import styles from "../../styles/page.module.css";

export default function FloatingButton({ url }: { url: string }) {
  return (
    <div className={styles.floatingButtonContainer}>
      <button
        className={styles.floatingButton}
        onClick={() => window.open(url, "_blank")}
      >
        교육 신청하기
      </button>
    </div>
  );
}
