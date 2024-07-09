const navDialog = document.getElementById('nav-dialog')
function handlemenu (){
    navDialog.classList.toggle('hidden');
}

function setupIntersectionObserver (element, isLTR, speed){
    const intersectioncallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll', scrollhandler);
        }
        else{
            document.removeEventListener('scroll', scrollhandler);
        }
    }
    const intersectioncallobserver = new IntersectionObserver(intersectioncallback)
    
    IntersectionObserver.observal(element);
    
    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if(isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }

}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

setupIntersectionObserver(line1, true,0.15);
setupIntersectionObserver(line2, true,0.15);
setupIntersectionObserver(line3, true,0.15);