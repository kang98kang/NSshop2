'use client';

import { useRouter } from 'next/navigation';
import styles from '../../styles/page.module.css';

export default function ArtistButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/artist');
  };

  return (
    <button className={styles.floatingButton} onClick={handleClick}>
      아티스트 교육 보러가기
    </button>
  );
}
