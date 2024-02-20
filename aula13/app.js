import TempoHoje from "./componentes/TempoHoje.js";
import AcaoHoje from "./componentes/AcaoHoje.js";

Vue.component("TempoHoje", TempoHoje);

const vm = new Vue({
  el: "#app",
  components: {
    AcaoHoje
  }
})