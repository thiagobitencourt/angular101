function listFilmesService($http, $q, urlBase) {
    const DBKEY = "filmes";
    const categorias = [];
    let filmesLista = [];

    return {
        adicionarFilme,
        obterCategorias,
        obterListaFilmes,
        obterFilmePorNome,
        removerFilme
    }

    function obterFilmePorNome(nome) {
        // return new Promise((resolve, reject) => {
        //     // Promessas ES6
        // });
        let filme = filmesLista.find(filme => filme.nome === nome);
        return $q.when(filme);
    }

    function obterListaFilmes() {
        // chamada http backend.
        if(filmesLista.length) {
            return $q((resolve, reject) => {
                mapearCategorias(angular.copy(filmesLista))
                    .then(filmes => {
                        resolve(filmes.filter(f => !f.deleted));
                    });
            });
        }

        return $q.when(filmesLista || []);
        return $http.get(urlBase + '/59ea5a74110000b9012677de')
            .then(result => {
                let filmes = result.data || [];
                return filmes;
            })
            .then(filmes => {
                filmes.map(filme => filme.id = filme.id || _getId());
                filmesLista = filmes;

                var listaAntiga = _obterFilmes() || [];
                filmesLista = filmesLista.filter(fil => !listaAntiga.find(f => fil.id === f.id));

                filmesLista = filmesLista.concat(listaAntiga);
                _atualizaDB(filmesLista);
                return angular.copy(filmesLista);
            })
            .then(filmes => filmes.filter(f => !f.deleted))
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
        return $q.when([
            { "nome": "Ação", "valor": "acao" },
            { "nome": "Comédia", "valor": "comedia" },
            { "nome": "Romance", "valor": "romance" },
            { "nome": "Terror", "valor": "terror" }
        ]);
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
                filme.id = _getId();
                filmesLista.push(filme);
            }
            _atualizaDB(filmesLista);
            return resolve(filme.id);
        });
        // return $http.post('http://urlmassa.com.br', filme)
        // .then(result => {
        //         filme.id = result.data.id; // id: 16;
        //         filmes.push(filme);
        //     });
    }

    function removerFilme(filmeId) {
        // return $http.delete('http://urlmassa.com.br/'+ filmeId);
        var filme = filmesLista.find(f => f.id === filmeId);
        filme.deleted = true;
        adicionarFilme(filme);
        return $q.when();
        // return $q((resolve, reject) => {
        //     let index = filmesLista.findIndex(fl => fl.id === filmeId);
        //     filmesLista.splice(index, 1);
        //     _atualizaDB(filmesLista);
        //     resolve({ success: true });
        // });
    }

    function atualizarFilme(filme) {
        return $http.put('http://urlmassa.com.br/' + filme.id, filme);
        // $http.patch();
    }

    function _atualizaDB(lista) {
        localStorage.setItem(DBKEY, JSON.stringify(lista));
    }

    function _obterFilmes() {
        return JSON.parse(localStorage.getItem(DBKEY));
    }

    function _getId() {
        return Math.random();
    }
}

// listFilmesService.$inject = ['$http'];
export default [ '$http', '$q', 'urlBase', listFilmesService ];