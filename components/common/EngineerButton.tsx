'use client';

import { useRouter } from 'next/navigation';
import styles from '../../styles/page.module.css';

export default function EngineerButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/engineer');
  };

  return (
    <button className={styles.floatingButton} onClick={handleClick}>
      엔지니어 교육 보러가기
    </button>
  );
}
