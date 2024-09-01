document.getElementById('unlock-btn').addEventListener('click', function () {
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;

    const correctDigit1 = '3';
    const correctDigit2 = '1';
    const correctDigit3 = '4';

    if (digit1 === correctDigit1 && digit2 === correctDigit2 && digit3 === correctDigit3) {
        window.location.href = '../SelectionPage/selection.html';
    } else {
        alert('Incorrect combination, try again.');
    }
});
