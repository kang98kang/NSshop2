import ArtistButton from '@/components/common/ArtistButton';
import EngineerButton from '@/components/common/EngineerButton';
import ChatFloatingButton from '@/components/common/ChatFloatingButton';
import styles from '../styles/mainpage.module.css';

export default function Home() {
  return (
    <div className={styles.pageBody}>
      <figure
        className={styles.image}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <img
          style={{
            width: '45%',
            display: 'block',
            borderRadius: '0px',
            minWidth: '300px',
            border: '0.5px solid black',
          }}
          src="/main/images/Unreal engine.jpg"
        />
        <img
          style={{ width: '45%', display: 'block', borderRadius: '0px', minWidth: '300px' }}
          src="/main/images/Unreal engine2.jpg"
        />
      </figure>
      <div className={styles.floatingButtonContainer}>
        <ArtistButton />
        <EngineerButton />
      </div>
      <ChatFloatingButton url="http://pf.kakao.com/_cpxopG/chat" icon="💬" className={styles.chattingButton} />
    </div>
  );
}
