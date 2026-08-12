const background = document.getElementById('background');
const dialogKrong = document.getElementById('dialogKrong');
const dialogKeroppi = document.getElementById('dialogKeroppi');
const bubbleKrong = document.querySelector('.bubbleKrong');
const bubbleKeroppi = document.querySelector('.bubbleKeroppi');
const tailBigKrong = document.getElementById('tailBigKrong');
const tailSmallKrong = document.getElementById('tailSmallKrong');
const tailLittleKrong = document.getElementById('tailLittleKrong');
const tailBigKeroppi = document.getElementById('tailBigKeroppi');
const tailSmallKeroppi = document.getElementById('tailSmallKeroppi');
const tailLittleKeroppi = document.getElementById('tailLittleKeroppi');
const krong = document.getElementById('krong');
const keroppi = document.getElementById('keroppi');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const quizBtn = document.getElementById('quizBtn');
const nextQuestion = document.getElementById('nextQuestion');
const question = document.getElementById('question');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const answerA = document.getElementById('answerA');
const answerB = document.getElementById('answerB');
const countdownClock = document.getElementById('countdownClock');
const daysValue = document.getElementById('daysValue');
const hoursValue = document.getElementById('hoursValue');
const minutesValue = document.getElementById('minutesValue');
const secondsValue = document.getElementById('secondsValue');
const fadeCountdown = document.getElementById('fadeCountdown');
const countdownScene = document.getElementById('countdownScene');
const typewritterCountdown = document.getElementById('typewritterCountdown');
const typingText = document.getElementById('typingText');
const giftScene = document.getElementById('giftScene');
const giftButton = document.getElementById('giftButton');
const giftHint = document.getElementById('giftHint');
const giftNextBtn = document.getElementById('giftNextBtn');

const textKrong = [
    'Haloo Alee!',
    'Krong senang kamu mampir ke sinii.',
    'Aku udah nyiapin sesuatuu buat Alee lohh.',
    'Tapii sekarang belum waktunyaa.',
    'Sabar yaaa.',
    'Sambil nungguu, ada seseorang yang mau nemenin Alee duluu.'
];

const textKeroppi = [
    'Haii!',
    'Aku Keroppi.',
    'Krong tadi bilang ada sesuatu buat Alee yaa?',
    'Jujur ajaa...',
    'Aku juga penasarann.',
    'Tapi katanya belum waktunyaa.',
    'Daripada gabut mending ikut aku main bentar yukk.'
];

const miniQuiz = [
    {
        Ask: 'Apa yang terjadi jika Nana diban?',
        a: 'AFK sihh',
        b: 'Menerima takdir',
        responseA: 'Wahh parah sihh',
        responseB: 'WKWKWK SEPAKATT'
    },
    {
        Ask: 'Sesuatu yang dikangenin??',
        a: 'Jalan Srikana',
        b: 'Menghadapi PK PM',
        responseA: 'Tempat itu lagi...',
        responseB: 'WOWW ambis bangett'
    },
    {
        Ask: 'Skill terbaik Alee adalah...',
        a: 'Sabar',
        b: 'Berusaha sabar',
        responseA: 'Ahh masa sihh?',
        responseB: 'Ahh masa sihh?'
    }
];

const afterMiniQuiz = [
    'Akhirnyaa selesai jugaa',
    'Ehh, kayaknya ada yang dateng dehh'
];

const conversation = [
    { character: 'krong', text: 'Haloo, aku kembalii' },
    { character: 'keroppi', text: 'Yayyy krong balik juga akhirnyaa' },
    { character: 'krong', text: 'Oiyaa dongg, masa aku ninggalin kalian terus??' },
    { character: 'keroppi', text: 'Senengg bangett akhirnya kita bisa sampai di sini bersama' },
    { character: 'keroppi', text: 'Semoga perjalanan kecil hari ini bisa bikin hari spesialmu terasa sedikit berwarnaa' },
    { character: 'krong', text: 'Tapii, masih ada satu hal terakhir yang ingin kami tunjukkan' },
    { character: 'keroppi', text: 'Sebuah hadiah kecil yang kami siapkan khusus untukmu' },
    { character: 'krong', text: 'Sudah siapp??' },
    { character: 'keroppi', text: 'Nyukk kita hitung bersamaa' }
];

const words = [
    'Terima kasih sudah bertahan hingga detik ini.',
    'Mungkin perjalananmu tidak selalu mudah.',
    'Mungkin ada hari-hari di mana semuanya terasa begitu berat.',
    'Namun...',
    'Kamu masih ada di sini.',
    'Dan itu sudah lebih dari cukup untuk membuatku bangga padamu.'
];

let indexKrong = 0;
let indexKeroppi = 0;
let indexMiniQuiz = 0;
let indexConversation = 0;
let indexAfter = 0;
let indexWords = 0;
let fase = 'krong';
let quizDone = false;
let countdownTimer = null;
let typingTimer = null;
let giftOpened = false;

function resetBubbleAnimation(el) {
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
}

function showBubbleKrong() {
    resetBubbleAnimation(bubbleKrong);
    [tailBigKrong, tailSmallKrong, tailLittleKrong].forEach(t => {
        t.classList.remove('show');
        void t.offsetWidth;
        t.classList.add('show');
    });
}

function showBubbleKeroppi() {
    resetBubbleAnimation(bubbleKeroppi);
    [tailBigKeroppi, tailSmallKeroppi, tailLittleKeroppi].forEach(t => {
        t.classList.remove('show');
        void t.offsetWidth;
        t.classList.add('show');
    });
}

function krongBox(text) {
    bubbleKrong.style.display = 'block';
    bubbleKeroppi.style.display = 'none';
    tailBigKrong.style.display = 'block';
    tailSmallKrong.style.display = 'block';
    tailLittleKrong.style.display = 'block';
    tailBigKeroppi.style.display = 'none';
    tailSmallKeroppi.style.display = 'none';
    tailLittleKeroppi.style.display = 'none';
    dialogKrong.textContent = text;
    dialogKeroppi.textContent = '';
    showBubbleKrong();
}

function keroppiBox(text) {
    bubbleKeroppi.style.display = 'block';
    bubbleKrong.style.display = 'none';
    tailBigKeroppi.style.display = 'block';
    tailSmallKeroppi.style.display = 'block';
    tailLittleKeroppi.style.display = 'block';
    tailBigKrong.style.display = 'none';
    tailSmallKrong.style.display = 'none';
    tailLittleKrong.style.display = 'none';
    dialogKeroppi.textContent = text;
    dialogKrong.textContent = '';
    showBubbleKeroppi();
}

function showKrong() {
    krong.style.display = 'block';
    keroppi.style.display = 'none';
}

function showKeroppi() {
    keroppi.style.display = 'block';
    krong.style.display = 'none';
}

function showQuestion() {
    const item = miniQuiz[indexMiniQuiz];
    question.textContent = item.Ask;
    optionA.textContent = item.a;
    optionB.textContent = item.b;
}

function showAll() {
    keroppi.style.display = 'block';
    krong.style.display = 'block';

    const item = conversation[indexConversation];
    if (!item) return;

    if (item.character === 'krong') {
        krongBox(item.text);
    } else {
        keroppiBox(item.text);
    }
}

function hideAll() {
    nextBtn.style.display = 'none';
    question.style.display = 'none';
    krong.style.display = 'none';
    keroppi.style.display = 'none';
    quizBtn.style.display = 'none';
    nextQuestion.style.display = 'none';
    optionA.style.display = 'none';
    optionB.style.display = 'none';
    answerA.style.display = 'none';
    answerB.style.display = 'none';

    bubbleKrong.style.display = 'none';
    bubbleKeroppi.style.display = 'none';
    tailBigKeroppi.style.display = 'none';
    tailBigKrong.style.display = 'none';
    tailSmallKeroppi.style.display = 'none';
    tailSmallKrong.style.display = 'none';
    tailLittleKeroppi.style.display = 'none';
    tailLittleKrong.style.display = 'none';

    dialogKeroppi.textContent = '';
    dialogKrong.textContent = '';
}

function afterMiniQuizTransition() {
    if (indexAfter < afterMiniQuiz.length) {
        showKeroppi();
        keroppiBox(afterMiniQuiz[indexAfter]);
        indexAfter++;
    } else {
        fase = 'all';
        indexConversation = 0;
        showAll();
    }

    question.style.display = 'none';
    optionA.style.display = 'none';
    optionB.style.display = 'none';
    answerA.style.display = 'none';
    answerB.style.display = 'none';
    nextBtn.style.display = 'block';
}

function afterConversation() {
    if (indexConversation < conversation.length - 1) {
        indexConversation++;
        showAll();
        return;
    }

    fase = 'startCountdown';
    hideAll();
    countdownStart();
}
function countdownStart() {
    clearInterval(countdownTimer);
    clearTimeout(typingTimer);

    background.style.display = 'none';
    typewritterCountdown.style.display = 'none';
    typewritterCountdown.classList.remove('show');
    fadeCountdown.classList.remove('typewriter-phase');
    fadeCountdown.classList.add('active');
    countdownScene.classList.add('is-active');

    countdownClock.classList.remove('hide');
    countdownClock.classList.add('show');

    // FAKE COUNTDOWN — 10 detik
    let fakeSeconds = 10;

    const values = {
        days: daysValue,
        hours: hoursValue,
        minutes: minutesValue,
        seconds: secondsValue
    };

    const previous = {};

    function pad(value) {
        return String(value).padStart(2, '0');
    }

    function updateUnit(name, value) {
        const formatted = pad(value);

        if (previous[name] === formatted) return;

        values[name].textContent = formatted;
        previous[name] = formatted;

        const card = document.querySelector(
            `.flipCard[data-unit="${name}"]`
        );

        if (card) {
            card.classList.remove('flip');

            // Paksa browser reset animasi
            void card.offsetWidth;

            card.classList.add('flip');
        }
    }

    function tick() {

        // Tetap 0 untuk Day / Hour / Minute
        updateUnit('days', 0);
        updateUnit('hours', 0);
        updateUnit('minutes', 0);

        // 10 → 9 → 8 → ... → 0
        updateUnit('seconds', fakeSeconds);

        if (fakeSeconds <= 0) {
            clearInterval(countdownTimer);

            countdownClock.classList.remove('show');
            countdownClock.classList.add('hide');

            fadeCountdown.classList.add('typewriter-phase');

            // Setelah countdown selesai,
            // lanjut ke typewriter seperti logic lama
            setTimeout(() => {
                typewritterCountdown.style.display = 'flex';

                requestAnimationFrame(() => {
                    typewritterCountdown.classList.add('show');
                });

                indexWords = 0;
                showMessage();

            }, 700);

            return;
        }

        fakeSeconds--;
    }

    // Tampilkan 10 langsung
    tick();

    // Turun setiap 1 detik
    countdownTimer = setInterval(tick, 1000);
}
function showMessage() {
    const activeWord = words[indexWords];
    if (!activeWord) {
        showGiftScene();
        return;
    }
    startTyping(activeWord, 0);
}

function startTyping(text, letterIndex) {
    clearTimeout(typingTimer);
    typingText.textContent = text.substring(0, letterIndex + 1);

    if (letterIndex < text.length - 1) {
        typingTimer = setTimeout(() => {
            startTyping(text, letterIndex + 1);
        }, 45);
        return;
    }

    if (indexWords < words.length - 1) {
        typingTimer = setTimeout(() => {
            indexWords++;
            showMessage();
        }, 1300);
    } else {
        typingTimer = setTimeout(showGiftScene, 1800);
    }
}

function showGiftScene() {
    clearTimeout(typingTimer);
    clearInterval(countdownTimer);

    typewritterCountdown.classList.remove('show');
    fadeCountdown.classList.remove('active', 'typewriter-phase');
    countdownScene.classList.remove('is-active');

    setTimeout(() => {
        typewritterCountdown.style.display = 'none';
        giftScene.classList.add('show');
        fase = 'gift';
    }, 500);
}

function openGift() {
    if (giftOpened) return;
    giftOpened = true;
    giftButton.classList.add('open');
    giftHint.textContent = 'Hadiah kecil ini akhirnya sampai juga. ✨';
}

hideAll();
giftScene.classList.remove('show'); countdownClock.classList.remove('show'); countdownClock.classList.remove('hide');

startBtn.addEventListener('click', () => {
    nextBtn.style.display = 'block';
    startBtn.style.display = 'none';
    showKrong();
    krongBox(textKrong[indexKrong]);
    indexKrong++;
    background.classList.add('show');
});

nextBtn.addEventListener('click', () => {
    if (fase === 'transition') {
        afterMiniQuizTransition();
        return;
    }

    if (fase === 'all') {
        afterConversation();
        return;
    }

    if (fase === 'krong') {
        if (indexKrong < textKrong.length) {
            showKrong();
            krongBox(textKrong[indexKrong]);
            indexKrong++;
        } else {
            fase = 'keroppi';
            indexKeroppi = 0;
            showKeroppi();
            keroppiBox(textKeroppi[indexKeroppi]);
            indexKeroppi++;
        }
        return;
    }

    if (fase === 'keroppi') {
        if (indexKeroppi < textKeroppi.length) {
            showKeroppi();
            keroppiBox(textKeroppi[indexKeroppi]);
            indexKeroppi++;
        } else {
            nextBtn.style.display = 'none';
            quizBtn.style.display = 'block';
            fase = 'transition';
        }
    }
});

quizBtn.addEventListener('click', () => {
    indexMiniQuiz = 0;
    showQuestion();
    optionA.style.display = 'block';
    optionB.style.display = 'block';
    quizBtn.style.display = 'none';
    bubbleKeroppi.style.display = 'none';
    tailBigKeroppi.style.display = 'none';
    tailSmallKeroppi.style.display = 'none';
    tailLittleKeroppi.style.display = 'none';
    question.style.display = 'flex';
});

nextQuestion.addEventListener('click', () => {
    if (indexMiniQuiz < miniQuiz.length - 1) {
        indexMiniQuiz++;
        optionA.style.display = 'block';
        optionB.style.display = 'block';
        nextQuestion.style.display = 'none';
        showQuestion();
    } else {
        nextQuestion.style.display = 'none';
        nextBtn.style.display = 'block';
        fase = 'transition';
    }
});

optionA.addEventListener('click', () => {
    optionB.style.display = 'none';
    question.textContent = miniQuiz[indexMiniQuiz].responseA;
    nextQuestion.style.display = 'block';

    if (indexMiniQuiz === miniQuiz.length - 1) {
        quizDone = true;
        nextQuestion.style.display = 'none';
        nextBtn.style.display = 'block';
    }
});

optionB.addEventListener('click', () => {
    optionA.style.display = 'none';
    question.textContent = miniQuiz[indexMiniQuiz].responseB;
    nextQuestion.style.display = 'block';

    if (indexMiniQuiz === miniQuiz.length - 1) {
        quizDone = true;
        nextQuestion.style.display = 'none';
        nextBtn.style.display = 'block';
    }
});

giftButton.addEventListener('click', openGift);

// Setelah giftbox dibuka, Next membawa user ke scrapbook dengan fade.
giftNextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!giftOpened) return;

    const fade = document.createElement('div');
    fade.className = 'page-transition-fade';
    document.body.appendChild(fade);

    // Fade dulu, baru pindah halaman supaya transisinya terasa sebagai satu journey.
    requestAnimationFrame(() => fade.classList.add('active'));

    setTimeout(() => {
        window.location.href = 'Scrapbook/index.html';
    }, 750);
});
