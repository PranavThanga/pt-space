fetch('blog-content/blogs.json')
  .then(res => res.json())
  .then(posts => {

    const holder = document.getElementById('blog-overview-holder');

    // Clear any existing placeholder cards
    holder.innerHTML = '';

    posts.forEach(post => {

      // Create the outer card div
      const card = document.createElement('div');
      card.className = 'blog-overview';

      // Fill the card with content, linking to blog-post.html with the post's id
      card.innerHTML = `
        <a href="blog-post.html?id=${post.id}">
          <img src="${post.thumbnail}" alt="${post.title}">
          <h3>${post.title}>
          <p>${post.blurb}</p>
          <p class="post-date">Published on: ${post.date}</p>
        </a>
      `;

      holder.appendChild(card);
    });

  })
  .catch(err => {
    // If something goes wrong (e.g. JSON file missing), show a message
    document.getElementById('blog-overview-holder').innerHTML =
      '<p>Could not load blog posts.</p>';
    console.error('Failed to load blogs.json:', err);
  });