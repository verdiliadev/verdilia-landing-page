// Seleziona l'elemento da animare
const svg_icon1 = document.querySelector('.svg_icon1');
const svg_icon2 = document.querySelector('.svg_icon2');
const svg_icon3 = document.querySelector('.svg_icon3');
const text_block1 = document.querySelector('.text_block1');
const text_block2 = document.querySelector('.text_block2');
const text_block3 = document.querySelector('.text_block3');
const smartphone = document.querySelector('.smartphone');
const title = document.querySelector('.title');
const profile_image1 = document.querySelector('.profile_image1');
const profile_image2 = document.querySelector('.profile_image2');
const profile_image3 = document.querySelector('.profile_image3');
const profile_description1 = document.querySelector('.profile_description1');
const profile_description2 = document.querySelector('.profile_description2');
const profile_description3 = document.querySelector('.profile_description3');
// Imposta l'osservatore per l'elemento
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Aggiunge la classe .visible quando l'elemento è visibile nel viewport
            entry.target.classList.add('visible');
        } /*else {
            // Rimuove la classe .visible quando l'elemento esce dal viewport
            entry.target.classList.remove('visible');
        }*/
    });
}, { threshold: 0.2 }); // Attiva quando il 50% dell'elemento è visibile

// Inizia a osservare l'elemento
observer.observe(svg_icon1);
observer.observe(svg_icon2);
observer.observe(svg_icon3);
observer.observe(text_block1);
observer.observe(text_block2);
observer.observe(text_block3);
observer.observe(smartphone);
observer.observe(title);
observer.observe(profile_image1);
observer.observe(profile_image2);
observer.observe(profile_image3);
observer.observe(profile_description1);
observer.observe(profile_description2);
observer.observe(profile_description3);

