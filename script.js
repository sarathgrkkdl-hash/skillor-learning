function tFaq(el){
  const item=el.parentElement;
  const open=item.classList.contains('open');
  document.querySelectorAll('.fitem').forEach(i=>i.classList.remove('open'));
  if(!open)item.classList.add('open');
}
const obs=new IntersectionObserver((entries)=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){setTimeout(()=>e.target.classList.add('vis'),i*90);obs.unobserve(e.target);}
  });
},{threshold:0.07});
document.querySelectorAll('.rev').forEach(r=>obs.observe(r));
window.addEventListener('scroll',()=>{
  document.querySelector('nav').style.background=window.scrollY>50?'rgba(30,14,56,0.98)':'rgba(45,21,80,0.97)';
});