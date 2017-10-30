import template from './filmesForm.html';

/* @ngInject */
function controller($state, toastr, listaFilmeService) {
    const vm = this;
    vm.$onInit = onInit;
    vm.salvarFilme = salvarFilme;
    vm.limpar = limpar;

    function onInit() { }

    vm.dateOptions = {

    }

    function salvarFilme(filme) {
        if(vm.filmeForm.$invalid) {
            return;
        }

        listaFilmeService.adicionarFilme(filme)
            .then(id => {
                toastr.success("Filme salvo com sucesso!", "Sucesso");
                $state.go('filmes');
            });
    }

    function limpar() {
        vm.filme = {};
        vm.filmeForm.$setPristine();
    }
}
controller.$inject = ['$state', 'toastr', 'listaFilmeService'];

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        filme: '<',
        categorias: '<'
    }
}