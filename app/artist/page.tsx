import FloatingButton1 from '@/components/common/FloatingButton';
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
        <figure className={styles.image}>
          <img style={{ width: '880px' }} src="/main/images/unreal_engine1(artist).png" />
          <img style={{ width: '880px' }} src="/main/images/unreal_engine2(artist).png" />
          <img style={{ width: '880px' }} src="/main/images/unreal_engine3(artist).png" />
          <img style={{ width: '880px' }} src="/main/images/unreal_engine4(artist).png" />
        </figure>
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
          <div className={styles.column} style={{ width: '33.33333333333333%' }}>
            <figure
              className={`${styles.blockColorDefault} ${styles.callout}`}
              style={{ whiteSpace: 'pre-wrap', display: 'flex' }}
            >
              <div style={{ fontSize: '1.5em' }}>
                <span className={styles.icon}>3️⃣</span>
              </div>
              <div style={{ width: '100%' }}>
                <strong> 교육 시작</strong>
                <br />
                &nbsp;사전 안내 문자 드립니다.
                <br />
                <br />
              </div>
            </figure>
          </div>
        </div>

        <h1 className={styles.h1}>FAQ</h1>
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

        <h2 className={styles.h2}>
          📕<strong>교육문의</strong>
        </h2>
        <hr className={styles.hr} />
        <h3 className={styles.h3}>
          <strong>몬스테라텍</strong>
        </h3>
        <p className={styles.p}>
          <mark className={styles.highlightGrayBackground}>
            담당자 : hj.kwon@monsteraedu.co.kr
            <br /> 연락처 : 010 - 5146 - 5161
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
          <FloatingButton1 url="https://forms.gle/ztcxsJbaS6Q5Ywzg7" />
        </div>
        <ChatFloatingButton url="http://pf.kakao.com/_cpxopG/chat" icon="💬" className={styles.chattingButton} />
      </div>
    </article>
  );
}
