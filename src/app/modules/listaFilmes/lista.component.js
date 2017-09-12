import template from './lista.html';

const listaComponent = {
    template,
    controllerAs: 'vm',
    bindings: {
        filmes: '=',
        onFilmeClick: '&' // @, =, &, <
    }
};

export default listaComponent;