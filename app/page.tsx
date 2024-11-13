import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <article className={styles.page}>
      <header>
        <h1 className={styles.pageTitle}></h1>
        <p className={styles.pageDescription}></p>
      </header>
      <div className={styles.pageBody}>
        <figure className={styles.image}>
          <img style={{ width: "707.95px" }} src="/main/images/monstera.png" />
        </figure>
        <figure
          className={`${styles.blockColorDefault} ${styles.callout}`}
          style={{ whiteSpace: "pre-wrap", display: "flex" }}
        >
          <div style={{ fontSize: "1.5em" }}>
            <span className={styles.icon}>👩‍🎓</span>
          </div>
          <div style={{ width: "100%" }}>
            [Unity Korea] Unity 부트캠프는 <strong>몬스테라텍 캠퍼스</strong>
            에서 진행됩니다.
            <br />
            <mark className={styles.highlightBlue}>
              <strong>교육전문가</strong>
            </mark>
            의 커리큘럼과
            <mark className={styles.highlightBlue}>
              <strong> IT기업 실무자</strong>
            </mark>
            의 경험을 기반으로
            <mark className={styles.highlight}>
              <strong> 체계적인 실무 교육</strong>
            </mark>
            이 이루어집니다.
          </div>
        </figure>
        <figure className={styles.image}>
          <img
            style={{ width: "708px" }}
            src="/academy1/images/_EC_A0_9C_EB_AA_A9_EC_9D_84-_EC_9E_85_EB_A0_A5_ED_95_B4_EC_A3_BC_EC_84_B8_EC_9A_94_-012.png"
          />
        </figure>
        <div className={`${styles.columnList} ${styles.verticalList}`}>
          <div className={styles.column} style={{ width: "100%" }}>
            <figure
              className={`${styles.blockColorDefault} ${styles.callout}`}
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
            >
              <div style={{ fontSize: "1.5em" }}>
                <span className={styles.icon}>📅</span>
              </div>
              <div style={{ width: "100%" }}>
                <strong>
                  교육 기간
                  <br />
                </strong>
                - 2024년 10월 19일(토) ~ 12월 21일(토) / 매주 토요일 (총 10주)
                <br />- 교육 시간 : 10:00 - 17:00 (6시간/점심시간 1시간)
              </div>
            </figure>
          </div>

          <div className={styles.column} style={{ width: "100%" }}>
            <figure
              className={`${styles.blockColorDefault} ${styles.callout}`}
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
            >
              <div style={{ fontSize: "1.5em" }}>
                <span className={styles.icon}>📍</span>
              </div>
              <div style={{ width: "100%" }}>
                <strong>
                  교육 장소
                  <br />
                </strong>
                : 판교 경기스타트업캠퍼스 7층 (성균관대 판교캠퍼스) 또는
                킨스타워(정자역 3분거리)
              </div>
            </figure>
          </div>

          <div className={styles.column} style={{ width: "100%" }}>
            <figure
              className={`${styles.blockColorDefault} ${styles.callout}`}
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
            >
              <div style={{ fontSize: "1.5em" }}>
                <span className={styles.icon}>👥</span>
              </div>
              <div style={{ width: "100%" }}>
                <strong>
                  교육 대상
                  <br />
                </strong>
                : 반도체 관련 기업 재직자(선착순 40명 모집)
                <br />
                <mark className={styles.highlightGray}>
                  - Cadence, PSpice, Quartus 등 반도체 설계 툴 실습을 통해 설계
                  역량을 강화하고 싶은 재직자
                  <br />
                  ✅ 재직증명서 확인 필수
                  <br />✅ 재직중인 기업이 고용보험에 가입되어 있지 않으면
                  수강이 불가능합니다.
                </mark>
              </div>
            </figure>
          </div>

          <div className={styles.column} style={{ width: "100%" }}>
            <figure
              className={`${styles.blockColorDefault} ${styles.callout}`}
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
            >
              <div style={{ fontSize: "1.5em" }}>
                <span className={styles.icon}>💰</span>
              </div>
              <div style={{ width: "100%" }}>
                <strong>
                  교육비
                  <br />
                </strong>
                : 전액 무료 (국비지원)
                <br />
                <mark className={styles.highlightGray}>
                  - 국민내일배움카드 발급 필수
                  <br />✅ 발급 방법은 아래 FAQ를 참고해주세요!
                </mark>
              </div>
            </figure>
          </div>
        </div>

        <h1 className={styles.h1}>
          성균관대학교,
          <br />
          국내 최고 명문 반도체 교육 대학
          <br />
        </h1>
        <p className={styles.p}>
          성균관대학교는 국내 최초로 삼성전자와 공동으로 시스템반도체공학과를
          신설하여, 회로 및 소자 설계, 시스템 아키텍처, 시스템 소프트웨어 등
          국내 최고의 반도체 설계 전문 교육 역량을 보유하고 있습니다.
        </p>
        <figure className={styles.image}>
          <img style={{ width: "720px" }} src="/academy1/images/004.png" />
        </figure>
        <h1 className={styles.h1}>
          성균관대학교 아카데미만의
          <br />
          반도체 레이아웃/회로설계 실습과정은?
          <br />
        </h1>
        <figure className={styles.image}>
          <img
            style={{ width: "720px" }}
            src="/academy1/images/_EB_B0_98_EB_8F_84_EC_B2_B43_EB_8C_80_EC_A7_80_953x.png"
          />
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
                산업인력공단 주관 하에 성균관대학교에서 운영되는 재직자 과정은
                각 기업에서 납부하고 있는 고용보험기금을 통해 운영됩니다. 따라서
                고용보험기금을 납부하는 회사에 재직하고 있는 모든 분들은 교육을
                무료로 받으실 수 있습니다.
              </p>
            </details>
          </li>
        </ul>
        <h1 className={styles.h1}>
          반도체 설계 실무 환경 100% 재현
          <br />
          마음껏 사용 가능한 Cadence 실습 환경 제공
          <br />
        </h1>
        <p className={styles.p}>
          본 교육 과정은 현업과 동일한 리눅스 서버를 구축하여, 실무에서 가장
          많이 사용되고 있는 Cadence, PSpice 설계 라이선스를 교육생들에게
          무상으로 제공하고 있습니다. 현업과 동일한 반도체 설계 환경에서 충분한
          실습을 통해 반도체 설계 전문가의 역량을 키우세요!
        </p>
        <figure className={styles.image}>
          <img style={{ width: "720px" }} src="/academy1/images/8.png" />
        </figure>

        <h1 className={styles.h1}>
          반도체 설계 실무 역량 강화를 위한
          <br />
          핵심 커리큘럼
        </h1>
        <p className={styles.p}>
          본 교육과정은 실습 중심 교육으로 이루어집니다.
        </p>
        <div className={styles.columnList}>
          <div className={styles.column} style={{ width: "37.5%" }}>
            <figure className={styles.image}>
              <img
                src="/academy1/images/13.png"
                alt="반도체 소자 구조"
                style={{ width: "336px" }}
              />
            </figure>
          </div>
          <div
            className={styles.column}
            style={{ width: "62.5%", marginTop: "-1rem" }}
          >
            <h2 className={styles.h2}>반도체 소자 구조, 동작 및 특성</h2>
            <p className={styles.p}>
              반도체 설계에 필요한 반도체 소자의 구조와 특성을 학습하고, CMOS
              인버터의 구조와 특성 이해를 통한 레이아웃 설계 및 회로설계 실습을
              진행합니다.
            </p>
            <p className={styles.p}>- 훈련시간 : 18h (3 Days)</p>
            <ul className={styles.toggle}>
              <li>
                <details>
                  <summary>세부내용</summary>
                  <ul className={styles.bulletedList}>
                    <li style={{ listStyleType: "disc" }}>
                      반도체 소자 구조, 동작 및 특성
                      <ul className={styles.bulletedList}>
                        <li style={{ listStyleType: "circle" }}>
                          PN접합, 다이오드 구조, 동작 및 특성
                        </li>
                        <li style={{ listStyleType: "circle" }}>
                          BJT 구조, 동작 및 특성
                        </li>
                        <li style={{ listStyleType: "circle" }}>
                          MOSFET 구조 및 특성
                        </li>
                      </ul>
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      CMOS 인버터 구조 및 특성
                      <ul className={styles.bulletedList}>
                        <li style={{ listStyleType: "circle" }}>
                          CMOS 인버터 구조, 동작 및 특성
                        </li>
                        <li style={{ listStyleType: "circle" }}>
                          CMOS 인버터 Design Process
                        </li>
                      </ul>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.columnList}>
          <div className={styles.column} style={{ width: "37.5%" }}>
            <figure className={styles.image}>
              <img
                src="/academy1/images/12.png"
                alt="반도체 디자인 룰"
                style={{ width: "336px" }}
              />
            </figure>
          </div>
          <div
            className={styles.column}
            style={{ width: "62.5%", marginTop: "-1rem" }}
          >
            <h2 className={styles.h2}>반도체 디자인 룰 및 DRC 검증</h2>
            <p className={styles.p}>
              반도체의 수직 구조를 이해하고, 레이아웃 디자인 후 설계 규칙(DRC,
              Design Rule Check) 오류를 해석하여 안전한 설계를 하는 것을 목표로
              실습을 진행합니다.
            </p>
            <p className={styles.p}>- 훈련시간 : 24h (4 Days)</p>
            <ul className={styles.toggle}>
              <li>
                <details>
                  <summary>세부내용</summary>
                  <ul className={styles.bulletedList}>
                    <li style={{ listStyleType: "disc" }}>
                      반도체 소자의 수직 구조
                      <ul className={styles.bulletedList}>
                        <li style={{ listStyleType: "circle" }}>
                          NWell의 수직 구조
                        </li>
                        <li style={{ listStyleType: "circle" }}>
                          Active/Gate의 수직 구조
                        </li>
                      </ul>
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Design Rule 및 DRC
                      <ul className={styles.bulletedList}>
                        <li style={{ listStyleType: "circle" }}>
                          Implant D/R 및 DRC
                        </li>
                        <li style={{ listStyleType: "circle" }}>
                          Contact D/R 및 DRC
                        </li>
                      </ul>
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      DRC 프로젝트
                      <ul className={styles.bulletedList}>
                        <li style={{ listStyleType: "circle" }}>
                          Metal Space DRC 실습
                        </li>
                        <li style={{ listStyleType: "circle" }}>
                          Metal Density DRC 실습
                        </li>
                      </ul>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.columnList}>
          <div className={styles.column} style={{ width: "37.5%" }}>
            <figure className={styles.image}>
              <img
                src="/academy1/images/11.png"
                alt="반도체 회로설계"
                style={{ width: "336px" }}
              />
            </figure>
          </div>
          <div
            className={styles.column}
            style={{ width: "62.5%", marginTop: "-1rem" }}
          >
            <h2 className={styles.h2}>반도체 회로설계</h2>
            <p className={styles.p}>
              반도체 Digital/Analog 회로설계를 위한 시스템 사양 분석 및 설계공정
              분석 실습을 진행합니다.
            </p>
            <p className={styles.p}>- 훈련시간 : 18h (3 Days)</p>
            <ul className={styles.toggle}>
              <li>
                <details>
                  <summary>세부내용</summary>
                  <ul className={styles.bulletedList}>
                    <li style={{ listStyleType: "disc" }}>
                      Digital 회로 및 Analog 회로 특성 이해
                      <ul className={styles.bulletedList}>
                        <li style={{ listStyleType: "circle" }}>
                          Digital 회로 특성
                        </li>
                        <li style={{ listStyleType: "circle" }}>
                          Analog 회로 특성
                        </li>
                      </ul>
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Cadence(Virtuoso Schematic Editor 및 Spectre, ADE)의 툴을
                      활용한 직접회로 설계
                      <ul className={styles.bulletedList}>
                        <li style={{ listStyleType: "circle" }}>
                          Digital IC 회로설계
                        </li>
                        <li style={{ listStyleType: "circle" }}>
                          Analog IC 회로설계
                        </li>
                      </ul>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        <br></br>

        <details className={styles.toggle}>
          <summary>
            <span
              style={{ cursor: "pointer" }}
              className={styles.highlightPurpleBackground}
            >
              <strong>세부 NCS 확인하기</strong>
            </span>
          </summary>
          <table className={styles.simpleTable}>
            <thead>
              <tr>
                <th style={{ width: "71px" }}>Day</th>
                <th style={{ width: "213px" }}>
                  <strong>교과목명</strong>
                </th>
                <th style={{ width: "213px" }}>
                  <strong>NCS 능력단위</strong>
                </th>
                <th style={{ width: "249px" }}>
                  <strong>NCS 능력단위요소</strong>
                </th>
                <th style={{ width: "89px" }}>
                  <strong>교육 시간</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1일차</td>
                <td>반도체 소자 구조, 동작 및 특성</td>
                <td>메모리 반도체 제조공정 개발</td>
                <td>메모리 반도체 단위소자 개발하기</td>
                <td>6시간</td>
              </tr>
              <tr>
                <td>2일차</td>
                <td>반도체 소자 구조, 동작 및 특성</td>
                <td>시스템 반도체 제조공정 개발</td>
                <td>시스템 반도체 단위소자 개발하기</td>
                <td>6시간</td>
              </tr>
              <tr>
                <td>3일차</td>
                <td>반도체 소자 구조, 동작 및 특성</td>
                <td>시스템 반도체 제조공정 개발</td>
                <td>
                  메모리 반도체 공정흐름도 해석하기
                  <br />
                  시스템 반도체 공정흐름도 해석하기
                </td>
                <td>6시간</td>
              </tr>
              <tr>
                <td>4일차</td>
                <td>반도체 디자인 룰 및 DRC 검증</td>
                <td>커스텀 레이아웃 설계</td>
                <td>
                  회로도 이해하기
                  <br />
                  레이아웃 방법 결정하기
                </td>
                <td>6시간</td>
              </tr>
              <tr>
                <td>5일차</td>
                <td>반도체 디자인 룰 및 DRC 검증</td>
                <td>커스텀 레이아웃 설계</td>
                <td>
                  레이아웃 설계툴 사용하기
                  <br />
                  커스텀 레이아웃 수행하기
                </td>
                <td>6시간</td>
              </tr>
              <tr>
                <td>6일차</td>
                <td>반도체 디자인 룰 및 DRC 검증</td>
                <td>커스텀 레이아웃 설계</td>
                <td>
                  DRC 검증하기
                  <br />
                  LVS 검증하기
                </td>
                <td>6시간</td>
              </tr>
              <tr>
                <td>7일차</td>
                <td>반도체 디자인 룰 및 DRC 검증</td>
                <td>커스텀 레이아웃 설계</td>
                <td>
                  LVS 검증하기
                  <br />
                  LPE 검증하기
                </td>
                <td>6시간</td>
              </tr>
              <tr>
                <td>8일차</td>
                <td>반도체 회로설계</td>
                <td>아날로그 회로 아키텍처 설계</td>
                <td>시스템 사양 분석하기</td>
                <td>6시간</td>
              </tr>
              <tr>
                <td>9일차</td>
                <td>반도체 회로설계</td>
                <td>아날로그 회로 아키텍처 설계</td>
                <td>설계공정 분석하기</td>
                <td>6시간</td>
              </tr>
              <tr>
                <td>10일차</td>
                <td>반도체 회로설계</td>
                <td>아날로그 회로 아키텍처 설계</td>
                <td>블록단위 설계하기</td>
                <td>6시간</td>
              </tr>
              <tr>
                <td className={styles.blockColorPinkBackground}>
                  <strong>Total</strong>
                </td>
                <td className={styles.blockColorPinkBackground}></td>
                <td className={styles.blockColorPinkBackground}></td>
                <td className={styles.blockColorPinkBackground}></td>
                <td className={styles.blockColorPinkBackground}>
                  <strong>60시간</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </details>
        <details className={styles.toggle}>
          <summary>
            <span
              style={{ cursor: "pointer" }}
              className={styles.highlightBlueBackground}
            >
              <strong>프로젝트 내용 엿보기</strong>
            </span>
            <span className={styles.highlightBlueBackground}>👀👇</span>
          </summary>
          <figure className={styles.image}>
            <img
              style={{ width: "951px" }}
              src="/academy1/images/Untitled.png"
              alt=""
            />
          </figure>
          <figure className={styles.image}>
            <img
              style={{ width: "672px" }}
              src="/academy1/images/2-stage_comparator_simulation__ED_99_98_EA_B2_BD.png"
              alt=""
            />
          </figure>
          <p className={styles.p}>&lt;2-stage comparator_simulation 환경&gt;</p>
          <figure className={styles.image}>
            <img
              style={{ width: "720px" }}
              src="/academy1/images/2-stage_comparator.png"
              alt=""
            />
          </figure>
          <p className={styles.p}>&lt;2-stage comparator&gt;</p>
          <figure className={styles.image}>
            <img
              style={{ width: "1502px" }}
              src="/academy1/images/2-stage_comparator_EC_9D_98_AC_simulation__EA_B2_B0_EA_B3_BC.png"
              alt=""
            />
          </figure>
          <p className={styles.p}>
            &lt;2-stage comparator의 AC simulation 결과&gt;
          </p>
          <figure className={styles.image}>
            <img
              style={{ width: "1763px" }}
              src="/academy1/images/2-stage_comparator_EC_9D_98_transient_simulation__EA_B2_B0_EA_B3_BC.png"
              alt=""
            />
          </figure>
          <p className={styles.p}>
            &lt;2-stage comparator의 transient simulation 결과&gt;
          </p>
        </details>

        <h1 className={styles.h1}>
          전원 S전자 출신의 전문 강사진
          <br />
          반도체 설계 분야 현업 노하우를 그대로!
          <br />
        </h1>
        <p className={styles.p}>
          S전자 반도체 패널 설계 및 면접 위원으로 10년 이상 근무한 강사진부터,
          12년 이상 반도체 연구소에서 근무 후 갓 퇴사한 강사진까지! 반도체 설계
          핵심 전문가들로 강사진을 구성했습니다.
        </p>
        <hr className={styles.hr} />
        <div className={styles.columnList}>
          <div className={styles.column} style={{ width: "31.25%" }}>
            <figure className={styles.image}>
              <img style={{ width: "2449px" }} src="/academy1/images/5.png" />
            </figure>
          </div>
          <div className={styles.column} style={{ width: "68.75%" }}>
            <h2 className={styles.h2}>안○○ 강사</h2>
            <p className={styles.p}>
              S전자 반도체 Panel DDI 설계팀 / 면접위원 출신
            </p>
            <p className={styles.p}>성균관대학교 전자전기 박사</p>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.columnList}>
          <div className={styles.column} style={{ width: "31.25%" }}>
            <figure className={styles.image}>
              <img
                style={{ width: "2449px" }}
                src="/academy1/images/4.png"
                alt="윤△△ 강사"
              />
            </figure>
          </div>
          <div className={styles.column} style={{ width: "68.75%" }}>
            <h2 className={styles.h2}>윤△△ 강사</h2>
            <p className={styles.p}>
              S전자 반도체 연구소 플래시 개발 / 레이아웃 담당 출신
            </p>
            <p className={styles.p}>서울대학교 전기컴퓨터 박사</p>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.columnList}>
          <div className={styles.column} style={{ width: "31.25%" }}>
            <figure className={styles.image}>
              <img
                style={{ width: "2449px" }}
                src="/academy1/images/7.png"
                alt="이ㅁㅁ 강사"
              />
            </figure>
          </div>
          <div className={styles.column} style={{ width: "68.75%" }}>
            <h2 className={styles.h2}>이ㅁㅁ 강사</h2>
            <p className={styles.p}>S전자 반도체 DDI PA팀 출신</p>
            <p className={styles.p}>플로리다대학교 박사</p>
          </div>
        </div>
        <hr className={styles.hr} />
        <h1 className={styles.h1}>
          성대 반도체 설계 교육만의
          <br />
          혜택 풀패키지
          <br />
        </h1>
        <hr className={styles.hr} />
        <div className={styles.columnList}>
          <div className={styles.column} style={{ width: "31.25%" }}>
            <figure className={styles.image}>
              <img
                style={{ width: "100%", maxWidth: "1920px" }}
                src="/academy1/images/_EC_83_81_EC_84_B8_ED_8E_98_EC_9D_B4_EC_A7_80-13.png"
                alt="혜택1"
              />
            </figure>
          </div>
          <div className={styles.column} style={{ width: "68.75%" }}>
            <h2 className={styles.h2}>
              반도체 설계 실무 현장과 동일한 환경 조성
            </h2>
            <p className={styles.p}>
              리눅스 서버 구축 및 Cadence, PSpice, Quartus2 설계 라이선스 제공!
            </p>
            <p className={styles.p}>
              실제 반도체 설계 현업과 동일한 환경에서 맘껏 실습 가능!
            </p>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.columnList}>
          <div className={styles.column} style={{ width: "31.25%" }}>
            <figure className={styles.image}>
              <img
                style={{ width: "100%", maxWidth: "2429px" }}
                src="/academy1/images/_EC_83_81_EC_84_B8_ED_8E_98_EC_9D_B4_EC_A7_80-14.png"
                alt="혜택2"
              />
            </figure>
          </div>
          <div
            className={styles.column}
            style={{ width: "68.75%", marginTop: "-0.8rem" }}
          >
            <h2 className={styles.h2}>노트북 제공 및 다양한 교육 편의 제공</h2>
            <p className={styles.p}>최신 노트북과 듀얼 모니터 제공!</p>
            <p className={styles.p}>
              넓은 강의실, 프로젝트실, 구내식당 등 교육에만 집중할 수 있는
              최적의 교육 장소!
            </p>
            <p className={styles.p}>중식 제공과 주차 지원!</p>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.columnList}>
          <div className={styles.column} style={{ width: "31.25%" }}>
            <figure className={styles.image}>
              <img
                style={{ width: "100%", maxWidth: "2429px" }}
                src="/academy1/images/_EC_83_81_EC_84_B8_ED_8E_98_EC_9D_B4_EC_A7_80-17.png"
                alt="혜택3"
              />
            </figure>
          </div>
          <div
            className={styles.column}
            style={{ width: "68.75%", marginTop: "-0.8rem" }}
          >
            <h2 className={styles.h2}>다양한 교육 혜택</h2>
            <p className={styles.p}>100% 실습비 지원 무료 교육!</p>
            <p className={styles.p}>수료시 성균관대 수료증과 기념품 제공!</p>
            <p className={styles.p}>3권의 반도체 시중 교재 무료 제공!</p>
          </div>
        </div>
        <hr className={styles.hr} />

        <h1 className={styles.h1}>교육 선발 대상</h1>
        <div className={styles.columnList}>
          <div className={styles.column} style={{ width: "45%" }}>
            <figure className={styles.image}>
              <img
                style={{ width: "100%" }}
                src="/academy1/images/_EC_83_81_EC_84_B8_ED_8E_98_EC_9D_B4_EC_A7_80-20.png"
                alt="선발대상1"
              />
            </figure>
            <h3 className={styles.h3}>반도체 관련 기업 재직자</h3>
            <p className={styles.p} style={{ marginTop: "-1rem" }}>
              본 과정은 재직자 과정으로, 반도체 관련 분야 기업에 재직중인 재직자
              및 신입 직원을 우선 선발하고 있습니다.
            </p>
          </div>
          &nbsp;
          <div className={styles.column} style={{ width: "45%" }}>
            <figure className={styles.image}>
              <img
                style={{ width: "100%" }}
                src="/academy1/images/_EC_83_81_EC_84_B8_ED_8E_98_EC_9D_B4_EC_A7_80-21.png"
                alt="선발대상2"
              />
            </figure>
            <h3 className={styles.h3}>
              10시-17시 교육 시간에
              <br />
              풀타임 참여 가능한 분
            </h3>
            <p className={styles.p} style={{ marginTop: "-1rem" }}>
              매주 토요일, 하루 6시간, 10주 동안 교육이 이루어집니다. 해당 기간
              동안 풀타임으로 참여가 가능하신 분들을 선발합니다. (80% 이상 출석
              시 수료)
            </p>
          </div>
        </div>
        <br></br>
        <figure
          className={styles.callout}
          style={{ whiteSpace: "pre-wrap", display: "flex" }}
        >
          <div style={{ fontSize: "1.5em" }}>
            <span className={styles.icon}>✅</span>
          </div>
          <div style={{ width: "100%" }}>
            <mark className={styles.highlightDefault}>
              <strong>교육 신청 전 체크리스트!</strong>
            </mark>
            <ul className={styles.toggle}>
              <li>
                <details>
                  <summary>
                    <mark className={styles.highlightDefault}>
                      본 교육 과정은 재직자 대상 과정으로, 반도체/IT 관련 기업
                      재직자 분들만 교육 신청이 가능합니다.
                    </mark>
                  </summary>
                  <ul className={styles.bulletedList}>
                    <li style={{ listStyleType: "disc" }}>
                      <mark className={styles.highlightGray}>
                        교육 진행 시 재직증명서 제출 필수
                      </mark>
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      <mark className={styles.highlightGray}>
                        재직중인 기업이 고용보험에 가입되어 있지 않으면 수강이
                        불가능합니다.
                      </mark>
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      <mark className={styles.highlightGray}>
                        고용보험에 가입되어 있지 않는 인턴의 경우 수강이
                        불가능합니다.
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
                    <mark className={styles.highlightDefault}>
                      풀타임으로 교육에 참여가 가능하신 경우에만 선발하고
                      있습니다.
                    </mark>
                  </summary>
                  <ul className={styles.bulletedList}>
                    <li style={{ listStyleType: "disc" }}>
                      <mark className={styles.highlightGray}>
                        실습 프로젝트 중심 과정으로, 결석 시 프로젝트 진행에
                        어려움이 있을 수 있습니다.
                      </mark>
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      <mark className={styles.highlightGray}>
                        대면으로 진행되는 교육으로 진행됩니다.
                      </mark>
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      <mark className={styles.highlightGray}>
                        80% 미만 출석으로 인한 미수료 시, 추후 해당 기업에 대한
                        교육 신청이 제한될 수 있습니다.
                      </mark>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </figure>

        <h1 className={styles.h1}>선발 과정</h1>
        <div className={styles.columnList}>
          <div
            className={styles.column}
            style={{ width: "33.333333333333336%" }}
          >
            <figure
              className={`${styles.blockColorDefault} ${styles.callout}`}
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
            >
              <div style={{ fontSize: "1.5em" }}>
                <span className={styles.icon}>1️⃣</span>
              </div>
              <div style={{ width: "100%" }}>
                <strong>신청서 작성</strong>
                <br />
                *구글폼 작성을 통해 신청해주세요.
                <br />
                (~10/13 마감)
                <br />
              </div>
            </figure>
          </div>
          <div
            className={styles.column}
            style={{ width: "33.333333333333336%" }}
          >
            <figure
              className={`${styles.blockColorDefault} ${styles.callout}`}
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
            >
              <div style={{ fontSize: "1.5em" }}>
                <span className={styles.icon}>2️⃣</span>
              </div>
              <div style={{ width: "100%" }}>
                <strong>재직 확인</strong>
                <br />
                *개별 안내 문자 드립니다.
                <br />
                (10월 초 재직증명서 요청)
                <br />
              </div>
            </figure>
          </div>
          <div
            className={styles.column}
            style={{ width: "33.33333333333333%" }}
          >
            <figure
              className={`${styles.blockColorDefault} ${styles.callout}`}
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
            >
              <div style={{ fontSize: "1.5em" }}>
                <span className={styles.icon}>3️⃣</span>
              </div>
              <div style={{ width: "100%" }}>
                <strong>교육 시작</strong>
                <br />
                *사전 안내 문자 드립니다.
                <br />
              </div>
            </figure>
          </div>
        </div>
        <h1 className={styles.h1}>
          한국의 실리콘밸리,
          <br />
          판교 캠퍼스에서 교육이 진행됩니다.
        </h1>
        <p className={styles.p}>
          본 교육은 전면 대면 수업으로 진행되며, 교육 기간 동안 대면 출석이
          가능하신 분만 수강하실 수 있습니다.
        </p>
        <p className={styles.p}>
          *성균관대 판교캠퍼스 이전으로 인해 경기스타트업캠퍼스 또는
          킨스타워(정자역 3분거리)에서 교육이 진행됩니다.
        </p>
        <figure
          className={`${styles.blockColorGrayBackground} ${styles.callout}`}
          style={{ whiteSpace: "pre-wrap", display: "flex" }}
        >
          <div style={{ fontSize: "1.5em" }}>
            <span className={styles.icon}>📢</span>
          </div>
          <div style={{ width: "100%" }}>
            <br />
            <br />
            <figure className={styles.image}>
              <img
                style={{ width: "100%", maxWidth: "378px" }}
                src="/academy1/images/_EC_8B_9C_EC_84_A4__EC_9D_B4_EB_AF_B8_EC_A7_80(1).png"
                alt="시설1"
              />
            </figure>

            <figure className={styles.image}>
              <img
                style={{ width: "100%", maxWidth: "700px" }}
                src="/academy1/images/KakaoTalk_20230615_091146853_02.jpg"
                alt="시설2"
              />
            </figure>

            <figure className={styles.image}>
              <img
                style={{ width: "100%", maxWidth: "378px" }}
                src="/academy1/images/_EC_8B_9C_EC_84_A4__EC_9D_B4_EB_AF_B8_EC_A7_80(3).png"
                alt="시설3"
              />
            </figure>

            <figure className={styles.image}>
              <img
                style={{ width: "100%", maxWidth: "700px" }}
                src="/academy1/images/KakaoTalk_20230421_145934567_03.jpg"
                alt="시설4"
              />
            </figure>

            <figure className={styles.image}>
              <img
                style={{ width: "100%", maxWidth: "672px" }}
                src="/academy1/images/_EA_B5_AC_EB_82_B4_EC_8B_9D_EB_8B_B9.jpg"
                alt="구내식당"
              />
            </figure>
          </div>
        </figure>
        <h1 className={styles.h1}>FAQ</h1>
        <hr className={styles.hr} />
        <h3 className={styles.h3}>(K-디지털 트레이닝)자주 묻는 질문</h3>
        <p className={styles.p}>
          <mark className={styles.highlightGray}>
            *▶버튼을 누르면 답변을 확인할 수 있습니다!
          </mark>
        </p>
        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightPurpleBackground}>
                  K-디지털 트레이닝
                </mark>
                이 뭔가요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  ✅ ｢한국판 뉴딜｣ 일환으로 고용노동부에서 추진 중인 K-디지털
                  트레이닝은, 디지털 분야 기업들과 혁신 훈련기관이 협약을 맺고
                  함께 설계된 교육 과정 입니다.
                </mark>
              </p>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  ✅ 보통 6개월·주5일·8시간 씩 운영되는 집중적인 훈련과정이며,
                  기업 참여를 통해 프로젝트 중심 훈련으로 진행이 됩니다. 단순히
                  기존의 강의형 지식 전달이 아닌, 경험·문제해결에 중점을 둔 개인
                  맞춤형 훈련 과정 등 효과적인 훈련 방식을 적용하여 진행되는
                  과정입니다.
                </mark>
              </p>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  ✅ 지원 대상은 국민내일배움카드를 발급받은 사람이며, 훈련비
                  전액이 지원됩니다!
                </mark>
              </p>
            </details>
          </li>
        </ul>

        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightTealBackground}>
                  국민내일배움카드
                </mark>
                가 있어야 교육 신청이 가능한가요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  국민내일배움카드 없이 교육 접수는 가능하지만, 최종적으로
                  HRD-Net에 교육 신청을 하기 위해선 카드 발급이 필요합니다! 교육
                  시작 일주일 전까지 카드 발급 후, HRD-Net에 수강 신청을 해야
                  정상적으로 신청이 완료됩니다. 내일배움카드는{" "}
                </mark>
                <mark className={styles.highlightGray}>
                  <a href="https://www.hrd.go.kr" target="_blank">
                    HRD-Net 홈페이지
                  </a>
                </mark>
                <mark className={styles.highlightGray}>
                  에서 발급 신청이 가능합니다!
                </mark>
              </p>
            </details>
          </li>
        </ul>

        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightTealBackground}>
                  국민내일배움카드
                </mark>
                는 누구나 신청이 가능한가요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  누구나 발급이 가능합니다!
                </mark>
              </p>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  단, 아래에 해당하는 사람은 지원 제외 대상입니다.
                </mark>
              </p>
              <ul className={styles.bulletedList}>
                <li style={{ listStyleType: "disc" }}>
                  <mark className={styles.highlightGray}>
                    현직 공무원, 사립학교 교직원
                  </mark>
                </li>
                <li style={{ listStyleType: "disc" }}>
                  <mark className={styles.highlightGray}>
                    만 75세 이상인 사람
                  </mark>
                </li>
                <li style={{ listStyleType: "disc" }}>
                  <mark className={styles.highlightGray}>
                    졸업까지 남은 수업연한이 2년을 초과하는 대학생,
                  </mark>
                </li>
                <li style={{ listStyleType: "disc" }}>
                  <mark className={styles.highlightGray}>
                    연 매출 1억 5천만원 이상의 자영업자,
                  </mark>
                </li>
                <li style={{ listStyleType: "disc" }}>
                  <mark className={styles.highlightGray}>
                    월 임금 300만원 이상인 특수형태근로종사자와
                  </mark>
                </li>
                <li style={{ listStyleType: "disc" }}>
                  <mark className={styles.highlightGray}>
                    월 임금 300만원 이상이면서 45세 미만인 대규모기업종사자 등
                  </mark>
                </li>
              </ul>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  그외 발급 여부는 거주지 관할 고용센터에 문의하시기
                  바랍니다(고용노동부 1350)
                </mark>
              </p>
            </details>
          </li>
        </ul>
        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightYellowBackground}>재직자</mark>
                도 교육 신청이 가능한가요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  국민내일배움카드를 발급 받은 재직자라면 교육 신청이
                  가능하지만, 훈련 수당을 받지 못한다는 점이 있습니다. 또한 본
                  교육 과정은 주 5일 8시간 수업과 관련 직종으로 취업하실 분들을
                  수강대상으로 하고 있어, 선발에 어려움이 있을 수 있습니다.
                  자세한 사항은 문의 부탁드립니다!
                </mark>
              </p>
            </details>
          </li>
        </ul>

        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightPinkBackground}>
                  대면 수업
                </mark>
                인가요?{" "}
                <mark className={styles.highlightPinkBackground}>
                  비대면 수업
                </mark>
                인가요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  본 교육 과정은 전면 대면 수업으로 평일 월-금 9:30-18:30 대면
                  출석이 가능한 분만 수강이 가능합니다. 수업은 판교
                  스타트업캠퍼스에서 진행됩니다.
                </mark>
              </p>
            </details>
          </li>
        </ul>

        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightPinkBackground}>
                  수료 기준
                </mark>
                이 있나요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  전체 출석률이 80% 이상이면, 수료가 가능합니다.
                </mark>
              </p>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  ✅ 수업일수 120일 기준 96일 이상 출석시 수료 가능
                </mark>
              </p>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  ✅ 결석처리 기준 : 수업시간 50%미만 참석, 지각/조퇴/외출 3회
                  누적 시 1회 결석 처리
                </mark>
              </p>
            </details>
          </li>
        </ul>

        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightPinkBackground}>
                  다른 국비지원 교육
                </mark>
                을 들은 적이 있는데 신청이 가능한가요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  이전에 들었던 교육이 K-디지털 트레이닝(KDT) 교육이 아니라면
                  신청이 가능하지만, 국민내일배움카드 잔여금 부족 등 경우에 따라
                  수강이 불가능한 경우가 있으니 자세한 수강 가능 여부는 거주지
                  관할 고용센터에 문의하시기 바랍니다! (고용노동부 1350)
                </mark>
              </p>
            </details>
          </li>
        </ul>

        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightBlueBackground}>
                  훈련 장려금
                </mark>
                과{" "}
                <mark className={styles.highlightBlueBackground}>
                  국민취업지원제도
                </mark>
                로 총 얼마까지 받을 수 있는 건가요?
              </summary>
              <div className={styles.p}>
                ⭕
                <mark className={styles.highlightRed}>
                  훈련특별수당 + 훈련장려금으로
                </mark>
                <mark className={styles.highlightRed}>
                  <strong> 월 최대 316,000원</strong>
                </mark>
                <mark className={styles.highlightRed}>
                  을 받으실 수 있습니다.
                </mark>
              </div>
              <div className="indented">
                <div className={styles.p}>
                  ✅{" "}
                  <mark className={styles.highlightGray}>
                    KDT 훈련특별수당 : 1일 10,000원 x 최대 20일 = 총 200,000원
                  </mark>
                </div>
                <div className={styles.p}>
                  <mark className={styles.highlightGray}>
                    ✅ 훈련장려금 : 1일 5,800원 x 최대 20일 = 총 116,000원
                  </mark>
                </div>
                <ul className={styles.bulletedList}>
                  <li style={{ listStyleType: "disc" }}>
                    <mark className={styles.highlightGray}>
                      대상자 : 실업자, 주 15시간 미만 재직자, 근로장려금 수급자,
                      무급휴직자 등
                    </mark>
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    <mark className={styles.highlightGray}>
                      지급 제외 대상 : 청년구직활동지원금, 청년수당, 실업급여,
                      미취업 청년 취업장려금, 희망사다리 장려금 등 정부 및
                      지자체에서 지원받을 경우 제외
                    </mark>
                  </li>
                </ul>
              </div>

              <div className={styles.p}>
                ⭕
                <mark className={styles.highlightRed}>
                  국민취업지원제도 신청 시 추가로{" "}
                </mark>
                <mark className={styles.highlightRed}>
                  <strong>월 최대 284,000원/500,000원</strong>
                </mark>
                <mark className={styles.highlightRed}>
                  을 받으실 수 있습니다.
                </mark>
              </div>
              <div className="indented">
                <div className={styles.p}>
                  ✅{" "}
                  <mark className={styles.highlightGray}>
                    국민취업지원제도 I유형 = 월 284,000원
                  </mark>
                </div>
                <div className={styles.p}>
                  <mark className={styles.highlightGray}>
                    ✅ 국민취업지원제도 II유형 = 월 500,000원
                  </mark>
                </div>
                <ul className={styles.bulletedList}>
                  <li style={{ listStyleType: "disc" }}>
                    <mark className={styles.highlightGray}>
                      결석한 일수만큼 훈련장려금과 국민취업지원제도가 1일분씩
                      차감됩니다.
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
                <mark className={styles.highlightBlueBackground}>
                  국민취업지원제도
                </mark>
                는 어떻게 신청할 수 있나요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  <a
                    href="https://www.kua.go.kr/uaptm010/selectMain.do"
                    target="_blank"
                  >
                    국민취업지원제도 홈페이지
                  </a>
                </mark>
                <mark className={styles.highlightGray}>
                  에서 신청이 가능합니다.
                </mark>
              </p>
              <ul className={styles.bulletedList}>
                <li style={{ listStyleType: "disc" }}>
                  <mark className={styles.highlightGray}>
                    I유형은 &apos;구직촉진수당&apos;과
                    &apos;취업지원서비스&apos;를 제공받습니다. 가구단위
                    중위소득*60% 이하이고 재산 4억원 이하이면서, 최근 2년 안에
                    100일 또는 800시간 이상의 취업경험이 있는 사람을 중심으로
                    합니다.
                  </mark>
                </li>
                <li style={{ listStyleType: "disc" }}>
                  <mark className={styles.highlightGray}>
                    II유형은 &apos;취업활동비용&apos;과
                    &apos;취업지원서비스&apos;를 제공받습니다. I유형에 해당하지
                    않는 특정계층, 청년, 중장년 등이 지원 대상입니다.
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
                <mark className={styles.highlightGrayBackground}>노트북</mark>을
                제공해주나요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  최신형 개발자 노트북을 제공해드립니다! 그 외 교육생 1인마다
                  모니터, 마우스, 키보드, 멀티허브 등을 제공합니다.
                </mark>
              </p>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  단, 반출은 불가능합니다.
                </mark>
              </p>
            </details>
          </li>
        </ul>

        <ul className={styles.toggle}>
          <li>
            <details>
              <summary>
                <mark className={styles.highlightGrayBackground}>
                  개인 노트북
                </mark>
                을 사용해도 되나요?
              </summary>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  네! 개인 노트북 사용이 가능합니다.
                </mark>
              </p>
              <p className={styles.p}>
                <mark className={styles.highlightGray}>
                  단, 실습 환경이 윈도우에서 이루어져 윈도우 사용 가능 노트북을
                  권장합니다.
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
            담당자 : lessingohoi@monsteraedu.co.kr
          </mark>
        </p>
        <p className={styles.p}></p>
        <hr className={styles.hr} />
        <h1 className={styles.h1}>몬스테라텍 유니티 부트캠프</h1>
        <div className={styles.columnList}>
          <div
            className={styles.column}
            style={{ width: "33.33333333333333%" }}
          >
            <p className={styles.p}>
              <strong>
                <a href="/terms" target="_blank">
                  개인정보처리방침
                </a>
              </strong>
            </p>
          </div>
          <div
            className={styles.column}
            style={{ width: "33.33333333333333%" }}
          >
            <p className={styles.p}></p>
          </div>
          <div
            className={styles.column}
            style={{ width: "33.33333333333333%" }}
          >
            <p className={styles.p}></p>
          </div>
        </div>
        <p className={styles.p}>
          <strong>🏠 (06045) 서울특별시 강남구 학동로161 4층, 406호</strong>
        </p>
        <p className={styles.p}>
          <strong>☎️ 010-9936-3490</strong>
        </p>
        <p className={styles.p}>
          <strong>© MONSTERA. ALL RIGHTS RESERVED.</strong>
        </p>
        <p className={styles.p}>
          <a href="https://monsteratech.com" target="_blank">
            홈페이지
          </a>
        </p>
      </div>
    </article>
  );
}
