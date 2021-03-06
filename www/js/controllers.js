angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    var url ="http://27.251.124.82/CaliberLIMS/Service1.asmx/UserLoginSts?UserName="+$scope.loginData.username+"&pswd="+$scope.loginData.password+"&MacAddr=string&OtherInfo=string";

    $http.get(url).
        success(function(data, status, headers, config) {
          console.log(data);
          // this callback will be called asynchronously
          // when the response is available
        }).
        error(function(data, status, headers, config) {
          console.log(data);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('SearchCtrl', function($scope, $stateParams, $http){
  $scope.arn_number = "PL01VS115000001";
  var url ="http://27.251.124.82/CaliberLIMS/Service1.asmx/TestResultsEntry?ARNo=PL01VS115000001&UserId=2&PlantId=1&PlantCode=01&MacAddr=string&IPAddr=string";
  $http.get(url).
        success(function(data, status, headers, config) {
          console.log(data);
          // this callback will be called asynchronously
          // when the response is available
        }).
        error(function(data, status, headers, config) {
          console.log(data);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });  
});
