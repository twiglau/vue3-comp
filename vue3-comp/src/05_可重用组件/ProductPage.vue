<script setup>
import BoringTable from "./BoringTable.vue";
import DataProvider from "./DataProvider.vue";
</script>
<template>
  <h1>Product Page</h1>
  <DataProvider category="smartphones" v-slot="{ data, loading }">
    <BoringTable :items="data" title="Smartphones" v-if="!loading" />
  </DataProvider>
  <DataProvider category="laptops" v-slot="{ data, loading }">
    <BoringTable :items="data" title="Laptops" v-if="!loading" />
  </DataProvider>
</template>
