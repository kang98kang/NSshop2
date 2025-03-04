import EngineerButton from '@/components/common/EngineerButton';
import ChatFloatingButton from '@/components/common/ChatFloatingButton';
import styles from '../../styles/page.module.css';

export default function Home() {
  return (
    <article className={styles.page}>
      <header>
        <h1 className={styles.pageTitle}></h1>
        <p className={styles.pageDescription}></p>
      </header>
      <div className={styles.pageBody}>
        <h1 style={{ fontSize: '1.5rem', marginTop: '6rem' }} className={styles.h1}>
          ​취업이 막막하다면?
        </h1>
        <h1 style={{ fontSize: '1.5rem', marginTop: '3rem' }} className={styles.h1}>
          게임 개발 & 실시간 디지털 콘텐츠 기술을 배우고 <br />
          새로운 시장으로 진출하세요! &nbsp;🚀
          <br />
        </h1>
        <p style={{ marginTop: '2rem', fontSize: '1.2rem' }} className={styles.p}>
          🔥 게임 개발 전공자이지만 취업이 어렵나요?
        </p>
        <p style={{ marginTop: '1rem', fontSize: '1.2rem' }} className={styles.p}>
          🔥 비전공자로서 개발자로 전직하고 싶나요?
        </p>
        <p style={{ marginTop: '0.8rem', fontSize: '1.2rem' }} className={styles.p}>
          🔥 게임업계뿐만 아니라 XR, 버추얼 프로덕션, 실시간 콘텐츠 시장까지 취업 기회를 넓히고 싶나요?
        </p>

        <p style={{ marginTop: '3rem', fontSize: '1.6rem' }} className={styles.p}>
          <strong
            style={{
              textShadow: '0px 0px 12px rgba(255, 105, 180, 0.7)',
            }}
          >
            언리얼 엔진
          </strong>
          을 활용한{' '}
          <strong
            style={{
              textShadow: '0px 0px 12px rgb(243, 255, 16)',
            }}
          >
            멀티플레이어 게임 개발
          </strong>
          과
        </p>
        <p style={{ fontSize: '1.6rem', marginTop: '3rem' }} className={styles.p}>
          <strong
            style={{
              textShadow: '0px 0px 12px rgba(105, 218, 255, 0.7)',
            }}
          >
            실시간 디지털 콘텐츠 시스템 구축 과정
          </strong>
          으로,
        </p>
        <br />
        <p
          style={{
            fontSize: '1.6rem',
            marginBottom: '3rem',
            position: 'relative',
            display: 'inline-block',
          }}
          className={styles.p}
        >
          <strong>새로운 시장에서 경쟁력을 확보하세요!</strong>
        </p>
        <figure className={styles.image}>
          <img
            style={{ width: '880px', display: 'block', borderRadius: '0px' }}
            src="/main/images/unrealengine_programming1.png"
          />
        </figure>
        <ul style={{ marginLeft: '1rem', marginBottom: '2rem' }}>
          <li style={{ marginTop: '2rem', fontSize: '1.2rem' }} className={styles.p}>
            ✅ 멀티플레이어 게임 개발 & 서버 구축 – 실무 프로젝트 기반 학습!
          </li>
          <li style={{ marginTop: '2rem', fontSize: '1.2rem' }} className={styles.p}>
            ✅ XR 기술을 활용한 실시간 콘텐츠 제작 및 버추얼 프로덕션 시스템 운영!
          </li>
          <li style={{ marginTop: '2rem', fontSize: '1.2rem' }} className={styles.p}>
            ✅ 국내 최고 수준의 언리얼 엔진 공인 강사진 & 실무 멘토링 제공!
          </li>
          <li style={{ marginTop: '2rem', fontSize: '1.2rem' }} className={styles.p}>
            ✅ 게임업계뿐만 아니라 XR, 버추얼 프로덕션, 실시간 콘텐츠 개발자로 취업 가능!
          </li>
        </ul>

        <figure className={styles.image}>
          <img
            style={{ width: '880px', marginTop: '-1.5px', borderRadius: '0px' }}
            src="/main/images/unrealengine_programming2.png"
          />
        </figure>
        <h2
          style={{
            fontSize: '1.5rem',
            marginTop: '4rem',
            marginBottom: '1.5rem',
          }}
          className={styles.h2}
        >
          🏹
          <strong
            style={{
              marginLeft: '0.8rem',
              textDecoration: 'underline',
              textDecorationColor: 'rgb(255, 253, 105)',
              textDecorationThickness: '6px',
              textDecorationSkipInk: 'none',
            }}
          >
            이 과정이 특별한 이유
          </strong>
          <br />
        </h2>
        <p className={styles.str} style={{ marginTop: '1rem', fontSize: '1.3rem' }}>
          🎯 1. 게임 개발 & XR 시스템 구축 – 2가지 핵심 기술을 한번에!
        </p>
        <ul style={{ marginBottom: '2rem' }}>
          <li style={{ marginLeft: '2rem', fontSize: '1rem' }} className={styles.p}>
            블루프린트 & C++을 활용한 서버-클라이언트 시스템 구축
          </li>
          <li style={{ marginLeft: '2rem', fontSize: '1rem' }} className={styles.p}>
            멀티플레이어 네트워크 프로그래밍 & 실시간 XR 데이터 동기화 기술 학습
          </li>
          <li style={{ marginLeft: '2rem', fontSize: '1rem' }} className={styles.p}>
            게임 서버 개발과 XR 시스템 운영을 모두 익혀 다양한 취업 기회 확보!
          </li>
        </ul>
        <p className={styles.str} style={{ marginTop: '1rem', fontSize: '1.3rem' }}>
          🎯 2. 취업이 어려운 전공자를 위한 실무 포트폴리오 완성
        </p>
        <ul style={{ marginBottom: '2rem' }}>
          <li style={{ marginLeft: '2rem', fontSize: '1rem' }} className={styles.p}>
            단순한 이론 강의가 아니라 실제 프로젝트를 통해 게임 & XR 콘텐츠 개발 경험 제공!
          </li>
          <li style={{ marginLeft: '2rem', fontSize: '1rem' }} className={styles.p}>
            수료 후 바로 사용할 수 있는 포트폴리오 제작 & 현업 피드백 제공!
          </li>
          <li style={{ marginLeft: '2rem', fontSize: '1rem' }} className={styles.p}>
            기존 게임업계 취업이 어려웠다면, XR 콘텐츠 제작자로 확장 가능!
          </li>
        </ul>
        <p className={styles.str} style={{ marginTop: '1rem', fontSize: '1.3rem' }}>
          🎯 3. 비전공자의 개발자 전직 기회 – 기초부터 실무까지!
        </p>
        <ul style={{ marginBottom: '2rem' }}>
          <li style={{ marginLeft: '2rem', fontSize: '1rem' }} className={styles.p}>
            프로그래밍 기초부터 시작해 블루프린트 & C++까지 체계적인 학습!
          </li>
          <li style={{ marginLeft: '2rem', fontSize: '1rem' }} className={styles.p}>
            코딩 경험이 없어도 차근차근 배울 수 있도록 맞춤형 교육 진행!
          </li>
          <li style={{ marginLeft: '2rem', fontSize: '1rem' }} className={styles.p}>
            실무형 프로젝트를 통해 개발자로서의 커리어 전환 가능!
          </li>
        </ul>
        <p className={styles.str} style={{ marginTop: '1rem', fontSize: '1.3rem' }}>
          🎯 4. XR / 버추얼 프로덕션 시스템 구축으로 차세대 개발자로 성장!
        </p>
        <ul style={{ marginBottom: '6rem' }}>
          <li style={{ marginLeft: '2rem', fontSize: '1rem' }} className={styles.p}>
            XR 환경에서 카메라 트래킹, 실시간 합성(Compositing), 실시간 네트워크 동기화 기술 학습
          </li>
          <li style={{ marginLeft: '2rem', fontSize: '1rem' }} className={styles.p}>
            게임뿐만 아니라 메타버스, XR, 버추얼 프로덕션 시장까지 취업 기회 확장!
          </li>
          <li style={{ marginLeft: '2rem', fontSize: '1rem' }} className={styles.p}>
            멀티플레이어 게임 개발 경험이 버추얼 프로덕션 기술로도 적용 가능!
          </li>
        </ul>
        <figure style={{ padding: '0' }} className={styles.image}>
          <img
            style={{ width: '880px', marginTop: '-1.5px', borderRadius: '0px' }}
            src="/main/images/unrealengine_programming3.png"
          />
        </figure>
        <p style={{ marginTop: '1rem', fontSize: '1.3rem' }} className={styles.p}>
          <strong style={{ marginTop: '1rem' }}>📍 교육 기간:</strong>&nbsp;2025년 3월 24일 ~ 9월 1일
        </p>
        <p style={{ marginTop: '1rem', fontSize: '1.3rem' }} className={styles.p}>
          <strong style={{ marginTop: '1rem' }}>📍 교육 장소:</strong>&nbsp;서울 서초구 서초대로74길 33, 2층
        </p>
        <p
          style={{
            marginTop: '4rem',
            fontSize: '1.6rem',
            position: 'relative',
            display: 'inline-block',
          }}
          className={styles.p}
        >
          <strong>게임 개발</strong>
          <strong style={{ marginLeft: '1rem', marginRight: '1rem' }}>+</strong>
          <strong>XR 시스템 구축</strong>
        </p>
        <p
          style={{
            fontSize: '1.6rem',
            marginBottom: '4.5rem',
            position: 'relative',
            display: 'inline-block',
          }}
          className={styles.p}
        >
          <strong>두 가지 핵심 기술을 익혀 더 넓은 취업 기회를 잡으세요!</strong>
        </p>
        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightPink}>🤔</mark>
                <mark className={styles.highlightPink}>
                  <strong>어떻게 무료로 제공할 수 있는 걸까요?</strong>
                </mark>
              </summary>
              <p className={styles.p}>
                본 과정은 전액 무료 과정으로 고용노동부가 청년 취업희망자를 대상으로 실시하는 실무 프로젝트 중심
                K-Digital Training 교육입니다. VR/AR기술기반의 실감형콘텐츠 제작전문과 교육과 실무제작 기술을 함양하고
                산업현장에서 바로 적용할 수 있는 능력을 갖출 수 있도록 지원하고 있습니다. ICT 기업 참여 실무 프로젝트를
                통해 비전공자라도 IT전문가로 취업할 수 있으니 지금 바로 지원해보세요
              </p>
            </details>
          </li>
        </ul>
        <h1 className={styles.h1}>
          실제 산업 분야 재직자의 노하우를 그대로!
          <br />
        </h1>
        <p className={styles.p}>
          국내 게임 대기업 재직자 대상으로 게임 엔진 강의를 진행하시는 강사님부터 스마트팩토리, VR/AR 등 각종 분야의
          전문성을 가진 강사진까지! 유니티 핵심 전문가들로 강사진을 구성했습니다.
        </p>
        <hr className={styles.hr} />
        <div className={styles.columnList}>
          <div className={styles.column} style={{ width: '31.25%' }}>
            <figure className={styles.image}>
              <img style={{ width: '2449px' }} src="/academy1/images/5.png" />
            </figure>
          </div>
          <div className={styles.column} style={{ width: '68.75%' }}>
            <h2 className={styles.h2}>강○○ 강사</h2>
            <p className={styles.p}>S전자, N게임사, N소프트 등 국내 대기업 게임 엔진 출강</p>
            <p className={styles.p}>25년 경력을 가진 소프트웨어 개발 전문가</p>
          </div>
        </div>
        <hr className={styles.hr} />
        <hr className={styles.hr} />
        <div className={styles.columnList}>
          <div className={styles.column} style={{ width: '31.25%' }}>
            <figure className={styles.image}>
              <img style={{ width: '2449px' }} src="/academy1/images/7.png" alt="이ㅁㅁ 강사" />
            </figure>
          </div>
          <div className={styles.column} style={{ width: '68.75%' }}>
            <h2 className={styles.h2}>윤△△ 강사</h2>
            <p className={styles.p}> 현) 글로벌 IT 기업 한국지사 게임엔진 프로젝트 리딩</p>
            <p className={styles.p}> Robotics AI 애플리케이션 빌더 개발</p>
          </div>
        </div>
        <hr className={styles.hr} />
        <h1 className={styles.h1}>교육 선발 대상</h1>
        <div className={styles.columnList}>
          <div className={styles.column} style={{ width: '45%' }}>
            <figure className={styles.image}>
              <img
                style={{ width: '100%' }}
                src="/academy1/images/_EC_83_81_EC_84_B8_ED_8E_98_EC_9D_B4_EC_A7_80-20.png"
                alt="선발대상1"
              />
            </figure>
            <h3 className={styles.h3}>개발 관련 비전공자 또는 디자인 전공자</h3>
            <p className={styles.p} style={{ marginTop: '-1rem' }}>
              아티스트 : 24명 정원
            </p>
          </div>
          &nbsp;
          <div className={styles.column} style={{ width: '45%' }}>
            <figure className={styles.image}>
              <img
                style={{ width: '100%' }}
                src="/academy1/images/_EC_83_81_EC_84_B8_ED_8E_98_EC_9D_B4_EC_A7_80-21.png"
                alt="선발대상2"
              />
            </figure>
            <h3 className={styles.h3}>개발 관련 전공자 또는 재직자</h3>
            <p className={styles.p} style={{ marginTop: '-1rem' }}>
              엔지니어 : 24명 정원
            </p>
          </div>
        </div>
        <br></br>
        <h1 className={styles.h1}>선발 과정</h1>
        <div className={styles.columnList}>
          <div className={styles.column} style={{ width: '33.333333333333336%' }}>
            <figure
              className={`${styles.blockColorDefault} ${styles.callout}`}
              style={{ whiteSpace: 'pre-wrap', display: 'flex' }}
            >
              <div style={{ fontSize: '1.5em' }}>
                <span className={styles.icon}>1️⃣</span>
              </div>
              <div style={{ width: '100%' }}>
                <strong> 신청서 작성</strong>
                <br />
                &nbsp;구글폼 작성을 통해 신청.
                <br />
                <br />
              </div>
            </figure>
          </div>
          <div className={styles.column} style={{ width: '33.333333333333336%' }}>
            <figure
              className={`${styles.blockColorDefault} ${styles.callout}`}
              style={{ whiteSpace: 'pre-wrap', display: 'flex' }}
            >
              <div style={{ fontSize: '1.5em' }}>
                <span className={styles.icon}>2️⃣</span>
              </div>
              <div style={{ width: '100%' }}>
                <strong> 내일배움카드 확인</strong>
                <br />
                &nbsp;개별 안내 문자 드립니다.
                <br />
                &nbsp;(사전 발급 권장)
                <br />
              </div>
            </figure>
          </div>
          <div className={styles.column} style={{ width: '33.33333333333333%' }}></div>
        </div>
        <h1 className={styles.h1}>FAQ</h1>
        <hr className={styles.hr} />
        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightYellowBackground}>자주 물어보시는 질문 모음</mark>
              </summary>
              <p style={{ lineHeight: 2.8 }} className={styles.p}>
                Q1. 언리얼엔진 프로그래밍을 처음 배우는데, 어느 정도 수준까지 가능할까요?
                <br /> A. 프로그래밍을 처음 배우는 비전공자도 참여할 수 있도록 기초부터 시작합니다.
                <br />
                블루프린트 기초 → C++ 프로그래밍 → 네트워크 프로그래밍 → 게임 서버 구축까지 학습하며,
                <br />
                최종적으로 멀티플레이어 게임 & 실시간 콘텐츠 시스템을 직접 개발하는 수준까지 도달합니다
                <br />
                Q2. 멀티플레이어 게임 개발과 버추얼 프로덕션 시스템 엔지니어링이 어떻게 연결되나요?
                <br />
                A. 두 분야 모두 실시간 데이터 동기화, 네트워크 최적화, 시스템 안정성이 중요한 공통점을 갖고 있습니다.
                <br />
                멀티플레이어 게임 개발에서는 플레이어의 입력을 서버에 반영하고, 모든 클라이언트에 동기화하는 것이
                핵심입니다.
                <br />
                버추얼 프로덕션 시스템에서는 카메라 트래킹, 조명, 그래픽이 실시간으로 반영되어야 하며, 이는 네트워크를
                통한 동기화가 필수적입니다.
                <br />
                서버-클라이언트 모델, 네트워크 지연(Latency) 보정, 데이터 패킷 최적화 등 게임 개발에서 배우는 기술이
                버추얼 프로덕션에서도 그대로 활용됩니다.
                <br />
                📌 즉, 하나의 기술을 학습하면 두 분야에서 모두 활용할 수 있으며, 더 넓은 취업 기회를 가질 수 있습니다.
                <br />
                Q3. 수업 방식이 어떻게 진행되나요?
                <br /> A. 이론 30% + 실습 70%로 구성된 프로젝트 기반 학습 방식입니다.
                <br />각 개념을 배운 후 실제 게임 & XR 콘텐츠를 직접 개발하며 배우는 실무형 과정입니다.
                <br />
                Q4. 온라인 강의와 오프라인 강의의 차이는 무엇인가요?
                <br /> A. 온라인 강의는 편리하지만, 실무 기술을 익히는 데 한계가 있을 수 있습니다.
                <br />
                게임 개발이나 XR 콘텐츠 제작은 실제 환경에서 직접 경험하는 것이 중요합니다.
                <br />
                버추얼 프로덕션과 네트워크 프로그래밍처럼 실시간 시스템을 다루는 과정은 실제 장비와 환경에서 학습해야
                제대로 이해할 수 있습니다.
                <br />
                오프라인 강의에서는 실무 경험이 풍부한 강사가 바로 피드백을 주고, 팀 프로젝트를 통해 실제 협업 경험을
                쌓을 수 있습니다.
                <br />
                📌 단순히 개념을 익히는 것이 아니라, 실습과 피드백을 통해 실무에서 바로 활용할 수 있는 능력을 기르는
                것이 중요합니다.
                <br />
                📌 이 과정에서는 실제 현장에서 사용되는 장비와 시스템을 활용해, 보다 현실적인 실무 환경에서 학습할 수
                있도록 구성되어 있습니다. 🚀
                <br />
                Q5. 프로그래밍 경험이 없어도 따라갈 수 있나요?
                <br /> A. 네, 가능합니다!
                <br />
                처음부터 배우는 기초 과정이 포함되어 있으며, 프로그래밍 로직부터 C++까지 단계적으로 학습합니다.
                <br />
                Q6. 게임 개발 외에도 취업할 수 있는 분야가 있을까요? <br />
                A. 네! XR 콘텐츠 제작, 메타버스 개발, 실시간 콘텐츠 시스템 개발자로도 취업할 수 있습니다.
                <br />
                Q7. 포트폴리오를 제작할 수 있나요?
                <br /> A. 네, 과정 내에서 팀 프로젝트 & 개인 프로젝트를 진행하여 취업용 포트폴리오를 제작합니다. 실제
                멀티플레이어 게임 & XR 콘텐츠를 만들어서 취업 시 활용할 수 있습니다. <br />
                Q8. 사용되는 개발 환경과 장비는 어떤 것이 있나요?
                <br /> A. 언리얼 엔진 5 기반으로 게임 개발 및 실시간 디지털 콘텐츠 제작을 진행할 수 있도록 최적화된 최신
                장비를 제공합니다.
                <br />
                Visual Studio + GitHub + Unreal Engine 5 개발 환경 구축 → C++ 및 블루프린트 기반 프로그래밍 학습
                <br />
                모션 캡처 장비 활용 → 실시간 애니메이션 구현 & 언리얼 엔진과 데이터 스트리밍 연동 실습
                <br />
                카메라 트래킹 시스템 적용 → XR 콘텐츠 제작 및 실시간 버추얼 프로덕션 기술 학습
                <br />
                LED Wall 및 ICVFX (In-Camera VFX) 환경 제공 → 실시간 합성(Compositing) 및 버추얼 프로덕션 시스템 구축
                실습 가능
                <br />
                📌 이 과정에서는 단순히 언리얼 엔진을 배우는 것이 아니라, 게임 개발 & 실시간 XR 콘텐츠 제작을 위한 최신
                기술을 실습할 수 있는 환경을 제공합니다.
                <br />
                📌 언리얼 엔진 프로그래밍, 멀티플레이어 게임 개발, 버추얼 프로덕션 시스템 엔지니어링을 배우고 싶은
                분들에게 최적화된 과정입니다. 🚀
                <br />
                Q9. 취업 지원은 어떻게 이루어지나요?
                <br />
                A. 게임, 디지털트윈, XR 기업 등과 연계하여 취업 컨설팅, 포트폴리오 피드백, 면접 대비 등을 지원합니다.
                <br />
                Q10. 지원 자격이 있나요?
                <br /> A. 국민내일배움카드 소지자라면 누구나 지원할 수 있습니다. 게임 개발자 & XR 콘텐츠 개발자로 전환을
                희망하는 분들에게 적합한 과정입니다.
              </p>
            </details>
          </li>
        </ul>
        <hr className={styles.hr} />
        <h3 className={styles.h3}>(K-디지털 트레이닝)자주 묻는 질문</h3>
        <p className={styles.p}>
          <mark className={styles.highlightGray}>▶&nbsp;&nbsp;&nbsp;버튼을 누르면 답변을 확인할 수 있습니다!</mark>
        </p>
        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightPurpleBackground}>K-디지털 트레이닝</mark>이 뭔가요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  ✅ ｢한국판 뉴딜｣ 일환으로 고용노동부에서 추진 중인 K-디지털 트레이닝은, 디지털 분야 기업들과 혁신
                  훈련기관이 협약을 맺고 함께 설계된 교육 과정 입니다.
                </mark>
              </p>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  ✅ 보통 6개월·주5일·8시간 씩 운영되는 집중적인 훈련과정이며, 기업 참여를 통해 프로젝트 중심 훈련으로
                  진행이 됩니다. 단순히 기존의 강의형 지식 전달이 아닌, 경험·문제해결에 중점을 둔 개인 맞춤형 훈련 과정
                  등 효과적인 훈련 방식을 적용하여 진행되는 과정입니다.
                </mark>
              </p>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  ✅ 지원 대상은 국민내일배움카드를 발급받은 사람이며, 훈련비 전액이 지원됩니다!
                </mark>
              </p>
            </details>
          </li>
        </ul>
        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightTealBackground}>국민내일배움카드</mark>가 있어야 교육 신청이
                가능한가요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  국민내일배움카드 없이 교육 접수는 가능하지만, 최종적으로 HRD-Net에 교육 신청을 하기 위해선 카드 발급이
                  필요합니다! 교육 시작 일주일 전까지 카드 발급 후, HRD-Net에 수강 신청을 해야 정상적으로 신청이
                  완료됩니다. 내일배움카드는{' '}
                </mark>
                <mark className={styles.highlightGray}>
                  <a href="https://www.hrd.go.kr" target="_blank">
                    HRD-Net 홈페이지
                  </a>
                </mark>
                <mark className={styles.highlightGray}>에서 발급 신청이 가능합니다!</mark>
              </p>
            </details>
          </li>
        </ul>
        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightTealBackground}>국민내일배움카드</mark>는 누구나 신청이 가능한가요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>누구나 발급이 가능합니다!</mark>
              </p>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>단, 아래에 해당하는 사람은 지원 제외 대상입니다.</mark>
              </p>
              <ul className={styles.bulletedList}>
                <li style={{ listStyleType: 'disc' }}>
                  <mark className={styles.highlightGray}>현직 공무원, 사립학교 교직원</mark>
                </li>
                <li style={{ listStyleType: 'disc' }}>
                  <mark className={styles.highlightGray}>만 75세 이상인 사람</mark>
                </li>
                <li style={{ listStyleType: 'disc' }}>
                  <mark className={styles.highlightGray}>졸업까지 남은 수업연한이 2년을 초과하는 대학생,</mark>
                </li>
                <li style={{ listStyleType: 'disc' }}>
                  <mark className={styles.highlightGray}>연 매출 1억 5천만원 이상의 자영업자,</mark>
                </li>
                <li style={{ listStyleType: 'disc' }}>
                  <mark className={styles.highlightGray}>월 임금 300만원 이상인 특수형태근로종사자와</mark>
                </li>
                <li style={{ listStyleType: 'disc' }}>
                  <mark className={styles.highlightGray}>
                    월 임금 300만원 이상이면서 45세 미만인 대규모기업종사자 등
                  </mark>
                </li>
              </ul>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  그외 발급 여부는 거주지 관할 고용센터에 문의하시기 바랍니다(고용노동부 1350)
                </mark>
              </p>
            </details>
          </li>
        </ul>
        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightYellowBackground}>재직자</mark>도 교육 신청이 가능한가요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  국민내일배움카드를 발급 받은 재직자라면 교육 신청이 가능하지만, 훈련 수당을 받지 못한다는 점이
                  있습니다. 또한 본 교육 과정은 주 5일 8시간 수업과 관련 직종으로 취업하실 분들을 수강대상으로 하고
                  있어, 선발에 어려움이 있을 수 있습니다. 자세한 사항은 문의 부탁드립니다!
                </mark>
              </p>
            </details>
          </li>
        </ul>
        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightPinkBackground}>대면 수업</mark>
                인가요? <mark className={styles.highlightPinkBackground}>비대면 수업</mark>
                인가요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  본 교육 과정은 전면 대면 수업으로 평일 월-금 9:00-18:00 대면 출석이 가능한 분만 수강이 가능합니다.
                </mark>
              </p>
            </details>
          </li>
        </ul>
        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightPinkBackground}>수료 기준</mark>이 있나요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>전체 출석률이 80% 이상이면, 수료가 가능합니다.</mark>
              </p>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>✅ 수업일수 120일 기준 96일 이상 출석시 수료 가능</mark>
              </p>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  ✅ 결석처리 기준 : 수업시간 50%미만 참석, 지각/조퇴/외출 3회 누적 시 1회 결석 처리
                </mark>
              </p>
            </details>
          </li>
        </ul>
        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightPinkBackground}>다른 국비지원 교육</mark>을 들은 적이 있는데 신청이
                가능한가요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  이전에 들었던 교육이 K-디지털 트레이닝(KDT) 교육이 아니라면 신청이 가능하지만, 국민내일배움카드 잔여금
                  부족 등 경우에 따라 수강이 불가능한 경우가 있으니 자세한 수강 가능 여부는 거주지 관할 고용센터에
                  문의하시기 바랍니다! (고용노동부 1350)
                </mark>
              </p>
            </details>
          </li>
        </ul>
        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightBlueBackground}>훈련 장려금</mark>과{' '}
                <mark className={styles.highlightBlueBackground}>국민취업지원제도</mark>로 총 얼마까지 받을 수 있는
                건가요?
              </summary>
              <div className={styles.p}>
                ⭕<mark className={styles.highlightRed}>훈련특별수당 + 훈련장려금으로</mark>
                <mark className={styles.highlightRed}>
                  <strong> 월 최대 316,000원</strong>
                </mark>
                <mark className={styles.highlightRed}>을 받으실 수 있습니다.</mark>
              </div>
              <div className="indented">
                <div className={styles.p}>
                  ✅{' '}
                  <mark className={styles.highlightGray}>
                    KDT 훈련특별수당 : 1일 10,000원 x 최대 20일 = 총 200,000원
                  </mark>
                </div>
                <div className={styles.p}>
                  <mark className={styles.highlightGray}>✅ 훈련장려금 : 1일 5,800원 x 최대 20일 = 총 116,000원</mark>
                </div>
                <ul className={styles.bulletedList}>
                  <li style={{ listStyleType: 'disc' }}>
                    <mark className={styles.highlightGray}>
                      대상자 : 실업자, 주 15시간 미만 재직자, 근로장려금 수급자, 무급휴직자 등
                    </mark>
                  </li>
                  <li style={{ listStyleType: 'disc' }}>
                    <mark className={styles.highlightGray}>
                      지급 제외 대상 : 청년구직활동지원금, 청년수당, 실업급여, 미취업 청년 취업장려금, 희망사다리 장려금
                      등 정부 및 지자체에서 지원받을 경우 제외
                    </mark>
                  </li>
                </ul>
              </div>

              <div className={styles.p}>
                ⭕<mark className={styles.highlightRed}>국민취업지원제도 신청 시 추가로 </mark>
                <mark className={styles.highlightRed}>
                  <strong>월 최대 284,000원/500,000원</strong>
                </mark>
                <mark className={styles.highlightRed}>을 받으실 수 있습니다.</mark>
              </div>
              <div className="indented">
                <div className={styles.p}>
                  ✅ <mark className={styles.highlightGray}>국민취업지원제도 I유형 = 월 284,000원</mark>
                </div>
                <div className={styles.p}>
                  <mark className={styles.highlightGray}>✅ 국민취업지원제도 II유형 = 월 500,000원</mark>
                </div>
                <ul className={styles.bulletedList}>
                  <li style={{ listStyleType: 'disc' }}>
                    <mark className={styles.highlightGray}>
                      결석한 일수만큼 훈련장려금과 국민취업지원제도가 1일분씩 차감됩니다.
                    </mark>
                  </li>
                </ul>
              </div>
            </details>
          </li>
        </ul>
        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightBlueBackground}>국민취업지원제도</mark>는 어떻게 신청할 수 있나요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  <a href="https://www.kua.go.kr/uaptm010/selectMain.do" target="_blank">
                    국민취업지원제도 홈페이지
                  </a>
                </mark>
                <mark className={styles.highlightGray}>에서 신청이 가능합니다.</mark>
              </p>
              <ul className={styles.bulletedList}>
                <li style={{ listStyleType: 'disc' }}>
                  <mark className={styles.highlightGray}>
                    I유형은 &apos;구직촉진수당&apos;과 &apos;취업지원서비스&apos;를 제공받습니다. 가구단위 중위소득*60%
                    이하이고 재산 4억원 이하이면서, 최근 2년 안에 100일 또는 800시간 이상의 취업경험이 있는 사람을
                    중심으로 합니다.
                  </mark>
                </li>
                <li style={{ listStyleType: 'disc' }}>
                  <mark className={styles.highlightGray}>
                    II유형은 &apos;취업활동비용&apos;과 &apos;취업지원서비스&apos;를 제공받습니다. I유형에 해당하지 않는
                    특정계층, 청년, 중장년 등이 지원 대상입니다.
                  </mark>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightGrayBackground}>개인 노트북</mark>을 사용해도 되나요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>네! 개인 노트북 사용이 가능합니다. 🐢</mark>
              </p>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  단, 실습 환경이 윈도우에서 이루어져 윈도우 사용 가능 노트북을 권장합니다. 🍊
                </mark>
              </p>
            </details>
          </li>
        </ul>
        <div></div>
        <h2 className={styles.h2}>
          📕<strong>교육문의</strong>
        </h2>
        <hr className={styles.hr} />
        <h3 className={styles.h3}>
          <strong>몬스테라텍</strong>
        </h3>
        <p className={styles.p}>
          <mark className={styles.highlightGrayBackground}>
            Email : hj.kwon@monsteraedu.co.kr
            <br />
            연락처 : 010 - 5146 - 5161
          </mark>
        </p>
        <p className={styles.p}></p>
        <hr className={styles.hr} />
        <h1 className={styles.h1}>몬스테라텍 언리얼엔진 부트캠프</h1>
        <div className={styles.columnList}>
          <div className={styles.column} style={{ width: '33.33333333333333%' }}>
            <p className={styles.p}>
              <strong>
                <a href="/terms" target="_blank">
                  개인정보처리방침
                </a>
              </strong>
            </p>
          </div>
          <div className={styles.column} style={{ width: '33.33333333333333%' }}>
            <p className={styles.p}></p>
          </div>
          <div className={styles.column} style={{ width: '33.33333333333333%' }}>
            <p className={styles.p}></p>
          </div>
        </div>
        <p className={styles.p}>
          <strong>🏠 (06045) 서울특별시 강남구 학동로161 4층, 406호</strong>
        </p>
        <p className={styles.p}>
          <strong>© MONSTERA. ALL RIGHTS RESERVED.</strong>
        </p>
        <p className={styles.p} style={{ marginBottom: '9rem' }}>
          <a href="https://monsteratech.com" target="_blank">
            홈페이지
          </a>
        </p>
        <div className={styles.floatingButtonContainer}>
          <EngineerButton />
        </div>
        <ChatFloatingButton url="http://pf.kakao.com/_cpxopG/chat" icon="💬" className={styles.chattingButton} />
      </div>
    </article>
  );
}
