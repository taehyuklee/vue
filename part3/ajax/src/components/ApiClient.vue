<template>
  <div>
    <ul>
      <li>
        <button @click="get">get</button>
      </li>
      <li>
        <button @click="post">post</button>
      </li>
      <li>
        <button @click="put">put</button>
      </li>
      <li>
        <button @click="del">delete</button>
      </li>
      <li>
        <form
          id="uploadForm"
          enctype="multipart/form-data"
          action="/api/upload"
          method="post"
          @submit.prevent="upload"
        >
          <input type="text" name="name" value="text-value" />
          <br />
          <input type="file" name="userFile" multiple />
          <input type="submit" value="Upload File" name="submit" />
        </form>
      </li>
    </ul>
    <code id="result"></code>
  </div>
</template>

<script>
import axios from "axios";

export default {
  setup() {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    function showResult(json) {
      document.getElementById("result").innerHTML = JSON.stringify(json);
    }
    function get() {
      console.log('get');
      fetch("http://localhost:4000/api/user/" + 1, {
        method: "GET",
        headers,
      })
        .then(function (response) {
          return response.json();
        })
        .then((json) => {
          showResult(json);
        });
    }
    function post() {
      console.log('post');
      const data = {
        id: 20,
        name: "hello",
      };
      axios
        .post("http://localhost:4000/api/user", data)
        .then((response) => {
          showResult(response.data);
        });
    }
    async function put() {
      const result = await axios
        .put("http://localhost:4000/api/user", {
          id: 1,
          name: "world",
        });
      showResult(result.data);
    }
    async function del() {
      try {
        const result = await axios.delete("http://localhost:4000/api/user");
        showResult(result.data);
      } catch (error) {
        showResult(error);
      }
    }

    async function upload() {
      try {
        const form = document.getElementById('uploadForm');
        const formData = new FormData(form);
        const result = await axios.post("http://localhost:4000/api/upload", formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
        showResult(result.data);
      } catch (error) {
        showResult(error);
      }
    }
    return { get, post, put, del, upload }
  }
}
</script>

<style>
button {
  font-size: calc(10px + 2vmin);
  width: 80px;
  margin: 2px;
}
</style>
