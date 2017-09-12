function listFilmesController() {
    const vm = this;

    vm.clicouNoFilme = clicouNoFilme;

    vm.filmes = [
        { nome: "Eu, eu mesmo e irene", ano: "1975" },
        { nome: "Poeira em alto", ano: "1993" },
        { nome: "Rambo III", ano: "2005" }
    ]

    function clicouNoFilme(filme) {
        console.log(filme);
    }
}

export default listFilmesController;