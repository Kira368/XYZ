document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Показ всплывающих блоков при скроллинге
window.addEventListener('scroll', function() {
    const services = document.querySelector('.services');
    if (isScrolledIntoView(services)) {
        services.classList.add('visible');
    }
});

// Функция для определения, виден ли элемент в области просмотра
function isScrolledIntoView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}



const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FF8C33', '#A633FF'];

// Начальное состояние фона
let isDefaultBackground = true;

// Изменение фона на случайный цвет или сброс
document.getElementById('changeColorButton').addEventListener('click', function() {
    if (isDefaultBackground) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
        this.textContent = 'Сбросить фон';
    } else {
        document.body.style.backgroundColor = '';
        this.textContent = 'Изменить фон';
    }
    isDefaultBackground = !isDefaultBackground;
});

// Переключение между дневным и ночным режимами
let isNightMode = false;
document.getElementById('toggleModeButton').addEventListener('click', function() {
    if (isNightMode) {
        document.body.classList.remove('night-mode');
        document.body.classList.add('day-mode');
        this.textContent = 'Переключить режим';
    } else {
        document.body.classList.remove('day-mode');
        document.body.classList.add('night-mode');
        this.textContent = 'Переключить в день';
    }
    isNightMode = !isNightMode;
});
