(function () {
  const content = document.getElementById('project-content');
  if (!content) return;

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id');

  if (!projectId || !Array.isArray(window.projects)) {
    content.innerHTML = `
      <article class="card">
        <h1>Progetto non trovato</h1>
        <p>Controlla il link oppure torna alla homepage per vedere i progetti disponibili.</p>
        <a href="index.html" class="btn btn-primary">Torna alla homepage</a>
      </article>
    `;
    return;
  }

  const project = window.projects.find((item) => item.id === projectId);

  if (!project) {
    content.innerHTML = `
      <article class="card">
        <h1>Progetto non trovato</h1>
        <p>Nessun progetto corrisponde all'ID richiesto.</p>
        <a href="index.html" class="btn btn-primary">Torna alla homepage</a>
      </article>
    `;
    return;
  }

  const services = project.services.map((service) => `<li>${service}</li>`).join('');
  const tools = project.tools.map((tool) => `<li>${tool}</li>`).join('');
  const gallery = project.gallery.map((img, index) => `<img src="${img}" alt="${project.title} - immagine ${index + 1}" loading="lazy">`).join('');

  content.innerHTML = `
    <article class="project-layout">
      <header>
        <p class="project-meta">${project.category} · ${project.year}</p>
        <h1>${project.title}</h1>
      </header>

      <img src="${project.coverImage}" alt="Immagine copertina del progetto ${project.title}">

      <section class="project-info">
        <div class="card"><h3>Cliente</h3><p>${project.client}</p></div>
        <div class="card"><h3>Ruolo</h3><p>${project.role}</p></div>
        <div class="card"><h3>Anno</h3><p>${project.year}</p></div>
        <div class="card"><h3>Categoria</h3><p>${project.category}</p></div>
      </section>

      <section class="card"><h2>Descrizione</h2><p>${project.description}</p></section>
      <section class="card"><h2>Sfida</h2><p>${project.challenge}</p></section>
      <section class="card"><h2>Soluzione</h2><p>${project.solution}</p></section>
      <section class="card"><h2>Risultati</h2><p>${project.results}</p></section>

      <section class="card">
        <h2>Servizi</h2>
        <ul>${services}</ul>
      </section>

      <section class="card">
        <h2>Strumenti usati</h2>
        <ul>${tools}</ul>
      </section>

      <section>
        <h2>Galleria immagini</h2>
        <div class="gallery">${gallery}</div>
      </section>

      ${project.projectUrl && project.projectUrl !== '#' ? `<p><a class="btn btn-primary" href="${project.projectUrl}" target="_blank" rel="noopener">Visita il progetto</a></p>` : ''}
      <p><a class="btn btn-secondary" href="index.html#progetti">Torna ai progetti</a></p>
    </article>
  `;
})();
