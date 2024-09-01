let sequence = [];
const correctSequence = [1, 2];
const md5Output = document.getElementById('md5-output');
const submitBtn = document.getElementById('submit-btn');
const hashInput = document.getElementById('hash-input');

document.querySelectorAll('.hotspot').forEach(hotspot => {
    hotspot.addEventListener('click', () => {
        const order = parseInt(hotspot.getAttribute('data-order'));
        sequence.push(order);
        toggleHotspot(hotspot);
        updateHash();
    });
});

submitBtn.addEventListener('click', () => {
    const inputHash = hashInput.value.trim();
    if (isCorrectHash(inputHash)) {
        alert('Correct! Unlocking next page...');
        window.location.href = '../SelectionPage/selection.html';
    } else {
        alert('Incorrect hash. Try again.');
    }
});

function toggleHotspot(hotspot) {
    hotspot.classList.toggle('active');
}

function updateHash() {
    const hash = generateMD5(sequence.join(''));
    md5Output.textContent = hash;
}

function isCorrectHash(hash) {
    const correctHash = generateMD5(correctSequence.join(''));
    return hash === correctHash;
}

function generateMD5(string) {
    return string.split('').reduce((prevHash, currVal) =>
        (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0);
}
