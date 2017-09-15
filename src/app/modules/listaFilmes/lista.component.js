import template from './lista.html';

const listaComponent = {
    template,
    bindings: {
        busca: '<',
        filmes: '=',
        onFilmeClick: '&' // @, =, &, <
    }
};

export default listaComponent;