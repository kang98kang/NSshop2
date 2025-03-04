'use client';

import { useRouter } from 'next/navigation';
import styles from '../../styles/page.module.css';

export default function ArtistButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('https://forms.gle/3Rjh69PaQWcRatNw5');
  };

  return (
    <button className={styles.floatingButton} onClick={handleClick}>
      아티스트 과정 신청하기
    </button>
  );
}
