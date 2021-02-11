<template>
  <h1>Job detail page</h1>
  <p>The jobs id is {{ id }}</p>
</template>

<script>
export default {
  props: ["id"],
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
};
</script>

<style>
</style>