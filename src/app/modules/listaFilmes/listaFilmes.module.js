import listaFilmesComponent from './listaFilmes.component';
import listaComponent from './lista.component';
import listaFilmeService from './listaFilmes.service';
import { categoriaFilter, nomeFilter } from './lista.filter';

// import './listFilmes.scss';

export default angular
    .module('listaFilmes', [])
    .component('listaFilmes', listaFilmesComponent)
    .component('lista', listaComponent)
    .service('listaFilmeService', listaFilmeService)
    // .factory('listaFilmeService', listaFilmeService)
    .filter('categoria', categoriaFilter)
    .filter('nomeFilter', nomeFilter)
    .name;