
document.querySelector("h1").onmouseover = event =>  {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iterations = 0;
    
    const HKinterval =  setInterval(() => { 
      event.target.innerText = event.target.innerText.split("")
      .map((letter,index) => {
          if (index < iterations) {
            return event.target.dataset.value[index];
          }
           return letters[Math.floor(Math.random()*26)];})
      .join(""); 
    if(iterations >= event.target.dataset.value.lenght) clearInterval(HKinterval);
    iterations+=1/2;
     },25);
  }