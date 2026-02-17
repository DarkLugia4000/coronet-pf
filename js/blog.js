async function loadPosts() {
  const response = await fetch('/blog/posts/json/posts.json');
  const data = await response.json();
  
  // Render featured post
  const featured = data.featured;
  document.querySelector('.featured-post').innerHTML = `
    <div class="post-meta">${formatDate(featured.date)} • ${featured.category}</div>
    <h2>${featured.title}</h2>
    <p class="post-excerpt">${featured.excerpt}</p>
    <div class="read-more">Read Article &rarr;</div>
  `;
  document.querySelector('.featured-post').onclick = () => window.location.href = featured.url;
  
  // Render archive posts
  const postList = document.querySelector('.post-list');
  postList.innerHTML = data.archive.map(post => `
    <article class="post-item" onclick="window.location.href='${post.url}'">
      <div class="post-info">
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
      </div>
      <span class="post-date">${formatDate(post.date)}</span>
    </article>
  `).join('');
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
}

loadPosts();