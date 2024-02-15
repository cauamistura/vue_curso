Vue.config.devtools = true;

const vm = new Vue({
    el: "#app",
    data: {
        produtos: [],
        produto: {},
    },
    methods: {
        getProdutos: function () {
            fetch("./api/produtos.json")
                .then(response => response.json())
                .then(response => {
                    this.produtos = response;
                });
        },
        getProduto: function (id) {
            fetch(`./api/produtos/${id}/dados.json`)
                .then(response => response.json())
                .then(response => {
                    this.produto = response;
                });
        }
    },
    filters: {
        numeroPreco(value) {           
            return value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            });
        }
    },
    created() {
        this.getProdutos();
    }
});