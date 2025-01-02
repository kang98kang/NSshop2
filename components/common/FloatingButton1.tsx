'use client';

import styles from '../../styles/page.module.css';

export default function FloatingButton({ url }: { url: string }) {
  return (
    <button className={styles.floatingButton} onClick={() => window.open(url, '_blank')}>
      언리얼엔진 교육 신청하기
    </button>
  );
}
