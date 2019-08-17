import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        species: [
            // { id:1, type:"Human", text: "Human Description" },
            // { id:2, type:"Eldar", text: "Eldar Description" },
            // { id:3, type:"Ork", text: "Ork Description" },
            // { id:4, type:"Adeptus Astartes", text: "Adeptus Astartes Description" },
            // { id:5, type:"Primaris Astartes", text: "Primaris Astartes Description" }
            { value:"Human", text: "Human Description" },
            { value:"Eldar", text: "Eldar Description" },
            { value:"Ork", text: "Ork Description" },
            { value:"Adeptus Astartes", text: "Adeptus Astartes Description" },
            { value:"Primaris Astartes", text: "Primaris Astartes Description" }
            // { id:1, value:"Human", text: "Human Description" },
            // { id:2, value:"Eldar", text: "Eldar Description" },
            // { id:3, value:"Ork", text: "Ork Description" },
            // { id:4, value:"Adeptus Astartes", text: "Adeptus Astartes Description" },
            // { id:5, value:"Primaris Astartes", text: "Primaris Astartes Description" }
          ]
    }
});