import template from './lista.html';

const listaComponent = {
    template,
    bindings: {
        busca: '<',
        filmes: '=',
        onEditFilmeClick: '&', // @, =, &, <
        onRemoveFilmeClick: '&'
    }
};

export default listaComponent;