
function filmesFormConfig($stateProvider) {
    $stateProvider.state({
        name: 'form',
        url: '/form',
        component: 'filmesForm',
        params: {
            filme: undefined
        },
        resolve: {
            filme: ['$stateParams', 
                $stateParams => $stateParams.filme
            ],
            categorias: ['listaFilmeService', 
                (listaFilmeService) => listaFilmeService
                    .obterCategorias()
            ]
        }
    });
}

filmesFormConfig.$inject = ['$stateProvider'];
export default filmesFormConfig;