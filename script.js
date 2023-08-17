var crsr=document.querySelector("#curser");
var blur = document.querySelector("#curser-blur");
document.addEventListener("mousemove",function(dets){
          crsr.style.left=dets.x+"px";
          crsr.style.top=dets.y+"px";
          blur.style.left = dets.x -250 + "px";
          blur.style.top = dets.y - 250 + "px";
        });
var navh4=document.querySelectorAll("#nav h4");
    navh4.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            crsr.style.scale=3;
            crsr.style.border ="1px solid white"
            crsr.style.backgroundColor="transparent"
        })
        elem.addEventListener("mouseleave",function(){
            crsr.style.scale=1;
            crsr.style.border ="0px solid "
            crsr.style.backgroundColor=" #de7f49"
        })
       
    });







gsap.registerPlugin(ScrollTrigger);

function applyTiltEffect(card) {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { rotate: 5, duration: 0.1 }); // Adjust the rotation angle as needed
  });
  
  card.addEventListener("mouseleave", () => {
    gsap.to(card, { rotate: 0, duration: 0.1 });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card1, .card2, .card3");

  cards.forEach((card) => {
    applyTiltEffect(card);
  });

  // Other GSAP animations and ScrollTrigger configurations
});

gsap.to("#nav", {
    backgroundColor:"#000", /*used and imported gsap library to get the animations in website using javascript*/
                             /*js file ke through bohot css properties likh skte through gsap*/
    duration:0.75,
    height:"100px", /*ye height ho jaegi*/
    scrollTrigger:{
        trigger:"#nav", /*what it will trigger*/
        scroller:"body",/*on body*/
        start:"top -15%",/*upar vala kab trigger hoga*/
        end:"top -12%",/*neeche vala ------""--*/
        scrub:1 /*kitni speed me proper dark colour dikhega*/
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:3
        

    }

})
gsap.from("#about-us img,#about-us-in",{
    y:60,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3


    }
})
gsap.from(".card1,.card2,.card3",{
    scale:0.8,
    opacity:0,
    duration:0.2,
   
    scrollTrigger:{
        trigger:"#cards",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1


    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    opacity:0,
    duration:1,
  
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 55%",
        end:"top 40%",
        scrub:4


    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    opacity:0,
    duration:1,
   
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 55%",
        end:"top 40%",
        scrub:5


    }
})
gsap.from("#page4 h1",{
    y:50,
    duration:1,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3

}
})