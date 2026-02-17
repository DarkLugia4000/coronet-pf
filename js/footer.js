// Insert current year into copyright
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle visibility of info box explaining "Coronet" name
function toggleInfo() {
    const box = document.getElementById('infoBox');
    box.classList.toggle('visible');
}