import DolarHoje from './DolarHoje.js';

export default {
  name: 'AcaoHoje',
  components: {
    DolarHoje,
  },
  data() {
    return {
      valorMercado: 0,
    };
  },
  template: `
    <div>
      <p>Valor da Apple: {{valorMercado}}</p>
      <dolar-hoje></dolar-hoje>
    </div>
  `,
  methods: {
    puxarAcao() {
      const url = 'https://api.origamid.dev/stock/aapl/quote';
      fetch(url)
        .then((response) => response.json())
        .then((response) => {          
          this.valorMercado = response.marketCap;
        });
    },
  },
  created() {
    this.puxarAcao();
  },
};
