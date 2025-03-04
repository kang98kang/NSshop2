'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FloatingButton from '@/components/common/FloatingButton';
import ChatFloatingButton from '@/components/common/ChatFloatingButton';
import styles from '../styles/mainpage.module.css';

export default function Home() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setActiveImage(0);
    }
  }, []);

  const handleImageClick = (index: number) => {
    setActiveImage(activeImage === index ? null : index);
    if (index === 0) {
      router.push('/artist');
    } else if (index === 1) {
      router.push('/engineer');
    }
  };

  return (
    <div className={styles.pageBody}>
      <figure style={{ marginTop: '2rem' }} className={styles.image}>
        {/* 첫 번째 이미지 */}
        <div
          className={`${styles.imageWrapper} ${activeImage === 0 ? styles.active : ''}`}
          onClick={() => handleImageClick(0)}
        >
          <img className={styles.hoverEffect} src="/main/images/unrealengine_artist_main.jpg" />
          <div className={styles.overlayText}>아티스트 과정 보러가기</div>
        </div>

        {/* 두 번째 이미지 */}
        <div
          className={`${styles.imageWrapper} ${activeImage === 0 ? styles.active : ''}`}
          onClick={() => handleImageClick(1)}
        >
          <img className={styles.hoverEffect} src="/main/images/unrealengine_programming_main.jpg" />
          <div className={styles.overlayText}>엔지니어 과정 보러가기</div>
        </div>
      </figure>
      <div className={styles.floatingButtonContainer}>
        <FloatingButton url="https://forms.gle/LWddcyhtRY1Gnp3KA" />
      </div>
      <ChatFloatingButton url="http://pf.kakao.com/_cpxopG/chat" icon="💬" className={styles.chattingButton} />
    </div>
  );
}
