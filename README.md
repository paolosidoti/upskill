# Portfolio personale statico (data-driven)

Sito portfolio statico per web designer/docente realizzato con **HTML, CSS e JavaScript vanilla**, pronto per GitHub Pages.

## Struttura file

- `index.html`
- `project.html`
- `css/style.css`
- `js/main.js`
- `js/project.js`
- `data/projects.js`
- `assets/img/`
- `README.md`

## Come aggiornare i progetti

Apri `data/projects.js` e modifica l'array `projects`.
Ogni oggetto progetto include:

- `id`
- `title`
- `category`
- `year`
- `client`
- `role`
- `shortDescription`
- `description`
- `challenge`
- `solution`
- `results`
- `services`
- `tools`
- `coverImage`
- `gallery`
- `projectUrl`

## Esempio aggiunta nuovo progetto

```js
projects.push({
  id: "nuovo-progetto",
  title: "Nuovo progetto",
  category: "Web Design",
  year: "2026",
  client: "Cliente",
  role: "Web Designer",
  shortDescription: "Descrizione breve",
  description: "Descrizione estesa",
  challenge: "Sfida",
  solution: "Soluzione",
  results: "Risultati",
  services: ["UX/UI", "Sviluppo"],
  tools: ["Figma", "HTML", "CSS", "JavaScript"],
  coverImage: "assets/img/project-placeholder-1.svg",
  gallery: ["assets/img/project-placeholder-1.svg"],
  projectUrl: "#"
});
```

## Come aprire il sito in locale

1. Scarica o clona il repository.
2. Apri `index.html` nel browser.

## Pubblicazione su GitHub Pages

1. Crea un repository su GitHub.
2. Carica tutti i file del progetto.
3. Vai in **Settings > Pages**.
4. Scegli **Deploy from a branch**.
5. Seleziona branch **main** e cartella **/root**.
6. Salva e apri il link generato.

## Nota importante: perché non vedevo le pagine progetto

Il sito legge i dati da `window.projects`.
Per questo, in `data/projects.js` trovi alla fine:

```js
window.projects = projects;
```

Se questa riga manca, la homepage non riesce a generare le card e `project.html?id=...` non trova i dati.

