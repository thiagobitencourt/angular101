import template from './filmesForm.html';

/* @ngInject */
function controller($stateParams) {
    const vm = this;
    vm.$onInit = onInit;

    function onInit() {

        console.log(vm.filme);
        console.log(vm.categorias);

        // console.log($stateParams.filme);
        // vm.filme = $stateParams.filme;
    }
}
controller.$inject = ['$stateParams'];

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        filme: '<',
        categorias: '<'
    }
}