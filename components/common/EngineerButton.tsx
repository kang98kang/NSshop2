'use client';

import { useRouter } from 'next/navigation';
import styles from '../../styles/page.module.css';

export default function EngineerButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('https://forms.gle/APdwS3gWwqDuLJQV9');
  };

  return (
    <button className={styles.floatingButton} onClick={handleClick}>
      프로그래밍 과정 신청하기
    </button>
  );
}
