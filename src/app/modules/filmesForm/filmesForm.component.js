import template from './filmesForm.html';

/* @ngInject */
function controller($state, $stateParams) {
    const vm = this;
    vm.$onInit = onInit;

    function onInit() {

        if(!vm.filme) {
            $state.go("filmes");
        }

        console.log(vm.filme);
        console.log(vm.categorias);

        // console.log($stateParams.filme);
        // vm.filme = $stateParams.filme;
    }
}
controller.$inject = ['$state', '$stateParams'];

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        filme: '<',
        categorias: '<'
    }
}