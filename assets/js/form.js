document.getElementById("blogForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    var blogPost = {username:username,title:title,content:content}
   // Store blog post data to localStorage
  var posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  posts.push(blogPost);
  localStorage.setItem("blogPosts", JSON.stringify(posts));

  // Redirect to posts page
  window.location.replace("./blog.html")
});