angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {

        var ddo = {};
        ddo.restric = "AE";
        ddo.scope = {
            titulo: '@titulo'
        };

        //manter os filhos dentro do painel
        ddo.transclude = true;
        ddo.templateUrl = 'js/directives/meu-painel.html';

        return ddo;
    });
