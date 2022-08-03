const quiz = [
  {
    // 1
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    hide: 'hi.',
    answers: [
      'Nintendo Switch',
      'PlayStations 2',
      'スーパーファミンコ',
      'Nintando DS'
    ],
    correct: 'Nintendo Switch',
    commentary: '文字をよく見ると、Nintendo Switch以外は偽物だとわかるだろう。'
  }, {
    // 2
    question: '1 + 1 = ?',
    hide: '2進数の計算とする。',
    answers: [
      "Hi! Jhon, What's up? Oh... So cool!",
      '2',
      '田んぼの田！',
      '10'
    ],
    correct: '10',
    commentary: '問題文の下にちゃんと書いてある。'
  }, {
    // 3
    question: '約11年に1度、黒点の数がピークに達する太陽活動の極大期にCMEが行われるが、このサイクルによってどのような影響を及ぼすか？',
    hide: "It's difficult.",
    answers: [
      '地球の極性が反転する。',
      '太陽の質量が全体の5.96%増加する。',
      '地球上にある活火山が一時的に、より活発になる。',
      '太陽の表面温度が約15%下がる。'
    ],
    correct: '地球の極性が反転する。',
    commentary: '黒点の数がピークに達するときコロナ質量放出と同時に内部の磁場も放出し北極と南極の磁場が弱まりゼロにリセットされ極性を反転させ新たな磁場が両極に現れる。これは約11年周期で行われる。'
  }, {
    // 4
    question: 'なに？',
    hide: 'がんばって',
    answers: [
      '砂糖',
      'くるみ',
      '卵',
      'バター'
    ],
    correct: 'くるみ',
    commentary: 'この問題はとけない。砂糖は水にとける、卵はとける、バターはとける、くるみはとけない。'
  }, {
    // loop escape
    question: 'question',
    hide: '',
    answers: [
      'answer',
      'answer',
      'answer',
      'answer'
    ],
    correct: 'answer',
    commentary: 'commentary',
    invisibility: 'invisibility'
  }
];

// {
//   question: 'question',
//   hide: '',
//   answers: [
//     'answer',
//     'answer',
//     'answer',
//     'answer'
//   ],
//   correct: 'answer',
//   commentary: 'commentary',
//   invisibility: 'invisibility'
// }

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $li = document.getElementsByTagName('li');
const liLength = $li.length;

// 問題文・選択肢定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  document.getElementById('hide').textContent = quiz[quizIndex].hide;
  let liIndex = 0;
  document.getElementById('invisibility').textContent = quiz[quizIndex].invisibility;
  while (liIndex < liLength) {
    $li[liIndex].textContent = quiz[quizIndex].answers[liIndex];
    liIndex++;
  }
}

setupQuiz();

const hidden = () => {
  document.querySelectorAll('.hidden').forEach($hidden => $hidden.classList.remove('hidden'));
}
// モーダル記述
const $next = document.getElementById('next');
const $mask = document.getElementById('mask');
const $modal = document.getElementById('modal');

$next.addEventListener('click', () => {
  $modal.classList.add('hidden');
  $mask.classList.add('hidden');
});

$next.addEventListener('click', () => {
  setupQuiz();
});

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    // 正解
    score++;
    hidden();
    document.getElementById('commentary').textContent = quiz[quizIndex].commentary;
    quizIndex++;
  } else {
    // 不正解
    alert('zann..ざんねんでした！不正解！！！！！！');
  }
  if (quizIndex < quizLength) {
    // 問題がまだあれば
  } else {
    // 問題がもうなければ
    $next.textContent = '結果発表！';

    $next.addEventListener('click', () => {
      location = 'questions.html';
    });
    document.getElementById('assessment').textContent = '終了～！あなたの正解数は' + score + '/' + quizLength + 'です。そりゃねって？えぇ。';
  }
}

let handlerIndex = 0;

while (handlerIndex < liLength) {
  $li[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}