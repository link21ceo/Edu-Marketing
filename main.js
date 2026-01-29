const programs = [
  {
    src: "images/img1.png",
    title: "AI-900 국제 인증 자격증 과정 (전남대)",
  },
  {
    src: "images/img2.png",
    title: "생성형 AI 프롬프트 전문교육과정 (전남대)",
  },
  {
    src: "images/img3.png",
    title: "AI로 확장되는 동물자원학 - TOEIC 900 보다 MCF AI-900 (전남대)",
  },
  {
    src: "images/img4.jpg",
    title: "IT 시스템관리 - GPT로 기획·설계해서 칼퇴하세요 (산기협)",
  },
  {
    src: "images/img5.jpg",
    title: "TOEIC 900 보다 MCF AI-900 (동강대)",
  },
  {
    src: "images/img6.png",
    title: "시험만 보고 끝? NO - 실무에서 바로 쓰는 실전형 AI-900 (호남대)",
  },
  {
    src: "images/img7.png",
    title:
      "광주에서 먼저 바꾸는 일상! 오늘 배워 오늘 적용하는 생활 AI (전남대 RISE)",
  },
  {
    src: "images/img8.png",
    title: "AI와 함께하는 행정혁신 - AI 비서 실전 구축 과정 (전남대 재직자)",
  },
  {
    src: "images/img9.png",
    title: "ChatGPT를 활용한 업무시간 단축과 AX 기반 업무혁신 (재직자)",
  },
  {
    src: "images/img10.png",
    title: "생성형 AI 리더 교육 강사 과정",
  },
];

// 커리큘럼 데이터
const curriculumData = {
  ai900: {
    brand: "ms",
    brandName: "Microsoft",
    title: "AI-900 : Azure AI Fundamentals",
    subtitle: "인공지능 입문 · 머신러닝 · 컴퓨터 비전 · 자연어 처리",
    duration: "4일 과정",
    hours: "총 20시간",
    certification: "자격증 연계",
    scheduleHTML: `
    <thead><tr><th>시간</th><th>1일차</th><th>2일차</th><th>3일차</th><th>4일차</th></tr></thead>
    <tbody>
      <tr><td class="time-col">10:00~12:00</td><td>오리엔테이션<td>컴퓨터 비전</td><td rowspan="4" class="highlight">문제 풀이</td><td class="highlight">AI-900<br>시험 응시</td></tr>
      <tr><td class="time-col">13:00~15:00</td><td rowspan="2">인공지능 이해하기</td><td>자연어 처리</td></tr>
      <tr><td class="time-col">15:00~16:30</td><td rowspan="2">대화형 AI</td></tr>
      <tr><td class="time-col">16:30~17:00</td><td>머신러닝</td></tr>
    </tbody>`,
    contents: [
      "인공지능 입문 및 기본 개념",
      "머신러닝 이해 및 활용",
      "컴퓨터 비전 기초",
      "자연어 처리(NLP)",
      "AI-900 문제 풀이 및 시험 응시",
    ],
    footer: "AI-900 응시 지원",
  },
  az900: {
    brand: "ms",
    brandName: "Microsoft",
    title: "AZ-900 : Azure Fundamentals",
    duration: "4일 과정",
    hours: "총 20시간",
    certification: "자격증 연계",
    subtitle: "클라우드 개념 · Azure 워크로드 · 솔루션 · 보안",
    scheduleHTML: `
    <thead><tr><th>시간</th><th>1일차</th><th>2일차</th><th>3일차</th><th>4일차</th></tr></thead>
    <tbody>
      <tr><td class="time-col">10:00~12:00</td><td>오리엔테이션</td><td>애저 시큐리티</td><td rowspan="4" class="highlight">문제 풀이</td><td class="highlight">AZ-900<br>시험 응시</td></tr>
      <tr><td class="time-col">13:00~15:00</td><td>클라우드 개념</td><td  rowspan="2">애저 아이덴티티,<br>가버넌스,<br>프라이버시,<br>컴플라이언스</td></tr>
      <tr><td class="time-col">15:00~16:30</td><td>애저 워크로드</td></tr>
      <tr><td class="time-col">16:30~17:00</td><td>애저 솔루션</td><td>애저 가격정책 및<br>라이프 사이클</td></tr>
    </tbody>`,
    contents: [
      "클라우드 개념 이해",
      "Azure 워크로드 및 솔루션",
      "Azure 시큐리티 기초",
      "Azure 아이덴티티, 가버넌스",
      "AZ-900 문제 풀이 및 시험 응시",
    ],
    footer: "AZ-900 응시 지원",
  },
  dp900: {
    brand: "ms",
    brandName: "Microsoft",
    title: "DP-900 : Azure Data Fundamentals",
    duration: "4일 과정",
    hours: "총 20시간",
    certification: "자격증 연계",
    subtitle: "빅데이터 입문 · 관계형/비관계형 데이터 · Cosmos DB",
    scheduleHTML: `
    <thead><tr><th>시간</th><th>월</th><th>화</th><th>수</th><th>목</th></tr></thead>
    <tbody>
      <tr><td class="time-col">10:00~12:00</td><td>오리엔테이션</td><td>관계형 데이터 탐색</td><td rowspan="4" class="highlight">문제 풀이</td><td class="highlight">DP-900<br>시험 응시</td></tr>
      <tr><td class="time-col">13:00~15:00</td><td>빅데이터 입문</td><td>비관계형 데이터 탐색</td></tr>
      <tr><td class="time-col">15:00~16:30</td><td>핵심 데이터 개념</td><td>Azure Cosmos DB</td></tr>
      <tr><td class="time-col">16:30~17:00</td><td>데이터 역할 및<br>서비스 검색</td><td>데이터 웨어하우징</td></tr>
    </tbody>`,
    contents: [
      "빅데이터 입문 및 핵심 개념",
      "관계형 데이터 탐색",
      "비관계형 데이터 탐색",
      "Azure Cosmos DB",
      "DP-900 문제 풀이 및 시험 응시",
    ],
    footer: "DP-900 응시 지원",
  },
  sc900: {
    brand: "ms",
    brandName: "Microsoft",
    title: "SC-900 : Security Fundamentals",
    duration: "4일 과정",
    hours: "총 20시간",
    certification: "자격증 연계",
    subtitle: "보안 및 규정 준수 · Microsoft Entra · 보안 솔루션",
    scheduleHTML: `
    <thead><tr><th>시간</th><th>월</th><th>화</th><th>수</th><th>목</th></tr></thead>
    <tbody>
      <tr><td class="time-col">10:00~12:00</td><td>오리엔테이션</td><td>MS 보안 솔루션의<br>기능</td><td rowspan="4" class="highlight">문제 풀이</td><td class="highlight">SC-900<br>시험 응시</td></tr>
      <tr><td class="time-col">13:00~15:00</td><td rowspan="2">보안 및 규정 준수<br>및 ID의 개념 설명</td><td>MS 보안 솔루션의<br>기능</td></tr>
      <tr><td class="time-col">15:00~16:30</td><td rowspan="2">Microsoft<br>
규정 준수<br>솔루션의 기능</tr>
      <tr><td class="time-col">16:30~17:00</td><td>Microsoft Entra의<br>기능</td></tr>
    </tbody>`,
    contents: [
      "보안 및 규정 준수 개념",
      "ID(Identity) 기본 개념",
      "Microsoft Entra 기능",
      "Microsoft 보안 솔루션",
      "SC-900 문제 풀이 및 시험 응시",
    ],
    footer: "SC-900 응시 지원",
  },
  illustrator: {
    brand: "adobe",
    brandName: "Adobe",
    title: "ACP Illustrator",
    duration: "4일 과정",
    hours: "총 20시간",
    certification: "자격증 연계",
    subtitle: "벡터 그래픽 · 패스 드로잉 · 텍스트 편집 · 심볼과 패턴",
    scheduleHTML: `
    <thead><tr><th>시간</th><th>월</th><th>화</th><th>수</th><th>목</th></tr></thead>
    <tbody>
      <tr><td class="time-col">10:00~12:00</td><td>오리엔테이션</td><td>텍스트 편집과<br>스타일링</td><td rowspan="4" class="highlight">문제 풀이</td><td  class="highlight">Illustrator<br>시험 응시</td></tr>
      <tr><td class="time-col">13:00~15:00</td><td rowspan="2">일러스트<br>기초 교육</td><td>심볼과 패턴</td></tr>
      <tr><td class="time-col">15:00~16:30</td><td rowspan="2">이미지 편집과<br>트레이싱 및<br>다양한 효과</td></tr>
      <tr><td class="time-col">16:30~17:00</td><td>도형 및 패스와<br>곡선 그리기</td></tr>
    </tbody>`,
    contents: [
      "일러스트 기본 개요 및 인터페이스",
      "기본 도형 그리기 및 패스와 곡선",
      "텍스트 편집과 스타일링",
      "심볼과 패턴 활용",
      "ACP Illustrator 시험 응시",
    ],
    footer: "ACP Illustrator 응시 지원",
  },
  photoshop: {
    brand: "adobe",
    brandName: "Adobe",
    title: "ACP Photoshop",
    duration: "4일 과정",
    hours: "총 20시간",
    certification: "자격증 연계",
    subtitle: "이미지 편집 · 레이어 조작 · 합성/보정 · 필터 효과",
    scheduleHTML: `
    <thead><tr><th>시간</th><th>월</th><th>화</th><th>수</th><th>목</th></tr></thead>
    <tbody>
      <tr><td class="time-col">10:00~12:00</td><td>오리엔테이션</td><td>텍스트 편집<br>및 타이포그래피</td><td rowspan="4" class="highlight">문제 풀이</td><td class="highlight">Photoshop<br>시험 응시</td></tr>
      <tr><td class="time-col">13:00~15:00</td><td rowspan="2">포토샵<br>기초 교육</td><td>이미지 합성과 보정</td></tr>
      <tr><td class="time-col">15:00~16:30</td><td>필터와 효과 활용</td></tr>
      <tr><td class="time-col">16:30~17:00</td><td>이미지 편집 및<br>선택 도구와<br>레이어 조작</td><td>로고 및<br>아이콘 디자인</td></tr>
    </tbody>`,
    contents: [
      "포토샵 기본 개념 및 인터페이스",
      "이미지 편집 및 레이어 조작",
      "이미지 합성과 보정",
      "필터와 효과 활용",
      "ACP Photoshop 시험 응시",
    ],
    footer: "ACP Photoshop 응시 지원",
  },
  indesign: {
    brand: "adobe",
    brandName: "Adobe",
    title: "ACP InDesign",
    duration: "4일 과정",
    hours: "총 20시간",
    certification: "자격증 연계",
    subtitle: "레이아웃 설정 · 아이덴티티 편집 · 페이지물 디자인",
    scheduleHTML: `
    <thead><tr><th>시간</th><th>월</th><th>화</th><th>수</th><th>목</th></tr></thead>
    <tbody>
      <tr><td class="time-col">10:00~12:00</td><td>오리엔테이션</td><td>견본 색상 <br>만들기</td><td rowspan="4" class="highlight">문제 풀이</td><td class="highlight">InDesign<br>시험 응시</td></tr>
      <tr><td class="time-col">13:00~15:00</td><td rowspan="2">인디자인<br>기초 교육</td><td rowspan="2">인터페이스 및<br>실전 학습</td></tr>
      <tr><td class="time-col">15:00~16:30</td></tr>
      <tr><td class="time-col">16:30~17:00</td><td>레이아웃 옵션<br>및 설정</td><td>아이덴티티 /<br>페이지물<br>편집디자인</td></tr>
    </tbody>`,
    contents: [
      "인디자인 특성과 화면 활용법",
      "레이아웃 옵션, 도련, 여백 설정",
      "견본 색상 만들기",
      "아이덴티티 편집디자인",
      "ACP InDesign 시험 응시",
    ],
    footer: "ACP InDesign 응시 지원",
  },
  premiere: {
    brand: "adobe",
    brandName: "Adobe",
    title: "ACP Premiere Pro",
    duration: "4일 과정",
    hours: "총 20시간",
    certification: "자격증 연계",
    subtitle: "영상 편집 · 오디오 편집 · 타이틀 · 내보내기",
    scheduleHTML: `
    <thead><tr><th>시간</th><th>월</th><th>화</th><th>수</th><th>목</th></tr></thead>
    <tbody>
      <tr><td class="time-col">10:00~12:00</td><td>오리엔테이션</td><td rowspan="2">영상 편집 기본,<br>효과 및 전환</td><td rowspan="4" class="highlight">문제 풀이</td><td class="highlight">Premiere<br>시험 응시</td></tr>
      <tr><td class="time-col">13:00~15:00</td><td rowspan="2">Premiere<br>기초 교육</td></tr>
      <tr><td class="time-col">15:00~16:30</td><td>오디오 편집</td></tr>
      <tr><td class="time-col">16:30~17:00</td><td>프로젝트 및<br>시퀀스 관리</td><td>타이틀 및 텍스트 /<br>내보내기 및 공유</td></tr>
    </tbody>`,
    contents: [
      "프리미어 기본 개요 및 인터페이스",
      "프로젝트 및 시퀀스 관리",
      "영상 편집 기본, 효과 및 전환",
      "오디오 편집, 타이틀, 내보내기",
      "ACP Premiere 시험 응시",
    ],
    footer: "ACP Premiere Pro 응시 지원",
  },
  prompt1: {
    brand: "prompt",
    brandName: "prompt",
    title: "대학생을 위한 AI 프롬프트 과정",
    duration: "1일 과정",
    hours: "총 8시간",
    certification: "실무 역량 강화",
    subtitle:
      "생성형 AI 기본 개념 · 프롬프트 구조화 · 자기소개서/포트폴리오 실습",
    scheduleHTML: `
      <thead><tr><th>시간</th><th>교육 내용</th></tr></thead>
      <tbody>
        <tr><td class="time-col">09:00~10:00</td><td>생성형 AI 기본 개념 이해</td></tr>
        <tr><td class="time-col">10:00~11:00</td><td>프롬프트 구조화 설계</td></tr>
        <tr><td class="time-col">11:00~12:00</td><td>자기소개서 질문 구조 설계</td></tr>
        <tr><td class="time-col">12:00~13:00</td><td>점심시간</td></tr>
        <tr><td class="time-col">13:00~14:30</td><td>자기소개서 프롬프트 실습</td></tr>
        <tr><td class="time-col">14:30~16:00</td><td>포트폴리오 프롬프트 실습</td></tr>
        <tr><td class="time-col">16:00~17:00</td><td>개인 맞춤 프롬프트 완성</td></tr>
        <tr><td class="time-col">17:00~18:00</td><td>결과 공유 및 피드백</td></tr>
      </tbody>`,
    contents: [
      "생성형 AI 및 프롬프트 기본 개념 이해",
      "프롬프트 구조화 설계",
      "자기소개서 질문 구조 설계",
      "자기소개서 프롬프트 실습",
      "포트폴리오 프롬프트 실습",
      "개인 맞춤 프롬프트 완성 및 피드백",
    ],
    footer: "취업 준비에 바로 활용 가능한 자기소개서·포트폴리오 챗봇 제공",
  },
  prompt2: {
    brand: "prompt",
    brandName: "prompt",
    title: "전공 연계 AI 프롬프트 활용 과정",
    duration: "1일 과정",
    hours: "총 8시간",
    certification: "실무 역량 강화",
    subtitle: "전공별 AI 활용 사례 · 맞춤 프롬프트 구조 · 시나리오 기반 실습",
    scheduleHTML: `
      <thead><tr><th>시간</th><th>교육 내용</th></tr></thead>
      <tbody>
        <tr><td class="time-col">09:00~10:00</td><td>전공별 AI 활용 사례</td></tr>
        <tr><td class="time-col">10:00~11:00</td><td>전공 맞춤 프롬프트 구조</td></tr>
        <tr><td class="time-col">11:00~12:00</td><td>문제 정의 및 질문 설계</td></tr>
        <tr><td class="time-col">12:00~13:00</td><td>점심시간</td></tr>
        <tr><td class="time-col">13:00~14:30</td><td>전공 시나리오 프롬프트 실습</td></tr>
        <tr><td class="time-col">14:30~16:00</td><td>결과 고도화 프롬프트</td></tr>
        <tr><td class="time-col">16:00~17:00</td><td>전공별 프롬프트 완성</td></tr>
        <tr><td class="time-col">17:00~18:00</td><td>사례 공유 및 피드백</td></tr>
      </tbody>`,
    contents: [
      "전공별 생성형 AI 활용 사례 분석",
      "전공 맞춤 프롬프트 구조 설계",
      "문제 정의 및 질문 설계",
      "전공 시나리오 기반 프롬프트 실습",
      "결과 고도화 프롬프트 작성",
      "전공별 프롬프트 완성 및 피드백",
    ],
    footer: "경영, 공학, 디자인, 인문 등 전공별 맞춤 챗봇 제공",
  },
  // prompt3: {
  //   brand: "prompt",
  //   brandName: "글로벌 라이선스 + prompt",
  //   title: "글로벌 라이선스 + 프롬프트 융합 트랙",
  //   duration: "3일 과정",
  //   hours: "총 24시간",
  //   certification: "자격증 연계, 실무 역량 강화",
  //   subtitle: "프롬프트 실무 + 글로벌 라이선스 자격증 동시 취득 · 4일 과정",
  //   scheduleHTML: `
  //     <thead><tr><th>일차</th><th>교육 내용</th></tr></thead>
  //     <tbody>
  //       <tr><td class="time-col">1일차</td><td>생성형 AI 기본 개념 이해 / 프롬프트 구조화 설계 / 업무 시나리오 기반 프롬프트 제작 실습</td></tr>
  //       <tr><td class="time-col">2일차</td><td>산업·기업 현장 AI 기술 / 생성형 AI 기반 업무 자동화 전략 / 고급 프롬프트 설계 및 실무 적용</td></tr>
  //       <tr><td class="time-col">3일차</td><td>국제 라이선스 핵심 이론 정리 / 시험 유형 분석 및 기출 문제 풀이</td></tr>
  //       <tr><td class="time-col highlight">4일차</td><td class="highlight">글로벌 라이선스 시험 응시</td></tr>
  //     </tbody>`,
  //   contents: [
  //     "생성형 AI 기본 개념 및 프롬프트 구조화",
  //     "업무 시나리오 기반 프롬프트 제작 실습",
  //     "산업·기업 현장 AI 기술 활용",
  //     "생성형 AI 기반 업무 자동화 전략",
  //     "글로벌 라이선스 핵심 이론",
  //     "글로벌 라이선스 응시",
  //   ],
  //   footer: "프롬프트 실무 역량 + 글로벌 라이선스 동시 취득",
  // },
  autocad: {
    brand: "autodesk",
    brandName: "Autodesk",
    title: "ACU AutoCAD",
    duration: "4일 과정",
    hours: "총 20시간",
    certification: "자격증 연계",
    subtitle: "2D 도면 작성 · 좌표 활용 · 전개도/지적도 제작",
    scheduleHTML: `
    <thead><tr><th>시간</th><th>월</th><th>화</th><th>수</th><th>목</th></tr></thead>
    <tbody>
      <tr><td class="time-col">10:00~12:00</td><td>오리엔테이션</td><td rowspan="2">피나무라<br>디자이너로<br>전개도 제작</td><td rowspan="4" class="highlight">문제 풀이</td><td class="highlight">AutoCAD<br>시험 응시</td></tr>
      <tr><td class="time-col">13:00~15:00</td><td rowspan="2">AutoCAD<br>기초 교육 및<br>도형 그리기</td></tr>
      <tr><td class="time-col">15:00~16:30</td><td rowspan="2">지적도 작성<br>및 도면 배치 후<br>출력, 내보내기</td></tr>
      <tr><td class="time-col">16:30~17:00</td><td>생성된 객체를<br>이용한 활용법</td></tr>
    </tbody>`,
    contents: [
      "AutoCAD 인터페이스, 패널 사용법",
      "절대/상대/극좌표를 이용한 라인 그리기",
      "원, 타원, 사각형, 다각형",
      "전개도 만들기 및 지적도 작성",
      "ACU AutoCAD 시험 응시",
    ],
    footer: "ACU AutoCAD 응시 지원",
  },
  meta: {
    brand: "meta",
    brandName: "Meta",
    title: "Meta Digital Marketing Associate",
    duration: "4일 과정",
    hours: "총 20시간",
    certification: "자격증 연계",
    subtitle: "인스타그램 마케팅 · 콘텐츠 제작 · 메타 광고 설정",
    scheduleHTML: `
    <thead><tr><th>시간</th><th>월</th><th>화</th><th>수</th><th>목</th></tr></thead>
    <tbody>
      <tr><td class="time-col">10:00~12:00</td><td>오리엔테이션</td><td>인스타그램<br>콘텐츠 제작</td><td rowspan="4" class="highlight">문제 풀이</td><td class="highlight">MCDMA<br>시험 응시</td></tr>
      <tr><td class="time-col">13:00~15:00</td><td rowspan="2">인스타그램<br>마케팅 개요</td><td rowspan="2">메타 광고 개념<br>및 설정</td></tr>
      <tr><td class="time-col">15:00~16:30</td></tr>
      <tr><td class="time-col">16:30~17:00</td><td>인스타그램<br>마케팅 심화</td><td>메타 광고 개념<br>및 설정</td></tr>
    </tbody>`,
    contents: [
      "인스타그램 마케팅 개요",
      "인스타그램 콘텐츠 제작",
      "메타 광고 개념 및 설정",
      "인스타그램 마케팅 심화",
      "MCDMA 시험 응시",
    ],
    footer: "MCDMA 응시 지원",
  },
  unity: {
    brand: "unity",
    brandName: "Unity",
    title: "Unity Certified User",
    duration: "4일 과정",
    hours: "총 20시간",
    certification: "자격증 연계",
    subtitle: "Unity 환경 · 2D/3D 콘텐츠 제작 · C# 스크립트 기초",
    scheduleHTML: `
    <thead><tr><th>시간</th><th>월</th><th>화</th><th>수</th><th>목</th></tr></thead>
    <tbody>
      <tr><td class="time-col">10:00~12:00</td><td>오리엔테이션</td><td rowspan="2">시험대비<br>C# 스크립트<br>기초</td><td rowspan="4" class="highlight">문제 풀이</td><td class="highlight">UCU<br>시험 응시</td></tr>
      <tr><td class="time-col">13:00~15:00</td><td rowspan="2">GameObject와<br>Component<br>구조 이해</td></tr>
      <tr><td class="time-col">15:00~16:30</td><td rowspan="2">간단한 게임,<br>시뮬레이션<br>제작 실습</td></tr>
      <tr><td class="time-col">16:30~17:00</td><td>2D/3D 콘텐츠<br>제작 기초</td></tr>
    </tbody>`,
    contents: [
      "Unity 기본 환경 및 에디터 이해",
      "GameObject와 Component 구조",
      "2D/3D 콘텐츠 제작 기초",
      "C# 스크립트 기초",
      "UCU 시험 응시",
    ],
    footer: "UCU 응시 지원",
  },
  gail: {
    brand: "google",
    brandName: "Google Cloud",
    title: "Generative AI Leader",
    subtitle: "생성형 AI 비즈니스 혁신 · Google Cloud AI 제품 · 비즈니스 전략",
    duration: "4일 과정",
    hours: "총 20시간",
    certification: "자격증 연계",
    scheduleHTML: `
    <thead><tr><th>시간</th><th>월</th><th>화</th><th>수</th><th>목</th></tr></thead>
    <tbody>
      <tr>
        <td class="time-col">10:00~12:00</td>
        <td>오리엔테이션</td>
        <td>프롬프트<br>엔지니어링</td>
        <td rowspan="4" class="highlight">문제 풀이</td>
        <td class="highlight">Google 생성형<br>시험 응시</td>
      </tr>
      <tr>
        <td class="time-col">13:00~15:00</td>
        <td>생성형 AI 개론</td>
        <td>출력 개선 전략</td>
      </tr>
      <tr>
        <td class="time-col">15:00~16:30</td>
        <td>생성형 AI<br>비즈니스 사례</td>
                <td rowspan="2">생성형 AI 기반<br>콘텐츠 생성</td>
      </tr>
      <tr>
        <td class="time-col">16:30~17:00</td>
        <td>Google Cloud<br>AI 개요</td>
      </tr>
    </tbody>`,
    contents: [
      "생성형 AI 개요 및 비즈니스 혁신 사례",
      "Google Cloud AI 제품 (Gemini, NotebookLM, AI Studio)",
      "생성형 AI 핵심 이론 (AI, ML, 생성형 AI 원리)",
      "프롬프트 엔지니어링 기법 및 출력 개선 전략",
      "생성형 AI 에이전트 (조직 혁신 관점)",
      "Generative AI Leader 시험 응시",
    ],
    footer: "Google Generative AI Leader 국제 인증 자격 시험 응시 지원",
  },
};

// 커리큘럼 모달 열기
function openCurriculumModal(courseId) {
  const data = curriculumData[courseId];
  if (!data) return;

  document.getElementById("modalBrandTag").textContent = data.brandName;
  document.getElementById("modalBrandTag").className =
    "brand-tag " + data.brand;
  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalSubtitle").textContent = data.subtitle;
  document.getElementById("modalDuration").textContent = "📅 " + data.duration;
  document.getElementById("modalHours").textContent = "⏱️ " + data.hours;
  document.getElementById("modalCertification").textContent =
    "🎓 " + data.certification;
  document.getElementById("scheduleTable").innerHTML = data.scheduleHTML;
  document.getElementById("curriculumList").innerHTML = data.contents
    .map((item) => `<li>${item}</li>`)
    .join("");
  document.getElementById("modalFooter").innerHTML =
    `<strong>혜택　</strong> ${data.footer}`;

  document.getElementById("curriculumModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

// 커리큘럼 모달 닫기
function closeCurriculumModal(event) {
  document.getElementById("curriculumModal").classList.remove("active");
  document.body.style.overflow = "";
}

// 커리큘럼 탭 전환
function switchCurriculumTab(tab) {
  // 모든 탭 버튼 비활성화
  document
    .querySelectorAll(".curriculum-tab")
    .forEach((btn) => btn.classList.remove("active"));
  // 클릭한 탭 활성화
  document
    .querySelector(`.curriculum-tab[onclick="switchCurriculumTab('${tab}')"]`)
    .classList.add("active");
  // 모든 콘텐츠 숨기기
  document
    .querySelectorAll(".curriculum-content")
    .forEach((content) => content.classList.remove("active"));
  // 해당 콘텐츠 보이기
  document.getElementById(`tab-${tab}`).classList.add("active");
}

function openModal(index) {
  const modal = document.getElementById("modal");
  document.getElementById("modal-image").src = programs[index].src;
  document.getElementById("modal-title").textContent = programs[index].title;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal(event) {
  document.getElementById("modal").classList.remove("active");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeCurriculumModal();
  }
});

// 타이핑 효과
const typingText = "AI 실무";
const typingTarget = document.getElementById("typing-target");
let charIndex = 0;

function typeWriter() {
  if (charIndex < typingText.length) {
    typingTarget.textContent += typingText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 150);
  }
}

// 페이지 로드 시 순차 실행
window.addEventListener("load", () => {
  // 1.5초 후 타이핑 시작 (페이드인 완료 후)
  setTimeout(() => {
    typingTarget.classList.add("show");
    typeWriter();
  }, 1500);
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// 모든 카드에 observer 적용
document.querySelectorAll(".card").forEach((card) => {
  observer.observe(card);
});

function copyEmail(e) {
  e.preventDefault();
  navigator.clipboard.writeText("agaaga23@naver.com");
  alert("이메일 주소가 복사되었습니다!");
}
