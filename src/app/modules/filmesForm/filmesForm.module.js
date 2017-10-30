
import filmesFormComponent from './filmesForm.component';
import filmesFormConfig from './filmesForm.config';
import filmeUnicoDirective from './filme-unico.directive';
import inputNumberDirective from './input-number.directive';

export default 
    angular.module('filmesForm', [])
    .component('filmesForm', filmesFormComponent)
    .directive('filmeUnico', filmeUnicoDirective)
    .directive('inputNumber', inputNumberDirective)
    .config(filmesFormConfig)
    .name;