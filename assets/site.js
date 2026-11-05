(function(){
  var root=document.documentElement;
  var button=document.querySelector('[data-theme-toggle]');
  function setTheme(v){root.setAttribute('data-theme',v);try{localStorage.setItem('jiahua-site-theme',v)}catch(e){}if(button){button.setAttribute('aria-label','Switch to '+(v==='dark'?'light':'dark')+' mode');button.textContent=v==='dark'?'☀':'☾';}}
  var saved='';try{saved=localStorage.getItem('jiahua-site-theme')||''}catch(e){}
  setTheme(saved||(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
  if(button)button.addEventListener('click',function(){setTheme(root.getAttribute('data-theme')==='dark'?'light':'dark')});
  var pic=document.getElementById('profile-pic');if(pic){pic.addEventListener('load',function(){var f=document.querySelector('.initials');if(f)f.style.display='none'});pic.addEventListener('error',function(){pic.style.display='none'});if(pic.complete&&pic.naturalWidth){var f=document.querySelector('.initials');if(f)f.style.display='none'}else if(pic.complete&&!pic.naturalWidth){pic.style.display='none'}}
})();
