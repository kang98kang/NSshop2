import ArtistButton from '@/components/common/ArtistButton';
import EngineerButton from '@/components/common/EngineerButton';
import ChatFloatingButton from '@/components/common/ChatFloatingButton';
import styles from '../styles/mainpage.module.css';

export default function Home() {
  return (
    <div className={styles.pageBody}>
      <div className={styles.imgContainer}>
        <img className={styles.thumbnail} src="/main/images/thumbnail.png" />
        <img className={styles.rainbowCat} src="/main/images/rainbowcat.gif" />
      </div>
      <div className={styles.floatingButtonContainer}>
        <ArtistButton />
        <EngineerButton />
      </div>
      <ChatFloatingButton url="http://pf.kakao.com/_cpxopG/chat" icon="💬" className={styles.chattingButton} />
    </div>
  );
}
