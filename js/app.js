document.addEventListener('DOMContentLoaded', function () {
    const ua = document.getElementById('UA');
    const ru = document.getElementById('RU');
    const en = document.getElementById('EN');

    function handleClick(event) {
        ua.classList.remove('active');
        ru.classList.remove('active');
        en.classList.remove('active');

        event.target.classList.add('active');
    }

    ua.addEventListener('click', handleClick);
    ru.addEventListener('click', handleClick);
    en.addEventListener('click', handleClick);
});