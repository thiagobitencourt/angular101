export default ['$urlRouterProvider', '$stateProvider', 
function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/error');
    $stateProvider.state({
        name: 'error',
        url: '/error',
        template: 
        `
            <h3>Errouuuuu!!!</h3>
            <button 
                class="btn btn-primary" 
                ui-sref="main"
            >Página principal</button>
        `
    })
    .state('main', {
        url: '/',
        redirectTo: 'filmes',
    })
}]