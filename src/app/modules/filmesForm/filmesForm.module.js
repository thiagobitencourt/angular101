
import filmesFormComponent from './filmesForm.component';
import filmesFormConfig from './filmesForm.config';

export default 
    angular.module('filmesForm', [])
    .component('filmesForm', filmesFormComponent)
    .config(filmesFormConfig)
    .name;