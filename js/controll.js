angular.module("cadastro", []);
angular.module("cadastro").controller("cadastroCtrl", function ($scope) {
    $scope.app = "Cadastro de Usuários";
    $scope.cadUser = [
        {
          nome: "João", 
          end: "R Ivinhema, 1000", 
          endAlt: "Não existe", 
          cidade: "N.A.", 
          uf: "MS", 
          email: "joao@gmail.com", 
          emailAlt: "joaozinho@gmail.com", 
          telefone: "9 9999-9999", 
          telAlt: "8 8888-8888"
        },
        {
          nome: "Sayuri", 
          end: "R São José, 2000", 
          endAlt: "Não existe", 
          cidade: "N.A.", 
          uf: "MS", 
          email: "gabs@gmail.com", 
          emailAlt: "sayu@gmail.com", 
          telefone: "9 9999-9999", 
          telAlt: "8 8888-8888"
        },
        {
          nome: "Pacifico", 
          end: "R João de Lima, 30", 
          endAlt: "Não existe", 
          cidade: "N.A.", 
          uf: "MS", 
          email: "oceano@gmail.com", 
          emailAlt: "revolts@gmail.com", 
          telefone: "9 9999-9999", 
          telAlt: "8 8888-8888"
        },
        {
          nome: "Renatão", 
          end: "R André Loyer, 4000", 
          endAlt: "Não existe", 
          cidade: "N.A.", 
          uf: "MS", 
          email: "renato@gmail.com", 
          emailAlt: "renatao@gmail.com", 
          telefone: "9 9999-9999", 
          telAlt: "8 8888-8888"
        },
        {
          nome: "Sonia", 
          end: "R Johann Gill, 851", 
          endAlt: "Não existe", 
          cidade: "N.A.", 
          uf: "MS", 
          email: "soniawhite@gmail.com", 
          emailAlt: "neve@gmail.com", 
          telefone: "9 7070-8080", 
          telAlt: "8 8080-7070"
        },
        {
          nome: "Maria", 
          end: "R Bataguassu, 8000", 
          endAlt: "Não existe", 
          cidade: "N.A.", 
          uf: "MS", 
          email: "maria@gmail.com", 
          emailAlt: "mariatereza@gmail.com", 
          telefone: "9 9999-9999", 
          telAlt: "8 8888-8888"
        },
        {
          nome: "Cayo", 
          end: "R dos Bobos, 0", 
          endAlt: "Não existe", 
          cidade: "BATA", 
          uf: "MS", 
          email: "cayo@gmail.com", 
          emailAlt: "cayozao@gmail.com", 
          telefone: "9 9999-9999", 
          telAlt: "8 8888-8888"
        },
        {
          nome: "Joelma", 
          end: "R Lua Traíra, 5000", 
          endAlt: "Não existe", 
          cidade: "BELÉM", 
          uf: "PA", 
          email: "joelma@gmail.com", 
          emailAlt: "ximbinha@gmail.com", 
          telefone: "9 7070-8080", 
          telAlt: "8 8080-7070"
        }
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