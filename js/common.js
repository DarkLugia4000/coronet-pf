//--some default behaviors--

//-- Back Function --

document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.getElementById('backBtn');
    if (!backBtn) return;

    backBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (history.length > 1) {
            history.back();
        } else {
            location.href = '/';
        }
    });
});