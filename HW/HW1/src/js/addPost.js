const form = document.getElementById("addForm");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    let content = form.elements[0].value;

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}.${month}.${year}`;

    let author = "John Doe";

    let language = "Default";

    let name = "Post";

    let newPost = {
        "Name": name,
        "Author": author,
        "Time": currentDate,
        "language": language,
        "content": content,
    }, currJson;
    currJson.Posts = undefined;

    fetch("../src/js/posts.json")
            .then((response) => response.json())
            .then((json) => {
                currJson = json;
                currJson.Posts.push(newPost);
                console.log(currJson);
            });
}