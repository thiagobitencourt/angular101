
import listaFilmes from './listaFilmes/listaFilmes.module';
import filmesForm from './filmesForm/filmesForm.module';

export default 
    angular.module('app.modules', [
        listaFilmes,
        filmesForm
    ])
    .name;