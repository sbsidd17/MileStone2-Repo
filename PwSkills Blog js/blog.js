const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');

let posts = JSON.parse(localStorage.getItem("posts"))

let post = posts[index]


let blog = document.createElement("div")
blog.className = "blog"
blog.innerHTML = `
<div class="blog-main">
<div>
  <h3>${post.title}</h3><br/>
  <p>${post.desc}</p>
</div>
<div>
  <img class="blog-img" src="${post.imageUrl}" alt="">
</div>
</div>
<div style="padding: 20px;">
${post.content}
</div>
    `

document.querySelector("section").appendChild(blog)