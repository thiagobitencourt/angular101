
function filmesFormConfig($stateProvider) {
    $stateProvider.state({
        name: 'form',
        url: '/form?nome',
        component: 'filmesForm',
        params: {
            filme: undefined
        },
        resolve: {
            filme: ['listaFilmeService', '$stateParams', 
                (listaFilmeService, $stateParams) => {
                    if($stateParams.nome) {
                        return listaFilmeService
                            .obterFilmePorNome($stateParams.nome);
                    }
                    return {};
                }
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