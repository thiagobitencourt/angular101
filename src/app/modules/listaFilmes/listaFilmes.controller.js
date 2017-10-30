/* @ngInject */
function listFilmesController($state, toastr, listaFilmeService) {
    const vm = this;

    vm.editarFilme = editarFilme;
    vm.adicionarFilme = adicionarFilme;
    vm.removerFilme = removerFilme;
    
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
            });
    }

    function removerFilme(filmeId) {
        listaFilmeService.removerFilme(filmeId).then(() => {
            toastr.success("Filme removido com sucesso!", "Sucesso");
            obterFilmes();
        });
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
    }
}
listFilmesController.$inject = ['$state', 'toastr', 'listaFilmeService'];

export default listFilmesController;