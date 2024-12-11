<template>
  <div>
    <button @click="addName">+</button>
    <home-m></home-m>
    <my-table>
      <my-column desc="id" label="Identifier" />
      <my-column desc="name" label="First name" sortable="0" />
      <my-column desc="email" label="Email address" sortable="1" />
    </my-table>
  </div>
</template>
<script>
import { computed } from "vue";
import HomeM from "./HomeM.vue";
import MyTable from "./Table.vue";
import MyColumn from "./Column.vue";
export default {
  components: {
    HomeM,
    MyTable,
    MyColumn,
  },
  provide() {
    return {
      name: "why",
      age: 18,
      length: computed(() => this.names.length),
    };
  },
  data() {
    return {
      names: ["a", "b", "c"],
    };
  },
  methods: {
    addName() {
      this.names.push("l");
    },
  },
};
</script>
