(function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      menuToggle.setAttribute('aria-label', expanded ? 'Apri menu' : 'Chiudi menu');
      siteNav.classList.toggle('open');
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Apri menu');
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid && Array.isArray(window.projects)) {
    projectsGrid.innerHTML = window.projects.map((project) => `
      <article class="card project-card reveal">
        <img src="${project.coverImage}" alt="Anteprima progetto ${project.title}" loading="lazy">
        <div class="project-content">
          <p class="project-meta">${project.category} · ${project.year}</p>
          <h3>${project.title}</h3>
          <p>${project.shortDescription}</p>
          <a href="project.html?id=${encodeURIComponent(project.id)}" aria-label="Vedi progetto ${project.title}">Vedi progetto</a>
          ${project.projectUrl && project.projectUrl !== '#' ? `<a href="${project.projectUrl}" target="_blank" rel="noopener" aria-label="Apri sito del progetto ${project.title}">Visita sito</a>` : ''}
        </div>
      </article>
    `).join('');
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();
