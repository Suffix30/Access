document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('unlock-btn').addEventListener('click', function () {
        const digit1 = document.getElementById('digit1').value;
        const digit2 = document.getElementById('digit2').value;
        const digit3 = document.getElementById('digit3').value;

        console.log(digit1, digit2, digit3);

        if (digit1 == 3 && digit2 == 1 && digit3 == 4) {
            window.location.href = '../SelectionPage/selection.html';
        } else {
            alert('Incorrect combination, try again.');
        }
    });
});
