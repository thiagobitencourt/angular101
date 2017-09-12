import listaFilmesComponent from './listaFilmes.component';
import listaComponent from './lista.component';

export default angular
    .module('listaFilmes', [])
    .component('listaFilmes', listaFilmesComponent)
    .component('lista', listaComponent)
    .name;