angular
    .module('phonebook')
    .controller('PhonebookCtrl',
        function($rootScope, $scope, $filter, $state, phonebookService) {
          $scope.contacts = phonebookService.contacts;

          $scope.open = function(c) {
            $state.go('kontakt', {
              contact: c
            })
          }

          $scope.delete = function(contact) {
            phonebookService.removeContact(contact)
          }


                    $scope.izmjeni = function(c) {
                      console.log(c);
            $state.go('izmjena', {
              contact: c
            })
          }

        });
