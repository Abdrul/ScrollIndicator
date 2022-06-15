const scrollIndicator = document.querySelector('.scroll-indicator');
const content = document.querySelector('.content');


// permet d'observer l'evolution de l'intersection d'un element ciblé
const observer = new IntersectionObserver(handleIntersect).observe(content);


function handleIntersect(entries) {
    const element = entries[0];
    // console.log(entries);
    if(element.isIntersecting) {
        window.addEventListener('scroll', indicatorAnimation);
    } else if(!element.isIntersecting) {
        window.removeEventListener('scroll', indicatorAnimation);
    };
};

function indicatorAnimation() {

    if(window.scrollY > content.offsetTop) {
        //Window.scrollY ce que j'ai scrolle
        //content.offsetTop renvoie la position au niveau du top de l'element 
        //scrollHeight est la hauteur du contenu 
        const percentage = ((window.scrollY - content.offsetTop) / content.scrollHeight * 100).toFixed(2);
        //diviser la valeur par 100 pour avoir une valeur entre 0 et 1 a cause du scale
        scrollIndicator.style.transform = `scaleX(${(percentage / 100)})`;
    } else {
        scrollIndicator.style.transform = `scaleX(0)`;
    }



}