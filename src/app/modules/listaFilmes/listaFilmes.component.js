import controller from './listaFilmes.controller';
import template from './listaFilmes.html';

const listaFilmesComponent = {
    // templateUrl: './listaFilmes.html',
    template,
    controller,
    controllerAs: 'vm',
    bindings: { }
};

export default listaFilmesComponent;

/*
    <div ng-controller="listaFilmesController as vm">
       <h1> Lista de filmes </h1>        
       <ul>
           <li ng-repeat="filme in vm.filmes"> {{ filme.nome }} </li>
       </ul>
    </div>
*/