export default {
  name: 'DolarHoje',
  data() {
    return {
      valorDolar: 0,
    };
  },
  template: `<p>Valor dolar/real: {{valorDolar}}</p>`,
  methods: {
    getDolar() {
      const url = 'https://api.origamid.dev/exchange/usd';
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.valorDolar = response.rates.BRL.toFixed(2);
        });
    },
  },
  created() {
    this.getDolar();
  },
};
