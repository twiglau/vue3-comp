<script setup>
import { defineProps } from "vue";

defineProps({
  items: { type: Array, required: true },
  title: { type: String },
});

const headers = ["Title", "Description", "Price", "Rating", "Brand"];
</script>
<template>
  <h2 class="table-title">{{ title }}</h2>
  <table class="boring-table">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.rating }}</td>
        <td>{{ item.brand }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
.boring-table {
  border: 1px solid lightblue;
}
td {
  overflow: hidden;
  white-space: nowrap;
  max-width: 200px;
}
</style>
