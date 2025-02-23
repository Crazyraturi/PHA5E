function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;
  
    function updateCounter() {
      if (currentValue === 100) {
        return;
      }
  
      currentValue += Math.floor(Math.random() * 10) + 1;
  
      if (currentValue > 100) {
        currentValue = 100;
      }
  
      counterElement.textContent = currentValue + "%";
  
      let delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    }
  
    updateCounter();
  }
  
  startLoader();
  
  gsap.to(".counter", 0.25, {
    delay: 3.5,
    opacity: 0,
  });
  
  gsap.to(".bar",1.5, {
      delay:3.5,
      height:0,
      stagger:{
          amount:0.5,
      },
      ease:"power4.inOut",
  });


  gsap.from("navbar img", {


  });

  const tl = gsap.timeline({});
tl.from(" .navbar img", {

    y:-20,
    duration:1,
    delay:3,
    opacity:0

})

tl.from("a",{
    y:-20,
    duration:0.8,
    delay:1,
    opacity:0,
    stagger:0.3

})

tl.from("section img",{
    x:-50,
    duration:0.8,
    opacity:0,
    stagger:0.3,
     ease: "power2.inOut",
     rotation: 360, 

      

})
tl.from("span",{
    y:30,
    duration:0.8,
    opacity:0,
    ease: "power2.inOut",
      

})






