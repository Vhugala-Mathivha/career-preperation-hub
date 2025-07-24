const shrinkBtn = document.getElementById('shrinkBtn');
const screenSplit = document.querySelector('.screen-split');
const footer = document.querySelector('.left-panel footer');
const formSection = document.querySelector('.form-section');
const leftPanel = document.querySelector('.left-panel');
const about = document.querySelector('.about'); // 👈 Add this line

shrinkBtn.addEventListener('click', function () {
    screenSplit.classList.toggle('shrink-left');

    if (screenSplit.classList.contains('shrink-left')) {
        shrinkBtn.style.display = 'none'; // Hide shrink button
        leftPanel.addEventListener('transitionend', handleTransition);
    } else {
        footer.style.display = 'none';
        formSection.style.display = 'none';
        about.style.display = 'none'; // 👈 Hide it again when closing
        shrinkBtn.style.display = 'inline-block';
    }
});

function handleTransition(e) {
    if (e.propertyName === 'width') {
        const computedWidth = window.getComputedStyle(leftPanel).width;
        const expectedWidth = window.innerWidth * 0.25;

        if (parseFloat(computedWidth) >= expectedWidth) {
            formSection.style.display = 'block';
            footer.style.display = 'block';
            about.style.display = 'block'; // 👈 Show about section
        }

        leftPanel.removeEventListener('transitionend', handleTransition);
    }
}
