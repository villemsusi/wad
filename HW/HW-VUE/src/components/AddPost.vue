<template>

  <div id="addPostArea">
    <div id="add-box" class="flex-element">
      <form method="GET" class="newPost" id="addForm">
        <label>Post <br> Body</label>
        <label>
          <input type="text" placeholder="textarea" id="textbox" required>
        </label><br>
        <button id="postButton" @click="getPostInfo" type="submit">Submit</button>
        <br>
      </form>
    </div>
  </div>
</template>

<script>

export default {

  name: "AddPost",
  data() {
    return {}
  },
  methods: {
    async getPostInfo() {
      let textbox = document.getElementById("textbox")
      let text = textbox.value
      const date = new Date();
      let day = date.getDate().toString();
      let month = (date.getMonth() + 1).toString();
      let year = date.getFullYear().toString();
      let currentDate = day+'.'+month+'.'+year;
      let author = "test author"
      const request = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: 'include',
        body: JSON.stringify({
          "author": author,
          "title": currentDate,
          "body": text,
        })
      }
      fetch(`http://localhost:3000/api/addpost`, request)

    }
  }

}
</script>
<style>
@import '../style/addPost.css';
</style>
  