<template>
  <div class="hello">
    <h3>Species</h3>

    <div>
      <b-dropdown id="dropdown-1" text="Select Your Species" class="m-md-2" v-model="selectedSpecie">
        <b-dropdown-item v-for="specie in species" v-bind:key="specie.id"> {{ specie}} </b-dropdown-item>
      </b-dropdown>
    </div>

    <p>You selected: {{ selectedSpecie }}</p>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        selectedSpecie: "",
        species: [
          "Human",
          "Eldar",
          "Ork",
          "Adeptus Astartes",
          "Primaris Astartes"
        ]
      }
    }
  }
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
