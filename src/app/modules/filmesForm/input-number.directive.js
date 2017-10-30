
function inputNumberDirective($filter) {
    function link(scope, element, attrs, controller) {
        const modelController = element.controller('ngModel');
        scope.$watch('inputNumber', function(newValue, oldValue) {
            if(!newValue) {
                return;
            }

            if(newValue.length > 4 || isNaN(newValue)){
                scope.inputNumber = oldValue;
            }
        }, true);
    }

    return {
        link,
        restrict: 'A',
        require: 'ngModel',
        scope: {
            inputNumber: "=ngModel"
        }
    }
}
export default [ '$filter', inputNumberDirective ];