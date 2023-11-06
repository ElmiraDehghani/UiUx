


document.addEventListener('DOMContentLoaded',()=>{

anime({
  targets:'#bgColor a',
  translateX:[50,0],
  easing:'easeOutExpo',
  duration:500,
  delay:(el,i)=>{
    return 700 + 100 *i;
  },
  opacity:[0,1],
})
anime({
  targets:'.navbar form',
  translateX:[-50,0],
  easing:'easeOutExpo',
  duration:1200,
  delay:(el,i)=>{
    return 1100 + 100 *i;
  },
  opacity:[0,1],
})
anime({
  targets:'.text-box ',
  translateY:[50,0],
  easing:'easeOutExpo',
  duration:1000,
  delay:(el,i)=>{
    return 1100 + 100 *i;
  },
  opacity:[0,1],
})
anime({
  targets:'.svg',
  translateY:[-100,0],
  easing:'easeOutExpo',
  duration:1000,
  delay:600,
  opacity:[0,1],
})
})

window.addEventListener('scroll',()=>{
anime({
  targets:'#section5 .btn',
  easing:'easeOutExpo',
  duration:1000,
  delay:800,
  opacity:[0,1],
  loop:false
})
anime({
  targets:'#d4 .item',
  easing:'easeOutExpo',
  duration:1000,
  delay:800,
  opacity:[1,1],
  loop:false
})

anime({
  targets:'#flex6 .item',
  easing:'easeOutExpo',
  duration:400,
  translateY:[10,0],
  delay:(el,i)=>{
    return 300 + 100 *i;
  },
  opacity:[0,1],
  loop:false
})


})

const section=document.querySelectorAll("section");
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom < window.innerHeight+10 &&
    rect.right <= window.innerWidth
    );

}
function revealOnScroll() {
  // Loop through each element
  for (let div of section) {
  // Check if the element is in the viewport
  if (isInViewport(div)) {
  // Add the show class to the element
  div.classList.add("show");
  }
  }
}
  window.addEventListener("scroll", revealOnScroll);



$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    responsiveClass:true,
  
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:true
        }
    }
})
})