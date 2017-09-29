
function listFilmesService() {

    const categorias = [
        { nome: 'Ação', valor: 'acao' },
        { nome: 'Comédia', valor: 'comedia' },
        { nome: 'Romance', valor: 'romance' },
        { nome: 'Terror', valor: 'terror' }
    ];

    const filmes = [
        { 
            nome: "Eu, eu mesmo e irene", 
            ano: "1975",
            lancamento: new Date(),
            arrecadacao: 5000000,
            categoria: categorias[2]
        },
        { 
            nome: "Poeira em alto", 
            ano: "1993",
            lancamento: new Date(),
            categoria: categorias[1]
        },
        { 
            nome: "As longas tranças de um careca",
            ano: "1993",
            lancamento: new Date(),
            categoria: categorias[3]
        },
        { 
            nome: "Rambo III",
            ano: "2005",
            lancamento: new Date(),
            categoria: categorias[0]
        }
    ];

    // this.obterListaFilmes = () => {
    //     return filmes;
    // }

    // this.obterCategorias = () => {
    //     return categorias;
    // }

    // this.adicionarFilme = filme => {
    //     filmes.push(filme);
    // }

    return {
        adicionarFilme(filme) {
            filmes.push(filme);
        },

        obterCategorias() {
            return categorias;
        },
        
        obterListaFilmes() {
            return filmes;
        }
    }
}

export default listFilmesService;