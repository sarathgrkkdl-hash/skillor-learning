/* ============================= */
/* FAQ */
/* ============================= */
function tFaq(el){
  const item = el.parentElement;
  const open = item.classList.contains('open');
  document.querySelectorAll('.fitem').forEach(i=>i.classList.remove('open'));
  if(!open) item.classList.add('open');
}

/* ============================= */
/* REVEAL ANIMATION */
/* ============================= */
const obs = new IntersectionObserver((entries)=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){
      setTimeout(()=>e.target.classList.add('vis'), i*90);
      obs.unobserve(e.target);
    }
  });
},{threshold:0.07});

document.querySelectorAll('.rev').forEach(r=>obs.observe(r));

/* ============================= */
/* NAV SCROLL */
/* ============================= */
window.addEventListener('scroll',()=>{
  document.querySelector('nav').style.background =
  window.scrollY>50 ? 'rgba(30,14,56,0.98)' : 'rgba(45,21,80,0.97)';
});

/* ============================= */
/* MOBILE MENU */
/* ============================= */
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(toggle){
  toggle.onclick = () => {
    navLinks.classList.toggle("active");
  };
}

/* ============================= */
/* CARD ANIMATION */
/* ============================= */

const cards = Array.from(document.querySelectorAll('.card'));

const fanRot  = [-25,-15,-5,5,15,25];
const fanX    = [-200,-120,-40,40,120,200];
const fanY    = [30,15,5,5,15,30];

let hovIdx = -1;
let t = 0;

cards.forEach((card,i)=>{
  card.addEventListener("mouseenter",()=>{hovIdx=i;});
  card.addEventListener("mouseleave",()=>{hovIdx=-1;});
});

function isMobile(){
  return window.innerWidth <= 768;
}

function animate(){

  if(isMobile()){
    requestAnimationFrame(animate);
    return;
  }

  t += 0.02;

  cards.forEach((c,i)=>{

    let scale = 1;
    let opacity = 1;
    let blur = 0;
    let extraY = Math.sin(t + i) * 10;

    if(hovIdx !== -1){
      if(i===hovIdx){
        scale=1.18;
        extraY=-40;
      }else{
        scale=0.9;
        opacity=0.15;
        blur=3;
        extraY=20;
      }
    }

    c.style.opacity = opacity;
    c.style.filter = `blur(${blur}px)`;
    c.style.transform =
    `translate(${fanX[i]}px,${fanY[i]+extraY}px)
     rotate(${fanRot[i]}deg)
     scale(${scale})`;

  });

  requestAnimationFrame(animate);
}

animate();