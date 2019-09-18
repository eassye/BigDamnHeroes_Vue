import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        species: [
            { id:1, value:"Human", text: "Human Description" },
            { id:2, value:"Eldar", text: "Eldar Description" },
            { id:3, value:"Ork", text: "Ork Description" },
            { id:4, value:"Adeptus Astartes", text: "Adeptus Astartes Description" },
            { id:5, value:"Primaris Astartes", text: "Primaris Astartes Description" }
          ],
        specie: {},
    },
    mutations: {
        addSpecie (state, specie){
            state.species.push({
                id: state.specie.length,
                specie: specie
            });
        }
    }
});