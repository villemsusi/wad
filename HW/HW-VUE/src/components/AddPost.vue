<template>

  <div id="addPostArea">
    <div id="add-box" class="flex-element">
      <form method="GET" class="newPost" id="addForm">
        <label>Post <br> Body</label>
        <label>
          <input type="text" placeholder="textarea" class="textbox" required>
        </label><br>
        <label>Select <br> file</label>
        <input type="file" class="button2"><br><br>
        <input id="postButton" type="submit" class="button"><br>
      </form>
    </div>
  </div>
</template>

<style>
@import '../style/addPost.css';
</style>
  