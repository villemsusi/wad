function createPostsFromJson(json) {
    let area = document.getElementById("postArea");
    for (const post of json.Posts) {
        let article = document.createElement("article");
        area.appendChild(article);
        let imgDiv = document.createElement("div");
        imgDiv.className = "pic-and-date";
        area.lastChild.appendChild(imgDiv);
        let userImg = document.createElement("img");
        userImg.src = "../src/assets/defaultUser.png";
        userImg.className = "prof-pic";
        userImg.alt="user-profile-picture";
        imgDiv.appendChild(userImg);
        let author = document.createElement("b");
        author.innerHTML = post.Author + " @ " + post.Time;
        imgDiv.appendChild(author);
        if (post.img != null) {
            let postImg = document.createElement("img");
            postImg.src = post.img;
            postImg.id = post.id;
            postImg.alt = post.id + "_image";
            area.lastChild.appendChild(postImg);
        }
        let postContent = document.createElement("p");
        postContent.innerHTML = post.content;
        area.lastChild.appendChild(postContent);
        let likeDiv = document.createElement("div")
        likeDiv.className = "like-and-amount"
        area.lastChild.appendChild(likeDiv)
        let likeButton=document.createElement("img")
        likeButton.className = "likeButton"
        likeButton.src = "../src/assets/like.png"
        likeButton.addEventListener("click", ev => {
            console.log("hahaha");
        })
        likeDiv.appendChild(likeButton)
        let likeAmount = document.createElement("p")
        likeAmount.className = "clicks"
        likeAmount.innerHTML = "0"
        likeDiv.appendChild(likeAmount)
    }
}

function click(likeAmount) {
    likeAmount += 1;
    document.getElementsByClassName("clicks").innerHTML = likeAmount;
}
export default createPostsFromJson

