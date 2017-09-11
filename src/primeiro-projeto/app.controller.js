angular.module('app')
    .controller('mainController', function() {
        var vm = this;

        vm.clicou = clicou;
        vm.mudou = mudou;
        vm.isSoPares = isSoPares;

        vm.nome = "Thiago";
        vm.desabilitarBotao = true;
        vm.filmeFavorito = "A volta dos que não foram";
        vm.soPares = true;

        vm.hoje = new Date(); 

        vm.filmes = [
            { nome: "Eu, eu mesmo e Irene", ano: "1997" },
            { nome: "A volta dos que não foram", ano: "1980" },
            { nome: "Poeira em alto mar", ano: "2016" }
        ]

        function clicou() {
            console.log(vm.nome);
        }

        function mudou() {
            console.log("Agora o nome tem um novo valor: ", vm.nome);
        }

        function isSoPares() {
            return vm.soPares;
        }


    })