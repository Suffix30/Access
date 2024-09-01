document.getElementById('unlock-btn').addEventListener('click', function () {
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;

    const correctDigit1 = 'XHUwMDMz';
    const correctDigit2 = 'XHUwMDMx';
    const correctDigit3 = 'XHUwMDM0';

    if (digit1 === correctDigit1 && digit2 === correctDigit2 && digit3 === correctDigit3) {
        window.location.href = '\u002e\u002e\u002f\u0053\u0065\u006c\u0065\u0063\u0074\u0069\u006f\u006e\u0050\u0061\u0067\u0065\u002f\u0073\u0065\u006c\u0065\u0063\u0074\u0069\u006f\u006e\u002e\u0068\u0074\u006d\u006c'; // "../SelectionPage/selection.html"
    } else {
        alert('\u0049\u006e\u0063\u006f\u0072\u0072\u0065\u0063\u0074\u0020\u0063\u006f\u006d\u0062\u0069\u006e\u0061\u0074\u0069\u006f\u006e\u002c\u0020\u0074\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u002e'); // "Incorrect combination, try again."
    }
});
