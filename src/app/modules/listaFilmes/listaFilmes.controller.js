function listFilmesController() {
    const vm = this;

    vm.clicouNoFilme = clicouNoFilme;

    vm.categorias = [
        { nome: 'Ação', valor: 'acao' },
        { nome: 'Comédia', valor: 'comedia' },
        { nome: 'Romance', valor: 'romance' },
        { nome: 'Terror', valor: 'terror' }
    ]

    vm.filmes = [
        { 
            nome: "Eu, eu mesmo e irene", 
            ano: "1975",
            lancamento: new Date(),
            arrecadacao: 5000000,
            categoria: vm.categorias[2]
        },
        { 
            nome: "Poeira em alto", 
            ano: "1993",
            lancamento: new Date(),
            categoria: vm.categorias[1]
        },
        { 
            nome: "As longas tranças de um careca",
            ano: "1993",
            lancamento: new Date(),
            categoria: vm.categorias[3]
        },
        { 
            nome: "Rambo III",
            ano: "2005",
            lancamento: new Date(),
            categoria: vm.categorias[0]
        }
    ]

    function clicouNoFilme(filme) {
        console.log(filme);
    }
}

export default listFilmesController;