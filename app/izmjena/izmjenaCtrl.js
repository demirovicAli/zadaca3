angular.module('phonebook')
.controller('izmjenaCtrl',
 function ($rootScope, $scope, $filter, $state, $stateParams) {

    $scope.contact = $stateParams.contact;

});