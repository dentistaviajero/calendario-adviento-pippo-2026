
/* Complementos del Calendario de Adviento de Pippo.
   Conserva cupones, imágenes, regalos y acceso privado. */
(() => {
  'use strict';

  const films = {
    2:  { id: '-B-5LimuwX0', title: 'Un cuento de Navidad (1997)' },
    5:  { id: 'ka4RYYnYzEw', title: 'Película sorpresa 2' },
    8:  { id: 'xv71Sm47DrE', title: 'Película sorpresa 3' },
    11: { id: 'VQz2fLD-bDQ', title: 'Película sorpresa 4' },
    13: { id: 'B-rvdQjAbZE', title: 'Película sorpresa 5' },
    16: { id: 'Kv_tEdBkNUM', title: 'Película sorpresa 6' },
    19: { id: 'uASBt0IRqb0', title: 'Película sorpresa 7' },
    22: { id: 'rsUoa8e3ObA', title: 'Película sorpresa 8' },
    24: { id: 'l49a9z8xBL0', title: 'Película sorpresa 9' }
  };

  const style = document.createElement('style');
  style.textContent = `
    .pippo-reyes-banner {
      margin: 16px 0 10px;
      padding: 20px;
      text-align: center;
      border: 2px solid #f2c75e;
      border-radius: 16px;
      background: #fff7df;
      color: #49244d;
    }
    .pippo-reyes-banner h2 { margin: 0 0 10px; }
    .pippo-reyes-banner p { line-height: 1.5; }
    .pippo-reyes-banner a,
    .pippo-film-extra a {
      display: inline-block;
      margin-top: 10px;
      padding: 11px 16px;
      border-radius: 9px;
      background: #a70f32;
      color: white !important;
      font-weight: bold;
      text-decoration: none;
    }
    .pippo-film-extra {
      margin: 14px 0;
      padding: 16px;
      border: 2px solid #f2c75e;
      border-radius: 12px;
      background: #fff9e7;
      color: #34233a;
    }
    .pippo-film-extra small {
      display: block;
      margin-top: 9px;
      color: #5c5260;
    }
  `;
  document.head.appendChild(style);

  function showReyesBanner() {
    if (document.getElementById('pippo-reyes-banner')) return;

    const existingLink = document.querySelector(
      'a[href*="tarjeta-sellos-reyes-2027.png"]'
    );
    const extras = document.querySelector('.extras');

    if (!existingLink || !extras) return;

    const banner = document.createElement('section');
    banner.id = 'pippo-reyes-banner';
    banner.className = 'pippo-reyes-banner';

    const heading = document.createElement('h2');
    heading.textContent = '¡Prepara tu regalo especial de Reyes!';

    const message = document.createElement('p');
    message.textContent =
      'Descarga e imprime tu Pasaporte de Reyes. ' +
      'Participa siguiendo la dinámica indicada y reúne ' +
      'tus sellos para obtener un regalo especial de Reyes.';

    const button = document.createElement('a');
    button.href = existingLink.href;
    button.download = 'Pasaporte-de-Reyes-Pippo.png';
    button.textContent = 'Descargar e imprimir mi pasaporte';

    banner.append(heading, message, button);
    extras.parentNode.insertBefore(banner, extras);
  }

  function showFilm() {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modalTitle');
    const target = document.getElementById('extraDownloads');

    if (!modal || !modal.open || !title || !target) return;

    const match = title.textContent.match(/^Día\s+(\d+)\b/i);
    if (!match) return;

    const day = Number(match[1]);
    const film = films[day];
    const existing = target.querySelector('.pippo-film-extra');

    if (existing && Number(existing.dataset.day) === day) return;
    if (existing) existing.remove();
    if (!film) return;

    const section = document.createElement('section');
    section.className = 'pippo-film-extra';
    section.dataset.day = String(day);

    const heading = document.createElement('strong');
    heading.textContent = '¡Regalito extra: cine navideño!';

    const description = document.createElement('p');
    description.textContent = film.title;

    const button = document.createElement('a');
    button.href = 'https://www.youtube.com/watch?v=' +
      encodeURIComponent(film.id);
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.textContent = 'Ver película navideña en YouTube';

    const note = document.createElement('small');
    note.textContent =
      'Video externo de YouTube. Su disponibilidad ' +
      'depende del canal que lo publicó.';

    section.append(heading, description, button, note);
    target.appendChild(section);
  }

  function start() {
    showReyesBanner();

    const title = document.getElementById('modalTitle');
    const modal = document.getElementById('modal');
    const downloads = document.getElementById('extraDownloads');

    if (!title || !modal || !downloads) return;

    const observer = new MutationObserver(showFilm);

    observer.observe(title, {
      childList: true,
      characterData: true,
      subtree: true
    });

    observer.observe(modal, {
      attributes: true,
      attributeFilter: ['open']
    });

    observer.observe(downloads, {
      childList: true
    });

    showFilm();
  }

  window.PippoAdvientoExtras = {
    films,
    filmButton: showFilm,
    stampButton: showReyesBanner
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
