const addPostBtn = document.querySelector("#addPostBtn");
const closeModalBtn = document.querySelector("#closeModalBtn");
const modal = document.querySelector(".modal")

addPostBtn.addEventListener("click", ()=>{
    modal.classList.add("active");
})

closeModalBtn.addEventListener("click", ()=>{
    modal.classList.remove("active");
})



// Show All Posts On Screen
let posts = JSON.parse(localStorage.getItem("posts")) || []

posts.map((post, index)=>{
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <img src="${post.imageUrl}" alt="">
    <h3>${post.title}</h3>
    <p>${post.desc}</p>
    <button id="readmore-${index}">Read More...</button>
  `
   document.querySelector("main").appendChild(card) 
   document.querySelector(`#readmore-${index}`).addEventListener("click", ()=>{
    window.location.href = `blog.html?index=${index}`
   })
})

// Add Posts
const addBlogBtn = document.querySelector("#addBlogBtn");

addBlogBtn.addEventListener("click", ()=>{
    let imageUrl = document.querySelector("#imageUrl").value
    let title = document.querySelector("#title").value
    let desc = document.querySelector("#desc").value
    let content = document.querySelector("#content").value

    let newPost = {
        imageUrl,
        title,
        desc,
        content,
    }

    posts.push(newPost)

    localStorage.setItem("posts", JSON.stringify(posts))
    window.location.reload()
})








