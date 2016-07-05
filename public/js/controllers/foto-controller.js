angular.module('alurapic').controller('FotoController', function ($scope, recursoFoto, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';

    if ($routeParams.fotoId) {
        recursoFoto.get({fotoId: $routeParams.fotoId}, function (foto) {
           $scope.foto = foto;
        }, function (erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto';
        });
    }

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {
            if ($scope.foto._id) {
                // atualizar foto
                recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function () {
                    $scope.mensagem = "Foto " + $scope.foto.titulo + " alterada com sucesso";
                }, function (erro) {
                    console.warn(erro);
                    $scope.mensagem = "Não foi possivel alterar a foto " + $scope.foto.titulo;
                });
            } else {
                //nova foto
                recursoFoto.save($scope.foto, function () {
                   $scope.foto = {};
                    $scope.mensagem = 'Foto cadastrada com sucesso';
                }, function (erro) {
                    $scope.mensagem = 'Não foi possível cadastrar a foto';
                    console.warn(erro);
                });
            }
        }
    };
});
