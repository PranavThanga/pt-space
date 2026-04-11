// Step 1: Read the ?id= value from the URL
const params = new URLSearchParams(window.location.search);
const postId = params.get('id');

// If there's no id in the URL at all, show an error immediately
if (!postId) {
  document.getElementById('post-content').innerHTML = '<p>No post specified.</p>';
} else {

  // Step 2: Fetch the JSON index to get this post's metadata
  fetch('blog-content/blogs.json')
    .then(res => res.json())
    .then(posts => {

      // Find the post in the array whose id matches the URL parameter
      const post = posts.find(p => p.id === postId);

      if (!post) {
        // No matching post found in the JSON
        document.getElementById('post-content').innerHTML = '<p>Post not found.</p>';
        return; // Stop the chain here - returning undefined skips the next .then()
      }

      // Step 3: Fill in the metadata from JSON
      document.getElementById('post-title').textContent = post.title;
      document.getElementById('post-date').textContent = 'Published: ' + post.date;
      document.title = post.title; // Updates the browser tab title too

      // Step 4: Fetch the actual HTML content file for this post
      // We return this fetch so the next .then() receives its result
      return fetch('blog-content/' + postId + '.html');

    })
    .then(res => {
      // This .then() only runs if we returned a fetch above
      // If post wasn't found, res is undefined, so we check for that
      if (!res) return;
      return res.text(); // .text() gives us raw HTML as a string (not parsed like .json())
    })
    .then(html => {
      if (!html) return;
      // Inject the HTML string directly into the content container
      document.getElementById('post-content').innerHTML = html;
    })
    .catch(err => {
      document.getElementById('post-content').innerHTML = '<p>Failed to load post.</p>';
      console.error('Error loading blog post:', err);
    });

}