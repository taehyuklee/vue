<template>
  <div>
    <button @click="loadData">load</button>
    <ul>
      <li v-for="(name, index) in names" :key="index">{{ index + 1 }}. {{ name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const names = ref(['John', 'Jane', 'Joe'])

    async function loadData() {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
      names.value = result.data.map(comment => comment.name)
    }
    onMounted(loadData());
    return {
      names, loadData
    }
  },
}
</script>