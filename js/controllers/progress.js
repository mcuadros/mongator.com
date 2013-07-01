define(['app'], function(app) {
  'use strict';

    app.controller('ProgressController', function($scope, $rootScope, $location) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $scope.active = 'idle';
            setTimeout(function() {
                if ($scope.active != "success") $scope.active = "active";
            },500);
        });
        $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
            $scope.active = "success";
        });
        //$rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
        //    $scope.active = "error";
        //});




    });
});
