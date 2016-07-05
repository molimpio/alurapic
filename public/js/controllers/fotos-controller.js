angular.module('alurapic').controller('FotosController', function ($scope, $http) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    //forma resumida de acessar a url
    $http.get('v1/fotos')
        .success(function (fotos) {
            $scope.fotos = fotos;
        })
        .error(function (erro) {
            console.warn(erro);
        });

    $scope.remover = function (foto) {
        $http.delete('v1/fotos/' + foto._id)
            .success(function () {
                //busca e remove a foto da lista
                var indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto, 1);
                $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso!';

            })
            .error(function (erro) {
                console.warn(erro);
                $scope.mensagem = 'Foto ' + foto.titulo + ' não foi removida!';
            })
    };
});