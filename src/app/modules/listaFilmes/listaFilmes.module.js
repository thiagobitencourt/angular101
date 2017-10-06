import listaFilmesComponent from './listaFilmes.component';
import listaComponent from './lista.component';
import listaFilmeService from './listaFilmes.service';
import { categoriaFilter, nomeFilter } from './lista.filter';
import listaFilmesConfig from './listaFilmes.config';

// import './listFilmes.scss';

export default angular
    .module('listaFilmes', [])
    .component('listaFilmes', listaFilmesComponent)
    .component('lista', listaComponent)
    .service('listaFilmeService', listaFilmeService)
    // .factory('listaFilmeService', listaFilmeService)
    .filter('categoria', categoriaFilter)
    .filter('nomeFilter', nomeFilter)
    .constant('urlBase', 'http://www.mocky.io/v2')
    .config(listaFilmesConfig)
    .run(function() {
        console.log("Função run sendo executada!");
    })
    .name;