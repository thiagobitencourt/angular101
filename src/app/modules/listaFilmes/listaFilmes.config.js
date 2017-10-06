
export default ['$stateProvider', 
    function($stateProvider) {
    
    $stateProvider.state({
        name: 'filmes',
        url: '/filmes',
        component: 'listaFilmes'
        // template: 'barra.html',
        // // controller: function() {},
        // controller: 'barraController',
        // controllerAs: 'vm',
    })
}]