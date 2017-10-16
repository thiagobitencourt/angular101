import template from './filmesForm.html';

/* @ngInject */
function controller($state, listaFilmeService) {
    const vm = this;
    vm.$onInit = onInit;
    vm.salvarFilme = salvarFilme;

    function onInit() { }

    function salvarFilme(filme) {
        listaFilmeService.adicionarFilme(filme)
            .then(id => {
                $state.go('filmes');
            });
    }

}
controller.$inject = ['$state', 'listaFilmeService'];

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        filme: '<',
        categorias: '<'
    }
}