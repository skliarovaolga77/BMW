const featureLinkElems = document.querySelectorAll('.feature__link'),
      featureSubElems = document.querySelectorAll('.feature-sub');

featureLinkElems.forEach((btn, index) => {
  btn.addEventListener('click' ,() =>{
    featureSubElems.forEach((elem, i)=>{
      //если i==index открыли-закрыли ul на к-й кликнули иначе закрыли ul 
      i === index ? elem.classList.toggle('hidden') : elem.classList.add('hidden');
    });
    //повернули стрелку при клике 
     //если i==index повернули стрелку при клике вниз иначе повернули стрелку  вверх
    featureLinkElems.forEach((elem, i)=>{
      i === index ? elem.classList.toggle('feature__link_active') : elem.classList.remove('feature__link_active');
    });
  });
   
  
});
