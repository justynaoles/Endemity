    
    (function(){

        const trip = document.querySelector('.trips-offer');
        let buttons = trip.querySelectorAll('.btn');
        const picture = document.querySelector('.trips-picture');
        const divs = picture.querySelectorAll('.pic');
    
    
    
        trip.addEventListener('click', (e)=>{
    
            if (e.target.classList.contains('btn')) {
    
            for (let i =0 ; i<divs.length; i++) {
    
                divs[i].style.display="none";
            }
    
            let id = e.target.dataset.picture;
    
            picture.querySelector('.'+id).style.display='block';
    
            }
       
    
        });


    })();
    
    