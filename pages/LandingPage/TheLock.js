document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    const unlockBtn = document.getElementById('unlock-btn');
    
    if (unlockBtn) {
        console.log("Unlock button found");
        unlockBtn.addEventListener('click', function () {
            const digit1 = document.getElementById('digit1').value;
            const digit2 = document.getElementById('digit2').value;
            const digit3 = document.getElementById('digit3').value;

            console.log("Input values:", digit1, digit2, digit3);

            if (digit1 == 3 && digit2 == 1 && digit3 == 4) {
                console.log("Correct combination, redirecting...");
                window.location.href = '../SelectionPage/selection.html';
            } else {
                console.log("Incorrect combination");
                alert('Incorrect combination, try again.');
            }
        });
    } else {
        console.error("Unlock button with id 'unlock-btn' not found!");
    }
});
