/* Complemento opcional para Calendario de Adviento 2026. No modifica el contenido existente. */
(() => {
  'use strict';
  const films = {
    2:  {id:'-B-5LimuwX0', title:'Un cuento de Navidad (1997)'},
    5:  {id:'ka4RYYnYzEw', title:'Película sorpresa 2'},
    8:  {id:'xv71Sm47DrE', title:'Película sorpresa 3'},
    11: {id:'VQz2fLD-bDQ', title:'Película sorpresa 4'},
    13: {id:'B-rvdQjAbZE', title:'Película sorpresa 5'},
    16: {id:'Kv_tEdBkNUM', title:'Película sorpresa 6'},
    19: {id:'uASBt0IRqb0', title:'Película sorpresa 7'},
    22: {id:'rsUoa8e3ObA', title:'Película sorpresa 8'},
    24: {id:'l49a9z8xBL0', title:'Película sorpresa 9'}
  };
  const root = new URL('.', document.currentScript?.src || location.href);
  const stampUrl = new URL('assets/tarjeta-sellos-reyes-2027.png', root).href;
  const css = document.createElement('style');
  css.textContent = `.pippo-reyes-link{display:inline-flex;align-items:center;gap:.5rem;background:#fff8e4;color:#5e235b;border:2px solid #e4a933;border-radius:999px;padding:.65rem 1rem;font-weight:800;text-decoration:none;box-shadow:0 2px 8px #0002;margin:.5rem}.pippo-film-extra{margin-top:1rem;padding:1rem;background:#fff9e7;border:2px solid #f2c75e;border-radius:14px;color:#34233a}.pippo-film-extra a{display:inline-block;margin-top:.6rem;padding:.7rem 1rem;background:#a70f32;color:white!important;text-decoration:none;border-radius:9px;font-weight:bold}.pippo-film-extra small{display:block;margin-top:.5rem;color:#5c5260}`;
  document.head.appendChild(css);
  function stampButton(){
    if(document.getElementById('pippo-reyes-download')) return;
    const a=document.createElement('a');a.id='pippo-reyes-download';a.className='pippo-reyes-link';a.href=stampUrl;a.target='_blank';a.rel='noopener';a.download='Pasaporte-de-Reyes-Club-de-Pippo-2027.png';a.textContent='👑 Descargar Pasaporte de Reyes';
    a.title='Descarga disponible desde ahora. Los sellos solo son válidos a partir del 1 de diciembre de 2026.';
    const target=document.querySelector('header, .topbar, .toolbar, main, body');
    target.prepend(a);
    const note=document.createElement('small');note.textContent='Sellos válidos desde el 1 de diciembre de 2026.';note.style.cssText='display:block;margin:.1rem .6rem .5rem;color:inherit';a.insertAdjacentElement('afterend',note);
  }
  function filmButton(day, container){
    const film=films[Number(day)];if(!film || !container || container.querySelector('.pippo-film-extra')) return false;
    const section=document.createElement('section');section.className='pippo-film-extra';
    const heading=document.createElement('strong');heading.textContent='🎬 ¡Regalito extra: cine navideño!';section.append(heading);
    const p=document.createElement('p');p.textContent=film.title;section.append(p);
    const a=document.createElement('a');a.href='https://www.youtube.com/watch?v='+encodeURIComponent(film.id);a.target='_blank';a.rel='noopener noreferrer';a.textContent='Ver en YouTube';section.append(a);
    const note=document.createElement('small');note.textContent='Video externo de YouTube. Su disponibilidad depende del canal que lo publicó.';section.append(note);
    container.append(section);return true;
  }
  window.PippoAdvientoExtras={films,filmButton,stampButton,stampUrl};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',stampButton); else stampButton();
  // Integración recomendada en el código existente, justo después de abrir la casilla:
  // window.PippoAdvientoExtras.filmButton(numeroDia, elementoDelCupon);
})();
