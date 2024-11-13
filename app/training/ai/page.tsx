import styles from "@/styles/page.module.css";
import PageLayout from "@/components/layout/PageLayout";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import InfoBox from "@/components/ui/InfoBox";
import ExpandableSection from "@/components/ui/ExpandableSection";
import HighlightText from "@/components/ui/HighlightText";
import ImageWithCaption from "@/components/ui/ImageWithCaption";
import SectionTitle from "@/components/ui/SectionTitle";
import Paragraph from "@/components/ui/Paragraph";
import InstructorProfile from "@/components/ui/InstructorProfile";
import Footer from "@/components/common/Footer";
import CompanyInfo from "@/components/ui/CompanyInfo";

export default function Home() {
  return (
    <PageLayout>
      {/* 헤더 이미지 및 소개 */}
      <ImageWithCaption
        src="/main/images/monstera.png"
        width="707.95px"
        alt="몬스테라텍 캠퍼스"
      />

      <InfoBox icon="👩‍🎓">
        [Unity Korea] Unity 부트캠프는 <strong>몬스테라텍 캠퍼스</strong>에서
        진행됩니다.
        <br />
        <br />
        <HighlightText color="blue">
          <strong>교육전문가</strong>
        </HighlightText>
        의 커리큘럼과
        <HighlightText color="blue">
          <strong>IT기업 실무자</strong>
        </HighlightText>
        의 경험을 기반으로
        <HighlightText color="default">
          <strong>체계적인 실무 교육</strong>
        </HighlightText>
        이 이루어집니다.
      </InfoBox>

      {/* 교육 과정 소개 */}
      <SectionTitle>반도체 설계 전문가 양성 과정</SectionTitle>

      {/* 교육 정보 */}
      <TwoColumnLayout
        leftWidth="56.25%"
        rightWidth="43.75%"
        leftContent={
          <InfoBox icon="📅" title="교육 기간">
            - 2024년 10월 19일(토) ~ 12월 21일(토) / 매주 토요일 (총 10주)
            <br />- 교육 시간 : 10:00 - 17:00 (6시간/점심시간 1시간)
          </InfoBox>
        }
        rightContent={
          <InfoBox icon="📍" title="교육 장소">
            판교 경기스타트업캠퍼스 7층 (성균관대 판교캠퍼스) 또는
            킨스타워(정자역 3분거리)
          </InfoBox>
        }
      />

      {/* 교육 대상 및 비용 */}
      <TwoColumnLayout
        leftWidth="56.25%"
        rightWidth="43.75%"
        leftContent={
          <InfoBox icon="👥" title="교육 대상">
            반도체 관련 기업 재직자(선착순 40명 모집)
            <br />
            <HighlightText color="gray">
              - Cadence, PSpice, Quartus 등 반도체 설계 툴 실습을 통해 설계
              역량을 강화하고 싶은 재직자
              <br />
              ✅ 재직증명서 확인 필수
              <br />✅ 재직중인 기업이 고용보험에 가입되어 있지 않으면 수강이
              불가능합니다.
            </HighlightText>
          </InfoBox>
        }
        rightContent={
          <InfoBox icon="💰" title="교육비">
            전액 무료 (국비지원)
            <br />
            <HighlightText color="gray">
              - 국민내일배움카드 발급 필수
              <br />✅ 발급 방법은 아래 FAQ를 참고해주세요!
            </HighlightText>
          </InfoBox>
        }
      />

      {/* 커리큘럼 */}
      <SectionTitle>커리큘럼</SectionTitle>

      {/* 반도체 소자 구조 */}
      <TwoColumnLayout
        leftWidth="37.5%"
        rightWidth="62.5%"
        leftContent={
          <ImageWithCaption
            src="/academy1/images/13.png"
            alt="반도체 소자 구조"
            width="336px"
          />
        }
        rightContent={
          <>
            <SectionTitle level={2}>
              반도체 소자 구조, 동작 및 특성
            </SectionTitle>
            <Paragraph>
              반도체 소자의 구조와 동작 원리를 이해하고, 소자의 특성을 분석하는
              실습을 진행합니다.
            </Paragraph>
            <Paragraph>- 훈련시간 : 18h (3 Days)</Paragraph>
            <ExpandableSection summary="세부내용">
              <ul className={styles.bulletedList}>
                <li style={{ listStyleType: "disc" }}>
                  반도체 소자의 기본 구조
                  <ul>
                    <li style={{ listStyleType: "circle" }}>
                      PN 접합 다이오드
                    </li>
                    <li style={{ listStyleType: "circle" }}>MOSFET 구조</li>
                    <li style={{ listStyleType: "circle" }}>BJT 구조</li>
                  </ul>
                </li>
                <li style={{ listStyleType: "disc" }}>
                  반도체 소자의 동작 원리
                  <ul>
                    <li style={{ listStyleType: "circle" }}>
                      에너지 밴드 이론
                    </li>
                    <li style={{ listStyleType: "circle" }}>캐리어의 이동</li>
                    <li style={{ listStyleType: "circle" }}>전류-전압 특성</li>
                  </ul>
                </li>
                <li style={{ listStyleType: "disc" }}>
                  반도체 소자의 특성 분석
                  <ul>
                    <li style={{ listStyleType: "circle" }}>문턱전압</li>
                    <li style={{ listStyleType: "circle" }}>전류 구동능력</li>
                    <li style={{ listStyleType: "circle" }}>누설전류</li>
                  </ul>
                </li>
              </ul>
            </ExpandableSection>
          </>
        }
      />
      {/* 아날로그 회로 설계 */}
      <TwoColumnLayout
        leftWidth="37.5%"
        rightWidth="62.5%"
        leftContent={
          <ImageWithCaption
            src="/academy1/images/12.png"
            alt="아날로그 회로 설계"
            width="336px"
          />
        }
        rightContent={
          <>
            <SectionTitle level={2}>
              아날로그 회로 설계 및 시뮬레이션
            </SectionTitle>
            <Paragraph>
              기본적인 아날로그 회로부터 복잡한 증폭기까지, PSpice를 활용한
              실습을 통해 아날로그 회로 설계 능력을 향상시킵니다.
            </Paragraph>
            <Paragraph>- 훈련시간 : 24h (4 Days)</Paragraph>
            <ExpandableSection summary="세부내용">
              <ul className={styles.bulletedList}>
                <li style={{ listStyleType: "disc" }}>
                  기본 아날로그 회로
                  <ul>
                    <li style={{ listStyleType: "circle" }}>전압 분배기</li>
                    <li style={{ listStyleType: "circle" }}>전류 미러</li>
                    <li style={{ listStyleType: "circle" }}>차동 증폭기</li>
                  </ul>
                </li>
                <li style={{ listStyleType: "disc" }}>
                  연산 증폭기 설계
                  <ul>
                    <li style={{ listStyleType: "circle" }}>입력단 설계</li>
                    <li style={{ listStyleType: "circle" }}>이득단 설계</li>
                    <li style={{ listStyleType: "circle" }}>출력단 설계</li>
                  </ul>
                </li>
                <li style={{ listStyleType: "disc" }}>
                  PSpice 시뮬레이션
                  <ul>
                    <li style={{ listStyleType: "circle" }}>DC 분석</li>
                    <li style={{ listStyleType: "circle" }}>AC 분석</li>
                    <li style={{ listStyleType: "circle" }}>과도 응답 분석</li>
                  </ul>
                </li>
              </ul>
            </ExpandableSection>
          </>
        }
      />

      {/* 디지털 회로 설계 */}
      <TwoColumnLayout
        leftWidth="37.5%"
        rightWidth="62.5%"
        leftContent={
          <ImageWithCaption
            src="/academy1/images/11.png"
            alt="디지털 회로 설계"
            width="336px"
          />
        }
        rightContent={
          <>
            <SectionTitle level={2}>디지털 회로 설계 및 검증</SectionTitle>
            <Paragraph>
              Verilog HDL을 사용한 디지털 회로 설계와 Quartus를 이용한 FPGA 구현
              실습을 진행합니다.
            </Paragraph>
            <Paragraph>- 훈련시간 : 18h (3 Days)</Paragraph>
            <ExpandableSection summary="세부내용">
              <ul className={styles.bulletedList}>
                <li style={{ listStyleType: "disc" }}>
                  Verilog HDL 기초
                  <ul>
                    <li style={{ listStyleType: "circle" }}>모듈 선언</li>
                    <li style={{ listStyleType: "circle" }}>조합 회로 설계</li>
                    <li style={{ listStyleType: "circle" }}>순차 회로 설계</li>
                  </ul>
                </li>
                <li style={{ listStyleType: "disc" }}>
                  디지털 회로 설계
                  <ul>
                    <li style={{ listStyleType: "circle" }}>카운터</li>
                    <li style={{ listStyleType: "circle" }}>FSM</li>
                    <li style={{ listStyleType: "circle" }}>메모리</li>
                  </ul>
                </li>
                <li style={{ listStyleType: "disc" }}>
                  FPGA 구현
                  <ul>
                    <li style={{ listStyleType: "circle" }}>합성</li>
                    <li style={{ listStyleType: "circle" }}>배치 및 배선</li>
                    <li style={{ listStyleType: "circle" }}>타이밍 분석</li>
                  </ul>
                </li>
              </ul>
            </ExpandableSection>
          </>
        }
      />

      {/* 강사진 소개 */}
      <SectionTitle>
        전원 S전자 출신의 전문 강사진
        <br />
        반도체 설계 분야 현업 노하우를 그대로!
      </SectionTitle>

      <Paragraph>
        S전자 반도체 패널 설계 및 면접 위원으로 10년 이상 근무한 강사진부터,
        12년 이상 반도체 연구소에서 근무 후 갓 퇴사한 강사진까지! 반도체 설계
        핵심 전문가들로 강사진을 구성했습니다.
      </Paragraph>

      <InstructorProfile
        image="/academy1/images/5.png"
        name="안○○ 강사"
        title="S전자 반도체 Panel DDI 설계팀 / 면접위원 출신"
        education="성균관대학교 전자전기 박사"
      />

      <InstructorProfile
        image="/academy1/images/4.png"
        name="윤△△ 강사"
        title="S전자 반도체 연구소 플래시 개발 / 레이아웃 담당 출신"
        education="서울대학교 전기컴퓨터 박사"
      />
      {/* FAQ 섹션 */}
      <SectionTitle>FAQ</SectionTitle>

      <ExpandableSection
        summary={
          <>
            <HighlightText color="purple">K-디지털 트레이닝</HighlightText>이
            뭔가요?
          </>
        }
      >
        <Paragraph>
          <HighlightText color="gray">
            ✅ ｢한국판 뉴딜｣ 일환으로 고용노동부에서 추진 중인 K-디지털
            트레이닝은, 디지털 분야 기업들과 혁신 훈련기관이 협약을 맺고 함께
            설계된 교육 과정 입니다.
          </HighlightText>
        </Paragraph>
      </ExpandableSection>

      <ExpandableSection
        summary={
          <HighlightText color="pink">
            <strong>어떻게 무료로 제공할 수 있는 걸까요?</strong>
          </HighlightText>
        }
      >
        <Paragraph>
          산업인력공단 주관 하에 성균관대학교에서 운영되는 재직자 과정은 각
          기업에서 납부하고 있는 고용보험기금을 통해 운영됩니다.
          <br />
          <br />
          <HighlightText color="gray">
            ✅ 고용보험에 가입된 재직자라면 누구나 무료로 수강하실 수 있습니다.
          </HighlightText>
        </Paragraph>
      </ExpandableSection>

      <ExpandableSection
        summary={
          <HighlightText color="blue">
            <strong>국민내일배움카드는 어떻게 발급받나요?</strong>
          </HighlightText>
        }
      >
        <Paragraph>
          <strong>1단계: HRD-Net 회원가입</strong>
          <br />
          - HRD-Net (www.hrd.go.kr) 접속 후 회원가입
          <br />
          <br />
          <strong>2단계: 국민내일배움카드 신청</strong>
          <br />
          - [로그인] → [마이페이지] → [내일배움카드 신청]
          <br />
          <br />
          <strong>3단계: 고용센터 방문</strong>
          <br />
          - 신분증 지참하여 가까운 고용센터 방문
          <br />
          <br />
          <HighlightText color="gray">
            ✅ 온라인 신청도 가능합니다!
            <br />✅ 카드 발급까지 약 2주 소요됩니다.
          </HighlightText>
        </Paragraph>
      </ExpandableSection>

      <ExpandableSection
        summary={
          <HighlightText color="default">
            <strong>수료 기준이 어떻게 되나요?</strong>
          </HighlightText>
        }
      >
        <Paragraph>
          <strong>출석률 80% 이상</strong>시 수료할 수 있습니다.
          <br />
          <br />
          <HighlightText color="gray">
            ✅ 총 10주 과정 중 최대 2주까지 결석 가능
            <br />✅ 출석률 미달 시 수료증이 발급되지 않습니다.
          </HighlightText>
        </Paragraph>
      </ExpandableSection>

      <ExpandableSection
        summary={
          <HighlightText color="purple">
            <strong>수료 후 취업 지원도 해주시나요?</strong>
          </HighlightText>
        }
      >
        <Paragraph>
          <strong>네, 물론입니다!</strong>
          <br />
          <br />
          성균관대학교는 삼성전자를 비롯한 주요 반도체 기업들과 긴밀한 협력
          관계를 맺고 있습니다. 우수 수료생의 경우, 협력 기업 채용 시 추천서를
          발급해드립니다.
          <br />
          <br />
          <HighlightText color="gray">
            ✅ 수료생 취업 현황
            <br />
            - 삼성전자: 15명
            <br />
            - SK하이닉스: 8명
            <br />- 기타 반도체 설계 전문 기업: 12명
          </HighlightText>
        </Paragraph>
      </ExpandableSection>

      {/* 대학 소개 */}
      <SectionTitle>
        성균관대학교,
        <br />
        국내 최고 명문 반도체 교육 대학
      </SectionTitle>

      <Paragraph>
        성균관대학교는 국내 최초로 삼성전자와 공동으로 시스템반도체공학과를
        신설하여, 회로 및 소자 설계, 시스템 아키텍처, 시스템 소프트웨어 등 국내
        최고의 반도체 설계 전문 교육 역량을 보유하고 있습니다.
      </Paragraph>

      {/* 푸터 */}
      <Footer>
        <CompanyInfo
          name="몬스테라텍"
          email="lessingohoi@monsteraedu.co.kr"
          address="(06045) 서울특별시 강남구 학동로161 4층, 406호"
          phone="010-9936-3490"
        />
      </Footer>
    </PageLayout>
  );
}
