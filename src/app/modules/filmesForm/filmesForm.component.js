import template from './filmesForm.html';

/* @ngInject */
function controller($state, listaFilmeService) {
    const vm = this;
    vm.$onInit = onInit;
    vm.salvarFilme = salvarFilme;
    vm.limpar = limpar;

    function onInit() { }

    function salvarFilme(filme) {
        if(vm.filmeForm.$invalid) {
            return;
        }

        listaFilmeService.adicionarFilme(filme)
            .then(id => {
                $state.go('filmes');
            });
    }

    function limpar() {
        vm.filme = {};
        vm.filmeForm.$setPristine();
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