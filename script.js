    window.onload=function(){
        const toggleButton=document.getElementsByClassName('toggle-button')[0];
        const nlinks= document.getElementsByClassName('r-nav')[0];
        toggleButton.addEventListener('click', () => {
            nlinks.classList.toggle('act');
        })
    }

    function counter(id, start, end, duration) {
     let ele = document.getElementById(id),
      range = end - start,
      inc = end > start ? 1 : -1,
      count = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       start += inc;
       ele.textContent = start ;
       if (start == end) {
        clearInterval(timer);
       }
      }, count);
    }

    
   window.addEventListener('scroll',()=>{
       let cont=document.querySelector('.f-h');
       let anime=document.querySelectorAll('.reveal');
       let size=window.innerHeight;
       for(var i=0; i<anime.length;i++){
           var top=anime[i].getBoundingClientRect().top;
           if(top<size){
               anime[i].classList.add('active');
           }
           else{
               anime[i].classList.remove('active');
           }
       }
       let contp=cont.getBoundingClientRect().top;
       let screenp=window.innerHeight;
       if (contp < screenp){
        counter("count1", 2470, 2570, 1000);
        counter("count2", 77, 177, 1000);
        counter("count3", 1400, 1500, 1000);
       }
       else{
           cont.textContent=0;
       }
       
    
   });
   


  