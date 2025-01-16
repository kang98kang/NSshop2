import ArtistButton from '@/components/common/ArtistButton';
import EngineerButton from '@/components/common/EngineerButton';
import ChatFloatingButton from '@/components/common/ChatFloatingButton';
import styles from '../styles/page.module.css';

export default function Home() {
  return (
    <article className={styles.page}>
      <header>
        <h1 className={styles.pageTitle}></h1>
        <p className={styles.pageDescription}></p>
      </header>
      <div className={styles.pageBody}>
        <h1 style={{ fontSize: '40px', backgroundColor: 'black', color: 'white' }}>메인페이지 테스트 입니다.</h1>
        <img style={{ width: '110rem' }} src="/main/images/thumbnail.png" />
        <div className={styles.floatingButtonContainer}>
          <ArtistButton />
          <EngineerButton />
        </div>
        <ChatFloatingButton url="http://pf.kakao.com/_cpxopG/chat" icon="💬" className={styles.chattingButton} />
      </div>
    </article>
  );
}
