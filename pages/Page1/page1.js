let sequence = [];

const correctSequence = ['\u0033', '\u0037', '\u0031\u0032', '\u0032\u0035', '\u0034\u0030'];

const part1 = '\u0063\u0033\u0036\u0033\u0030\u0035';
const part2 = '\u0038\u0066\u0066\u0037\u0065\u0031';
const part3 = '\u0034\u0066\u0033\u0039\u0035\u0065';
const part4 = '\u0034\u0063\u0035\u0032\u0064\u0061';
const part5 = '\u0038\u0039\u0038\u0039\u0064\u0064';
const part6 = '\u0065\u0032';

const correctHash = part1 + part2 + part3 + part4 + part5 + part6;

const md5Output = document.getElementById('md5-output');
const submitBtn = document.getElementById('submit-btn');
const hashInput = document.getElementById('hash-input');

document.querySelectorAll('.hotspot').forEach(hotspot => {
    hotspot.addEventListener('click', () => {
        const order = hotspot.getAttribute('data-order');
        if (sequence.includes(order)) {
            removeSequence(order, hotspot);
        } else {
            addSequence(order, hotspot);
        }
        updateHash();
    });
});

function _0x4892(_0x1ffe52,_0x58fca3){const _0x249558=_0x2495();return _0x4892=function(_0x4892c9,_0x56b74c){_0x4892c9=_0x4892c9-0x15d;let _0x575af7=_0x249558[_0x4892c9];return _0x575af7;},_0x4892(_0x1ffe52,_0x58fca3);}const _0x2feb48=_0x4892;(function(_0x4cde0e,_0xa34288){const _0x13b6ba=_0x4892,_0x2069c3=_0x4cde0e();while(!![]){try{const _0x4ebd76=-parseInt(_0x13b6ba(0x160))/0x1+parseInt(_0x13b6ba(0x15d))/0x2+parseInt(_0x13b6ba(0x15f))/0x3*(-parseInt(_0x13b6ba(0x16c))/0x4)+parseInt(_0x13b6ba(0x16f))/0x5*(parseInt(_0x13b6ba(0x170))/0x6)+-parseInt(_0x13b6ba(0x16a))/0x7*(-parseInt(_0x13b6ba(0x167))/0x8)+-parseInt(_0x13b6ba(0x16e))/0x9+parseInt(_0x13b6ba(0x16b))/0xa;if(_0x4ebd76===_0xa34288)break;else _0x2069c3['push'](_0x2069c3['shift']());}catch(_0x3e1a3b){_0x2069c3['push'](_0x2069c3['shift']());}}}(_0x2495,0x1fd06),submitBtn[_0x2feb48(0x162)](_0x2feb48(0x164),()=>{const _0x454e34=_0x2feb48,_0x5c5a3b=hashInput[_0x454e34(0x163)]['trim']();_0x5c5a3b===_0x454e34(0x168)&&isCorrectHash(md5Output[_0x454e34(0x166)])?(alert(_0x454e34(0x16d)),window[_0x454e34(0x161)][_0x454e34(0x15e)]=_0x454e34(0x169)):alert(_0x454e34(0x165));}));function _0x2495(){const _0x16c687=['click','Incorrect\x20hash.\x20Try\x20again.','textContent','184JgdTQS','AccessGranted','../SelectionPage/selection.html','35cgoRdH','1704070pionRG','232BPdDNd','Correct!\x20Unlocking\x20next\x20page...','951957czSpnX','5480wFFjoE','108cimunE','359812XlBvQX','href','3258OTOtTm','71085aiTnoD','location','addEventListener','value'];_0x2495=function(){return _0x16c687;};return _0x2495();}

function removeSequence(order, hotspot) {
    sequence = sequence.filter(num => num !== order);
    hotspot.classList.remove('selected', 'active');
    hotspot.style.animation = '';
}

function addSequence(order, hotspot) {
    sequence.push(order);
    hotspot.classList.add('selected', 'active');
    hotspot.style.animation = 'neon-glow 1.5s infinite alternate';
    playSound('../../assets/sounds/ding.mp3');
}

function updateHash() {
    if (sequence.length === correctSequence.length && sequence.every((val, index) => val === correctSequence[index])) {
        const hash = correctHash;
        md5Output.textContent = hash;
    } else {
        function _0x5a7b(){var _0x22f1f5=['91554XXmBrh','1956dhRvYl','54916TuewJA','textContent','Hash\x20will\x20be\x20generated\x20after\x20correct\x20sequence','179927zubXKB','54ydbTbb','237663SJXiXg','291OtXuRm','446677mowdtl','545vBEQve','12LigYZg','1280864Tzqbup','460XNpzGK','182377vajsYr'];_0x5a7b=function(){return _0x22f1f5;};return _0x5a7b();}function _0x2d58(_0x1a3c96,_0x15d480){var _0x5a7b9a=_0x5a7b();return _0x2d58=function(_0x2d5813,_0x1efb29){_0x2d5813=_0x2d5813-0xbc;var _0xd49c9d=_0x5a7b9a[_0x2d5813];return _0xd49c9d;},_0x2d58(_0x1a3c96,_0x15d480);}var _0x214353=_0x2d58;(function(_0x56fec8,_0x4ded4b){var _0x3809e1=_0x2d58,_0x53e14d=_0x56fec8();while(!![]){try{var _0x18784e=parseInt(_0x3809e1(0xbe))/0x1*(parseInt(_0x3809e1(0xc2))/0x2)+-parseInt(_0x3809e1(0xbf))/0x3*(parseInt(_0x3809e1(0xc8))/0x4)+-parseInt(_0x3809e1(0xc1))/0x5*(parseInt(_0x3809e1(0xc6))/0x6)+-parseInt(_0x3809e1(0xc0))/0x7+parseInt(_0x3809e1(0xc3))/0x8*(parseInt(_0x3809e1(0xbd))/0x9)+parseInt(_0x3809e1(0xc4))/0xa*(-parseInt(_0x3809e1(0xbc))/0xb)+-parseInt(_0x3809e1(0xc7))/0xc*(-parseInt(_0x3809e1(0xc5))/0xd);if(_0x18784e===_0x4ded4b)break;else _0x53e14d['push'](_0x53e14d['shift']());}catch(_0x471262){_0x53e14d['push'](_0x53e14d['shift']());}}}(_0x5a7b,0xd27e0),md5Output[_0x214353(0xc9)]=_0x214353(0xca));
    }
}

function isCorrectHash(hash) {
    return hash === correctHash;
}

function playSound(soundFile) {
    const sound = new Audio(soundFile);
    sound.play();
}
