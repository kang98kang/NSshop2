const parseMarkdown = (markdown: string) => {
  const lines = markdown.split("\n");
  let isTable = false;
  let tableHeader: string[] = [];
  let tableRows: string[][] = [];

  const parseInlineMarkdown = (text: string) => {
    let parsedText = text.replace(
      /\*\*(.*?)\*\*/g,
      (_, match) => `<strong>${match}</strong>`
    );
    parsedText = parsedText.replace(
      /\*(.*?)\*/g,
      (_, match) => `<em>${match}</em>`
    );
    return parsedText;
  };

  return lines.map((line, index) => {
    if (line.startsWith("|") && line.endsWith("|")) {
      const cells = line
        .split("|")
        .slice(1, -1)
        .map((cell) => cell.trim());

      if (!isTable) {
        isTable = true;
        tableHeader = cells;
        return null;
      } else {
        tableRows.push(cells);
        return null;
      }
    } else if (isTable && line.trim() === "") {
      isTable = false;
      const tableElement = (
        <table
          key={`table-${index}`}
          className="table-auto my-4 w-full border-collapse border border-gray-300"
        >
          <thead>
            <tr>
              {tableHeader.map((header, headerIndex) => (
                <th
                  key={headerIndex}
                  className="border px-4 py-2 text-left bg-gray-100"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: parseInlineMarkdown(header),
                    }}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border px-4 py-2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: parseInlineMarkdown(cell),
                      }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
      tableHeader = [];
      tableRows = [];
      return tableElement;
    }

    if (line.startsWith("# ")) {
      return (
        <h1 key={index} className="text-4xl font-bold my-4">
          <span
            dangerouslySetInnerHTML={{
              __html: parseInlineMarkdown(line.slice(2)),
            }}
          />
        </h1>
      );
    } else if (line.startsWith("## ")) {
      return (
        <h2 key={index} className="text-3xl font-semibold my-4">
          <span
            dangerouslySetInnerHTML={{
              __html: parseInlineMarkdown(line.slice(3)),
            }}
          />
        </h2>
      );
    } else if (line.startsWith("### ")) {
      return (
        <h3 key={index} className="text-2xl font-semibold my-2">
          <span
            dangerouslySetInnerHTML={{
              __html: parseInlineMarkdown(line.slice(4)),
            }}
          />
        </h3>
      );
    } else if (line.startsWith("- ")) {
      return (
        <li key={index} className="list-disc ml-6">
          <span
            dangerouslySetInnerHTML={{
              __html: parseInlineMarkdown(line.slice(2)),
            }}
          />
        </li>
      );
    } else if (line.trim() === "") {
      return <br key={index} />;
    } else {
      return (
        <p key={index} className="text-base my-2">
          <span
            dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(line) }}
          />
        </p>
      );
    }
  });
};

const PrivacyPolicy: React.FC = () => {
  const markdownContent = `
# 개인정보 처리방침

### 제1조 개인정보의 수집 ∙ 이용 목적 및 항목

회사는 다음과 같이 서비스 이용계약의 성립 및 이행에 필요한 최소한의 개인정보를 수집하며, 회원가입시 개인정보수집 · 이용 동의에 대한 내용을 제공하고 회원이 '동의' 버튼을 클릭하면 개인정보 수집 · 이용에 대해 동의한 것으로 봅니다.

**1. [필수] 개인정보 수집 및 이용 동의**

| **수집목적** | **수집항목** | **보유 및 이용기간** |
| SNS 계정을 통한 회원 가입 및 회원 관리 | 카카오 - 이름, 이메일 주소, 닉네임 <br> 구글 - 이름, 이메일 주소, 언어 환경설정 <br> 네이버 - 이름, 이메일 주소 | 회원 탈퇴 시 까지 |
| 서비스 개선 및 안정화, 최적화 콘텐츠 및 서비스 제공, 맞춤형 광고 및 콘텐츠 제공, 서비스 부정 이용 방지 | 성별, 연령, 사용자 기기 정보, 서비스 이용(정지) 기록, 접속 로그, 쿠키, 접속 IP 정보 | 회원 탈퇴 시 까지 |
| 고객센터 문의 응대 | 이름, 생년월일, 이메일주소, 휴대전화번호 | 3년 |
| 맞춤형 추천 서비스 제공 | 성별, 연령, 서비스 이용기록, 디바이스 토큰 | 회원 탈퇴 시 까지 |

**2. [선택] 개인정보 수집 및 이용 동의**

| **수집 목적** | **수집 항목** | **보유 및 이용 기간** |
| 서비스 / 업데이트 정보 제공 | 성별, 연령, 서비스 이용기록, 디바이스 토큰 | 동의 철회 또는 회원 탈퇴시까지 |

신작, 인기, 추천 콘텐츠 안내 및 이벤트, 마케팅 정보 안내 등을 주 목적으로 하며 수신 동의 시 메일, 문자 메시지, 푸시 알림에 수신 동의 처리 됩니다. 동의하지 않으셔도 서비스 이용이 가능하며 동의하신 이후에도 정보 수신 시 안내에 따라 수신 동의를 철회할 수 있습니다.

**3. 기타 수집 항목**

가. 서비스 이용 과정에서 아래와 같은 정보들이 생성되어 수집될 수 있습니다.
- PC : PC MacAddress, PC 사양정보, 브라우저 정보, 기타 서비스 이용 시 사용되는 프로그램 버전 정보
- 휴대전화(스마트폰) & 스마트OS 탑재 모바일 기기(Tablet PC 등) : 모델명, 기기별 고유번호(UDID,IMEI 등), OS정보, 이동통신사, 구글/애플 광고 ID
- 기타 정보 : 서비스 이용(정지) 기록, 접속 로그, 쿠키, 접속 IP정보
    
    나. 자동 생성에 의해 수집되는 정보는 개인을 식별할 수 없는 형태이며, 회사는 수집된 정보를 활용하여 개인을 식별하기 위한 활동을 하지 않습니다.
    
    다. 자동 생성에 의해 수집되는 정보에 대한 내용과 수집 거부 방법은 제9조 및 제10조를 참고하시기 바랍니다.
    
**4. 회사는 다음과 같은 방식으로 개인정보를 수집합니다.**
- 회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해 동의를 하고 직접 정보를 입력하여 수집
- 고객센터를 통한 상담 과정에서 웹페이지, 메일, 팩스, 전화 등을 통해 수집
- 제휴 회사 및 단체로부터의 제공에 의한 수집
- 기기정보와 같은 생성정보는 PC웹, 모바일 웹/앱 이용 과정에서 자동으로 생성되어 수집
- 온라인, 오프라인에서 진행되는 이벤트 등을 통해 추가 개인정보 수집 : 해당 개인정보 수집 시점에 개인정보 수집 및 이용 동의를 받습니다.

**5. 회사는 기본적 인권침해의 우려가 있는 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및 성생활 등)를 요구하지 않으며, 위의 항목 이외에 다른 어떠한 목적으로도 수집, 사용하지 않습니다.**

**6. 서비스 이용 시 생성된 대화 내역은 서비스 개선 및 목적으로 수집할 수 있습니다.**

### 제2조 개인정보의 보관기간 및 이용기간

**1. 회원의 개인정보는 수집목적 또는 제공받은 목적의 달성, 동의 철회 또는 회원탈퇴 시까지 보관 및 이용됩니다. 다만, 개인정보의 계속 보관 ∙ 이용에 관한 별도의 동의를 얻은 경우 또는 관계법령에 따라 보관 의무가 주어진 경우에는 예외로 합니다.**

가. 회원의 개인정보는 수집목적 또는 제공받은 목적의 달성, 동의 철회 또는 회원탈퇴 시까지 보관 및 이용됩니다. 다만, 개인정보의 계속 보관 ∙ 이용에 관한 별도의 동의를 얻은 경우 또는 관계법령에 따라 보관 의무가 주어진 경우에는 예외로 합니다.
- 회원가입 및 서비스 이용에 관한 기록 : 회원탈퇴일까지
    
나. 관계법령에 따라 보관 의무가 주어진 경우(단, 아래에 한정되지 않음)
- 계약 또는 청약철회 등에 관한 기록: 5년(전자상거래 등에서의 소비자보호에 관한 법률)
- 대금결제 및 재화의 공급에 관한 기록: 5년(전자상거래 등에서의 소비자보호에 관한 법률)
- 소비자의 불만 또는 분쟁처리에 관한 기록: 3년(전자상거래 등에서의 소비자보호에 관한 법률)
- 웹사이트 방문기록: 3개월(통신비밀보호법)
    
다. 회사 내부 방침에 의한 경우    
- 회사의 이용약관이나 법령에 위반하여 회사의 서비스에 손해를 끼친 회원의 불법적인 서비스 이용 등으로 인해 회사에 물의 회원가입 및 서비스 이용에 관한 기록

**2. 회사는 정보 복구 요청 대응 또는 다른 회원 보호를 위하여 내부 방침에 따라 다음과 같이 회원의 개인정보를 보관합니다.**
- 회사의 이용약관이나 법령을 위반한 회원의 개인정보 : 사법기관에 수사 의뢰를 하거나 다른 회원을 보호를 목적으로 1년 간 보관
- 서비스 이용 시 생성된 대화 내역 : 서비스 품질 개선을 목적으로 1년 간 보관
    

### 제3조 개인정보의 파기절차 및 방법

회사는 수집한 개인정보의 이용목적이 달성된 후 별도의 DB로 옮겨 보관기간 및 이용기간에 따라 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.

1. 파기절차 : 회원이 서비스 가입 등을 위해 기재한 개인정보는 서비스 해지 등 이용목적이 달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정기간(개인정보 보관기간 및 이용기간 참조) 동안 저장 보관된 후 삭제하거나 파기

2. 파기방법 : 서면양식에 기재하거나, 종이에 출력된 개인정보는 분쇄기로 분쇄하여 파기하고, 전자적 파일형태로 저장된 개인 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
  `;

  return (
    <div className="container mx-auto p-4 mt-5 prose">
      {parseMarkdown(markdownContent)}
    </div>
  );
};

export default PrivacyPolicy;
