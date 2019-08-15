<template>
  <div class="hello">
    <h3>Species</h3>
    <div>
      <div>
        <b-form-select v-model="selected" :options="species" @change="onClick($event)"></b-form-select>

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
  data() {
    return {
      selected: null,
      species: [
        "Human",
        "Eldar",
        "Ork",
        "Adeptus Astartes",
        "Primaris Astartes"
      ]
    };
  },
  methods: {
    onClick(event) {
      // eslint-disable-next-line
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
