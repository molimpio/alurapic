angular.module('alurapic').controller('FotosController', function ($scope, $http) {

    $scope.fotos = [];
    $scope.filtro = '';

    //forma resumida de acessar a url
    $http.get('v1/fotos')
        .success(function (fotos) {
            $scope.fotos = fotos;
        })
        .error(function (erro) {
            console.warn(erro);
        });

    /* exemplo com promisse
     $http.get('v1/fotos');
     promise.then(function (retorno) {
     $scope.fotos = retorno.data;
     }).catch(function(error){
     console.log("erro",error);
     });*/
});