<template>
  <div>
    <h3>Species</h3>
    <div>
      <div>
        <b-form-select v-model="selected" @change="onClick($event)">
          <option v-for="specie in species" :value="specie.value" v-bind:key="specie.key">{{ specie.value }}</option>
        </b-form-select>

        <div class="mt-3">
          Selected:
          <strong>{{ selected }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
 computed: {
    species(){
      return this.$store.state.species;
    }
  },
  data() {
    return {
      selected: null,
    };
  },
  methods: {
    onClick(event) {
      console.log("Event: ", event);
    }
  }
};
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
