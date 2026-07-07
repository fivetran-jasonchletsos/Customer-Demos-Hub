async function renderDemos() {
  const container = document.getElementById('cards');

  let demos;
  try {
    const res = await fetch('./demos.json');
    demos = await res.json();
  } catch (err) {
    container.innerHTML = `<div class="empty">Could not load demos.json (${err}).</div>`;
    return;
  }

  if (!Array.isArray(demos) || demos.length === 0) {
    container.innerHTML = '<div class="empty">No demos listed yet.</div>';
    return;
  }

  container.innerHTML = demos
    .map((d) => {
      const tags = (d.systems || [])
        .map((s) => `<span class="tag">${escapeHtml(s)}</span>`)
        .join('');
      return `
        <div class="card">
          <h2>${escapeHtml(d.customer)}</h2>
          <div class="summary">${escapeHtml(d.summary)}</div>
          <div class="systems">${tags}</div>
          <div class="links">
            <a href="${d.url}" target="_blank" rel="noopener noreferrer">Live demo &rarr;</a>
            ${d.repo ? `<a href="${d.repo}" target="_blank" rel="noopener noreferrer">Repo</a>` : ''}
          </div>
          ${d.added ? `<div class="added">Added ${escapeHtml(d.added)}</div>` : ''}
        </div>
      `;
    })
    .join('');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = String(str);
  return div.innerHTML;
}

renderDemos();
