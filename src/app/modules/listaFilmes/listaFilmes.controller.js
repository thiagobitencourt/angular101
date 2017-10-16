/* @ngInject */
function listFilmesController($state, listaFilmeService) {
    const vm = this;

    vm.editarFilme = editarFilme;
    vm.adicionarFilme = adicionarFilme;
    
    vm.$onInit = onInit;
    // $onDestroy
    
    function onInit() {
        obterCategorias();
        obterFilmes();
    }

    function editarFilme(filme) {
        console.log(filme);
        $state.go('form', { nome: filme.nome, filme });
    }

    function obterCategorias() {
        listaFilmeService.obterCategorias()
            .then(categorias => {
                vm.categorias = categorias;
            })
    }

    function obterFilmes() {
        listaFilmeService.obterListaFilmes()
            .then(function(filmes) {

                console.log(filmes);

                vm.filmes = filmes;
            });
    }

    function adicionarFilme() {
        $state.go('form');


        // const filme = {
        //     nome: "Rambo V",
        //     ano: "2017",
        //     lancamento: new Date(),
        //     categoria: vm.categorias[0]
        // }

        // listaFilmeService.adicionarFilme(filme)
        //     .then(idFilme => {
        //         console.log("ACABEI DE ADICIONAR UM NOVO FILME COM ID: ", idFilme );
        //         filme.id = idFilme;

        //         return filme;
        //         // obterFilmes();
        //     }, error => {
        //         console.error("DEU RUIM -> ", error);
        //         vm.hasError = error;
        //     })
        //     // .catch(error => {
        //     //     console.error("DEU RUIM -> ", error);
        //     //     vm.hasError = error;
        //     // })
        //     .finally(() => {
        //         console.log("Finalmente PASSOU AQUI!");
        //     })
    }
}
listFilmesController.$inject = ['$state', 'listaFilmeService'];

export default listFilmesController;