export default {
  name: 'TempoHoje',
  data() {
    return {
      temperaturaMaxima: 0,
    };
  },
  template: `<p>Rio de Janeiro, máxima de: {{temperaturaMaxima}}</p>`,
  methods: {
    getTempo() {
      const url = 'https://api.origamid.dev/weather/rio';
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.temperaturaMaxima = response.consolidated_weather[0].max_temp.toFixed(2);
        });
    },
  },
  created() {
    this.getTempo();
  },
};
