function listFilmesService($http, $q, urlBase) {
    const categorias = [];
    const filmes = [];

    return {
        adicionarFilme,
        obterCategorias,
        obterListaFilmes
    }

    function obterListaFilmes() {
        // chamada http backend.
        return $http.get(urlBase + '/59ceaac5130000080106084f')
            .then(result => {
                let filmes = result.data || [];
                obterCategorias()
                    .then(categorias => {
                        filmes.map(filme => {
                            filme.categoria = categorias.find(
                                categoria => categoria.valor === filme.categoria)
                        });
                    });
                return filmes;
            });
    }

    function obterCategorias() {
        // return categorias;
            return $http.get(urlBase + '/59ceb010130000ce00060859')
            .then(result => result.data || []);
    }

    function adicionarFilme(filme) {

        return $q.when("resolvido");
        // return $q.reject("rejeitado");

        // return $q((resolve, reject) => {
        //     filmes.push(filme);
        //     return resolve("2345678");
        //     // return reject('');
        // });

        // const deferred = $q.defer();
        //     filmes.push(filme);
        //     deferred.resolve( "2345678" );
        // return deferred.promise;

        return $http.post('http://urlmassa.com.br', filme)
        .then(result => {
                filme.id = result.data.id; // id: 16;
                filmes.push(filme);
            });
    }

    function removerFilme(filmeId) {
        return $http.delete('http://urlmassa.com.br/'+ filmeId);
    }

    function atualizarFilme(filme) {
        return $http.put('http://urlmassa.com.br/' + filme.id, filme);
        // $http.patch();
    }
}

// listFilmesService.$inject = ['$http'];
export default [ '$http', '$q', 'urlBase', listFilmesService ];