/* @ngInject */
function listFilmesController(listaFilmeService) {
    const vm = this;

    vm.clicouNoFilme = clicouNoFilme;
    vm.adicionarFilme = adicionarFilme;
    
    vm.categorias = listaFilmeService.obterCategorias();
    obterFilmes();

    function clicouNoFilme(filme) {
        console.log(filme);
    }

    function obterFilmes() {
        vm.filmes = listaFilmeService.obterListaFilmes();
    }

    function adicionarFilme() {
        const filme = {
            nome: "Rambo V",
            ano: "2017",
            lancamento: new Date(),
            categoria: vm.categorias[0]
        }

        listaFilmeService.adicionarFilme(filme);
        obterFilmes();
    }
}
listFilmesController.$inject = ['listaFilmeService'];

export default listFilmesController;