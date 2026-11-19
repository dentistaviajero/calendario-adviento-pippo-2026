/* Películas extra del Calendario de Adviento de Pippo.
   No sustituye cupones, imágenes ni contenido de las casillas. */
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

  const style = document.createElement('style');
  style.textContent = '.pippo-film-extra{margin:14px 0;padding:14px;background:#fff9e7;border:2px solid #f2c75e;border-radius:12px;color:#34233a}.pippo-film-extra a{display:inline-block;margin-top:8px;padding:10px 14px;background:#a70f32;color:white!important;text-decoration:none;border-radius:8px;font-weight:bold}.pippo-film-extra small{display:block;margin-top:8px;color:#5c5260}';
  document.head.appendChild(style);

  function filmButton(day, container) {
    const film = films[Number(day)];
    if (!film || !container || container.querySelector('.pippo-film-extra')) return false;

    const section = document.createElement('section');
    section.className = 'pippo-film-extra';
    const heading = document.createElement('strong');
    heading.textContent = '🎬 ¡Regalito extra: cine navideño!';
    const p = document.createElement('p');
    p.textContent = film.title;
    const link = document.createElement('a');
    link.href = 'https://www.youtube.com/watch?v=' + encodeURIComponent(film.id);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Ver película en YouTube';
    const note = document.createElement('small');
    note.textContent = 'Video externo. Su disponibilidad depende del canal de YouTube.';
    section.append(heading, p, link, note);
    container.append(section);
    return true;
  }

  window.PippoAdvientoExtras = { films, filmButton };

  // Detecta la apertura de una casilla sin modificar index.html.
  const observer = new MutationObserver(() => {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modalTitle');
    if (!modal || !modal.open || !title) return;

    const match = title.textContent.match(/^Día\s+(\d+)\b/i);
    if (!match) return;

    const day = Number(match[1]);
    const target = document.getElementById('extraDownloads') || modal;
    target.querySelectorAll('.pippo-film-extra').forEach(node => node.remove());
    filmButton(day, target);
  });

  function start() {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
