const source = "FILE";


window.onload = (event) => {
    if (source == "API") {
        fetch("https://myjson.dit.upm.es/api/bins/j4gi")
            .then((response) => response.json())
            .then((json) => {
                createPostsFromJson(json);
            });
    } else if (source == "FILE") {
        fetch("../src/js/posts.json")
            .then((response) => response.json())
            .then((json) => {
                createPostsFromJson(json);
            });
    }   
}

function createPostsFromJson(json) {
    let area = document.getElementById("postArea");
    for (const post of json.Posts) {
        let article = document.createElement("article");
        area.appendChild(article);
        let imgDiv = document.createElement("div");
        imgDiv.className = "pic-and-date";
        area.lastChild.appendChild(imgDiv);
        let userImg = document.createElement("img");
        userImg.src = "../assets/defaultUser.png";
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
    }
}