<template>
  <div>
    <ul>
      <li
        v-for="(value, key, index) in {
          name: 'lau',
          age: 26,
          job: 'developer',
        }"
        :key="index"
      >
        #{{ index + 1 }} {{ key }}:{{ value }}
      </li>
    </ul>
  </div>
</template>
<script>
/**
 * 对对象解构时, 我们可以获取对象的键值对
 */
</script>
