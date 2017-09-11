angular.module("cadastro", []);
angular.module("cadastro").controller("cadastroCtrl", function ($scope) {
    $scope.app = "Cadastro de Usuários";
    $scope.cadUser = [ /*Contatos*/
        {nome: "Nathalia", end: "R Bataiporã, 1130", endAlt: "Não existe", cidade: "NA", uf: "MS", email: "nath@gmail.com", emailAlt: "nathalia.cosim@gmail.com", telefone: "9 9999-9999", telAlt: "8 8888-8888"},
        {nome: "João", end: "R Ivinhema, 5000", endAlt: "Não existe", cidade: "NA", uf: "MS", email: "joao@gmail.com", emailAlt: "joaozinho@gmail.com", telefone: "9 9999-9999", telAlt: "8 8888-8888"},
        {nome: "Maria", end: "R Bataguassu, 8000", endAlt: "Não existe", cidade: "NA", uf: "MS", email: "maria@gmail.com", emailAlt: "mariatereza@gmail.com", telefone: "9 9999-9999", telAlt: "8 8888-8888"}
    ];
    $scope.adicionarUsuario = function (user) {
        $scope.cadUser.push(angular.copy(user));
        delete $scope.user;
    };
    $scope.apagarUsuarios = function (cadUser) {
        $scope.cadUser = cadUser.filter(function (user) {
            if (!user.selecionado) return user;
        });
    };
    $scope.isUsuarioSelecionado = function (cadUser) {
        return cadUser.some(function (user) {
            return user.selecionado;
        });
    };
});