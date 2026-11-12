const showMoreBtn = document.querySelector('#showMore');

const moreText = document.querySelector('#moreText');


if (showMoreBtn && moreText) {
    showMoreBtn.addEventListener('click', () => {

        moreText.classList.toggle('d-none');

        showMoreBtn.textContent = moreText.classList.contains('d-none')
 
            ? 'Подробнее'
 
            : 'Скрыть';

    });

}



const projectsData = [

    {
 
        title: 'Этап 1: Структура и дизайн',
 
        tech: 'HTML5, CSS3, адаптивная вёрстка на Bootstrap 5'
 
   },

    {
 
        title: 'Этап 2: Интерактивность',
 
        tech: 'JavaScript: работа с DOM, событиями и формами'
 
   },

    {
 
        title: 'Этап 3: Публикация',
 
        tech: 'Размещение и обновление проекта на GitHub Pages'
 
   }

];


const projectsContainer = document.querySelector('#projects');


if (projectsContainer) {

    projectsContainer.innerHTML = projectsData.map(item => `

        <article class="card p-3 bg-light border-0">

            <h3 class="h6 mb-1 text-primary fw-bold">${item.title}</h3>

            <p class="mb-0 small text-muted">${item.tech}</p>

        </article>

    `).join('');
}

// 

const contactForm = document.querySelector('#contactForm');

const formMessage = document.querySelector('#formMessage');


if (contactForm && formMessage) {

    contactForm.addEventListener('submit', (event) => {

        event.preventDefault();



        const nameInput = document.querySelector('#name');

        const emailInput = document.querySelector('#email');

        const commentInput = document.querySelector('#comment');


 
        const name = nameInput.value.trim();

        const email = emailInput.value.trim();

        const comment = commentInput.value.trim();



        if (!name || !email.includes('@') || !comment) {

            formMessage.textContent = 'Заполните все поля и проверьте корректность email!';

            formMessage.className = 'mt-3 mb-0 fw-bold text-danger';

            return;

        }


        formMessage.textContent = `Спасибо, ${name}! Ваше сообщение успешно отправлено.`;

        formMessage.className = 'mt-3 mb-0 fw-bold text-success';

        contactForm.reset();
 
    });

}