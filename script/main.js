const lista = document.querySelectorAll('li');
const imgFrame = document.querySelector('.img-wrap-main');



lista.forEach((element) => {
    element.addEventListener('mouseover', () => {
        imgFrame.classList.add('active');
    })
    
    element.addEventListener('mouseout', () => {
        imgFrame.classList.remove('active');
    })
    
    element.onclick = (elementoClicado) => {
        const current = elementoClicado.currentTarget; 
        const arrow = current.children[1];

        if (current.classList.value.includes('display__on')) {
            //current.classList.toggle
            current.classList.remove('display__on');
            current.classList.add('align-center')
            arrow.classList.remove('rotate');
            imgFrame.classList.remove('active-click');


        } else { 
            lista.forEach((item) => {
                item.classList.remove('display__on');
                item.children[1].classList.remove('rotate');

            })
            
            arrow.classList.add('rotate');
            current.classList.add('display__on'); 
            current.classList.remove('align-center');
            imgFrame.classList.add('active-click'); 
        }
    }
})


