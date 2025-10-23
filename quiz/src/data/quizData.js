const quizData = {
  categories: ["스트레스 유형", "성격 유형", "대처 방식", "자기관리 스타일"],
  quizzes: [
    // 스트레스 유형 (5문제)
    {
      id: 1,
      category: "스트레스 유형",
      difficulty: "쉬움",
      question: "스트레스를 받을 때 주로 어떤 행동을 하나요?",
      choices: [
        { text: "친구와 이야기한다", score: 1 },
        { text: "혼자 조용히 시간을 보낸다", score: 2 },
        { text: "운동이나 산책을 한다", score: 1 },
        { text: "스트레스를 무시하려고 한다", score: 4 },
      ],
    },
    {
      id: 2,
      category: "스트레스 유형",
      difficulty: "보통",
      question: "스트레스 상황에서 보통 어떻게 반응하나요?",
      choices: [
        { text: "즉시 해결책을 찾는다", score: 1 },
        { text: "감정을 억누르고 참고 넘긴다", score: 4 },
        { text: "감정을 표출하고 공유한다", score: 3 },
        { text: "잠시 회피하거나 관심을 돌린다", score: 2 },
      ],
    },
    {
      id: 3,
      category: "스트레스 유형",
      difficulty: "어려움",
      question: "스트레스를 받을 때 몸이 먼저 느끼는 증상은 무엇인가요?",
      choices: [
        { text: "두통이나 소화불량", score: 3 },
        { text: "가슴 두근거림", score: 2 },
        { text: "아무 느낌 없음", score: 1 },
        { text: "무기력감", score: 4 },
      ],
    },
    {
      id: 4,
      category: "스트레스 유형",
      difficulty: "쉬움",
      question: "스트레스가 극심할 때 주로 찾는 장소는?",
      choices: [
        { text: "집", score: 2 },
        { text: "카페나 공공장소", score: 3 },
        { text: "자연이나 공원", score: 1 },
        { text: "술집이나 클럽", score: 4 },
      ],
    },
    {
      id: 5,
      category: "스트레스 유형",
      difficulty: "보통",
      question: "스트레스 해소를 위해 가장 선호하는 방법은?",
      choices: [
        { text: "운동하기", score: 1 },
        { text: "음식 먹기", score: 3 },
        { text: "친구와 수다 떨기", score: 1 },
        { text: "혼자 휴식하기", score: 2 },
      ],
    },

    // 성격 유형 (5문제)
    {
  id: 6,
  category: "성격 유형",
  difficulty: "쉬움",
  question: "새로운 사람을 만났을 때 스트레스 정도는?",
  choices: [
    { text: "거의 없다, 즐겁다", score: 1 },
    { text: "약간 있지만 괜찮다", score: 2 },
    { text: "긴장되고 조심스럽다", score: 3 },
    { text: "불편하고 스트레스를 느낀다", score: 4 },
  ],
},
{
  id: 7,
  category: "성격 유형",
  difficulty: "보통",
  question: "중요한 결정을 내려야 할 때 기분은?",
  choices: [
    { text: "차분하고 침착하다", score: 1 },
    { text: "조금 부담되지만 괜찮다", score: 2 },
    { text: "많이 고민하고 스트레스를 받는다", score: 3 },
    { text: "결정이 어려워 미룬다", score: 4 },
  ],
},
{
  id: 8,
  category: "성격 유형",
  difficulty: "어려움",
  question: "혼자 있는 시간이 많을 때 기분은?",
  choices: [
    { text: "편안하고 좋다", score: 1 },
    { text: "외롭지만 견딜 수 있다", score: 2 },
    { text: "불안하고 생각이 많아진다", score: 3 },
    { text: "무기력하고 우울해진다", score: 4 },
  ],
},
{
  id: 9,
  category: "성격 유형",
  difficulty: "쉬움",
  question: "일이나 과제를 할 때의 스트레스 정도는?",
  choices: [
    { text: "계획적으로 잘 처리한다", score: 1 },
    { text: "상황에 따라 다르다", score: 2 },
    { text: "마감이 다가오면 스트레스를 느낀다", score: 3 },
    { text: "시작 전부터 부담감이 크다", score: 4 },
  ],
},
{
  id: 10,
  category: "성격 유형",
  difficulty: "보통",
  question: "감정 표현과 스트레스 해소 방법은?",
  choices: [
    { text: "솔직하게 말하며 해소한다", score: 1 },
    { text: "필요할 때만 표현한다", score: 2 },
    { text: "참는 편이다", score: 3 },
    { text: "표현하지 못하고 쌓아둔다", score: 4 },
  ],
},

    // 대처 방식 (5문제)
    {
      id: 11,
      category: "대처 방식",
      difficulty: "쉬움",
      question: "문제가 생기면 먼저 무엇을 하나요?",
      choices: [
        { text: "원인을 분석한다", score: 1 },
        { text: "감정을 다스린다", score: 3 },
        { text: "다른 사람에게 도움 요청", score: 2 },
        { text: "회피하거나 미룬다", score: 4 },
      ],
    },
    {
      id: 12,
      category: "대처 방식",
      difficulty: "보통",
      question: "긴장되면 어떻게 행동하나요?",
      choices: [
        { text: "심호흡이나 명상한다", score: 1 },
        { text: "계속 움직인다", score: 4 },
        { text: "친구와 이야기한다", score: 2 },
        { text: "혼자 시간을 가진다", score: 3 },
      ],
    },
    {
      id: 13,
      category: "대처 방식",
      difficulty: "어려움",
      question: "실패했을 때 주로 하는 반응은?",
      choices: [
        { text: "원인 분석 후 개선한다", score: 1 },
        { text: "감정을 숨기고 넘어간다", score: 4 },
        { text: "친구와 상담한다", score: 2 },
        { text: "시간을 두고 잊으려 한다", score: 3 },
      ],
    },
    {
      id: 14,
      category: "대처 방식",
      difficulty: "쉬움",
      question: "스트레스 받을 때 주로 하는 행동은?",
      choices: [
        { text: "운동한다", score: 1 },
        { text: "먹는다", score: 4 },
        { text: "대화한다", score: 2 },
        { text: "회피한다", score: 3 },
      ],
    },
    {
      id: 15,
      category: "대처 방식",
      difficulty: "보통",
      question: "불안할 때 주로 하는 행동은?",
      choices: [
        { text: "호흡 조절", score: 1 },
        { text: "불안감 무시", score: 4 },
        { text: "주변에 도움 요청", score: 2 },
        { text: "혼자 조용히 생각", score: 3 },
      ],
    },

    // 자기관리 스타일 (5문제)
    {
      id: 16,
      category: "자기관리 스타일",
      difficulty: "쉬움",
      question: "하루 중 자신을 위해 투자하는 시간은?",
      choices: [
        { text: "운동이나 취미활동", score: 1 },
        { text: "충분한 휴식", score: 2 },
        { text: "일정 관리", score: 3 },
        { text: "거의 없다", score: 4 },
      ],
    },
    {
      id: 17,
      category: "자기관리 스타일",
      difficulty: "보통",
      question: "스트레스 해소법은 주로 무엇인가요?",
      choices: [
        { text: "운동", score: 1 },
        { text: "음식 섭취", score: 4 },
        { text: "사회적 교류", score: 3 },
        { text: "회피", score: 2 },
      ],
    },
    {
      id: 18,
      category: "자기관리 스타일",
      difficulty: "어려움",
      question: "일과 삶의 균형에 대해 어떻게 생각하나요?",
      choices: [
        { text: "잘 유지하고 있다", score: 1 },
        { text: "노력 중이다", score: 2 },
        { text: "잘 안 맞는다", score: 3 },
        { text: "전혀 균형이 안 맞는다", score: 4 },
      ],
    },
    {
      id: 19,
      category: "자기관리 스타일",
      difficulty: "쉬움",
      question: "휴식 시간에 주로 하는 활동은?",
      choices: [
        { text: "운동이나 산책", score: 1 },
        { text: "음악 듣기", score: 2 },
        { text: "책 읽기", score: 3 },
        { text: "그냥 멍때리기", score: 4 },
      ],
    },
    {
      id: 20,
      category: "자기관리 스타일",
      difficulty: "보통",
      question: "스트레스가 쌓일 때 주로 누구에게 의지하나요?",
      choices: [
        { text: "친구나 가족", score: 1 },
        { text: "전문가나 상담사", score: 2 },
        { text: "혼자 해결하려 한다", score: 3 },
        { text: "아무에게도 의지하지 않는다", score: 4 },
      ],
    },
  ],
};

export default quizData;