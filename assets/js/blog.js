document.addEventListener('DOMContentLoaded', function() {
  const blogForm = document.getElementById('blog-form');
  const blogContentInput = document.getElementById('blog-content');
  const blogPostsContainer = document.getElementById('blog-posts');
  const modeToggleBtn = document.getElementById('mode-toggle');
  const body = document.body;

  modeToggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      modeToggleBtn.textContent = 'Light Mode';
    } else {
      modeToggleBtn.textContent = 'Dark Mode';
    }
  });
  loadBlogPosts();

  // Event listener for form submission
  blogForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
  // Get blog content from input
    const blogContent = blogContentInput.value.trim();
    if (blogContent === '') return;

    // Save blog post to local storage
    saveBlogPost(blogContent);
    loadBlogPosts();

  // Clear the input field
    blogContentInput.value = '';
  });


  // Local Storage
  function loadBlogPosts() {
    blogPostsContainer.innerHTML = '';
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    posts.forEach(function(post) {
      const postElement = document.createElement('article');
      const postUsername = document.createElement('p');
      const hr = document.createElement('hr')
      const postTitle = document.createElement('h3')
      postTitle.style = "text-decoration: underline; text-align: center;"
      postUsername.textContent = "Author: " + post.username;
      postTitle.textContent = post.title;
      postElement.textContent = post.content;
      blogPostsContainer.appendChild(postTitle);
      blogPostsContainer.appendChild(postElement);
      blogPostsContainer.appendChild(postUsername);
      blogPostsContainer.appendChild(hr);
    });
  }
});
