function listFilmesService($http, $q, urlBase) {
    const categorias = [];
    let idRandom = 0;
    let filmesLista = [];

    return {
        adicionarFilme,
        obterCategorias,
        obterListaFilmes,
        obterFilmePorNome
    }

    function obterFilmePorNome(nome) {
        // return new Promise((resolve, reject) => {
        //     // Promessas ES6
        // });
        let filme = filmesLista.find(filme => filme.nome === nome);
        return $q.when(filme);

        return $q.when(
            { 
                "nome": "Ferrou, acabaram as ideias!",
                "ano": "1993",
                "lancamento": "2017-09-29T20:14:45.557Z",
                "categoria": "terror"
            }
        );
    }

    function obterListaFilmes() {
        // chamada http backend.
        if(filmesLista.length) {
            return $q((resolve, reject) => {
                mapearCategorias(angular.copy(filmesLista))
                    .then(filmes => {
                        resolve(filmes);
                    });
            });
        }

        return $http.get(urlBase + '/59ceaac5130000080106084f')
            .then(result => {
                let filmes = result.data || [];
                return filmes;
            })
            .then(filmes => {
                filmes.map(filme => filme.id = ++idRandom);
                filmesLista = angular.copy(filmes);
                return filmes;
            })
            .then(mapearCategorias)
    }

    function mapearCategorias(filmes) {
        return obterCategorias()
        .then(categorias => {
            filmes.map(filme => {
                filme.categoria = categorias.find(categoria => { 
                    return categoria.valor === filme.categoria
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
        return $q((resolve, reject) => {
            if(filme.id) {
                let index = filmesLista.findIndex(fl => fl.id === filme.id);
                if(index > -1) {
                    filmesLista.splice(index, 1, filme);
                }
            } else {
                filme.id = ++idRandom;
                filmesLista.push(filme);
            }
            return resolve(filme.id);
        });
        // return $http.post('http://urlmassa.com.br', filme)
        // .then(result => {
        //         filme.id = result.data.id; // id: 16;
        //         filmes.push(filme);
        //     });
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