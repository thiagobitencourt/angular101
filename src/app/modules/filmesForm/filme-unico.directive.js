
function filmeUnicoDirective(listaFilmeService) {
    function link(scope, element, attrs, controller) {
        const modelController = element.controller('ngModel');
        scope.$watch('nomeFilme', function(newValue, oldValue) {
            if(!newValue) {
                return;
            }
            listaFilmeService.isNameAvailable(newValue)
                .then(isAvailable => {
                    modelController.$setValidity('unique', isAvailable);
                });
        }, true);
    }

    return {
        link,
        restrict: 'A',
        require: 'ngModel',
        scope: {
            nomeFilme: "=ngModel"
        }
    }
}

filmeUnicoDirective.$inject = ['listaFilmeService'];
/*
    <!-- @filmeUnico -->
    <input type="text" class="filme-unico" />

    <div filme-unico>
        <input type="text" filme-unico />
    </div>

    <filme-unico></filme-unico>
*/
export default filmeUnicoDirective;