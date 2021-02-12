<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>{{ job.detail }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch(" http://localhost:3000/jobs/" + this.id)
      .then((resutlt) => resutlt.json())
      .then((data) => {
        this.job = data;
      })
      .catch((err) => console.log(err.message));
  },

  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
};
</script>

<style>
</style>