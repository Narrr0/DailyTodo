<template>
  <div>
    <h2>{{ date }} Todo List</h2>
    <input type="text" id="todo" />
    <button @click="add">add</button>
    <h3>해야 할 일</h3>
    <div v-for="item in list" :key="item.id">
      <div v-if="item.when === date">
        <input type="checkbox" @click="toggle(item.key, item.when)" />{{
          item.what
        }}
      </div>
    </div>
    <h3>완료</h3>
    <div v-for="item in list" :key="item.id">
      <div v-if="item.when === date && item.done === true">
        <input type="checkbox" @click="toggle(item.key, item.when)" />{{
          item.what
        }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      date: this.$route.params.dateStr,
    };
  },
  computed: {
    list() {
      return this.$store.state.todos;
    },
  },
  methods: {
    add() {
      const todo = {
        key: this.num,
        when: this.$route.params.dateStr,
        what: document.getElementById("todo").value,
        done: false,
      };
      this.num += 1;
      console.log(todo);
      this.$store.dispatch("FETCH_TODO", todo);
    },
    toggle(key, when) {
      this.$store.dispatch("TOGGLE_TODO", key, when);
    },
  },
};
</script>

<style></style>
