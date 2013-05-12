define(['app'], function (app) {
  'use strict';

    app.controller('BodyController', function ($scope, $github, $documentation, $location) {
        $scope.isLinkCurrent = function (path) {
            return path === $location.path();
        }

        $scope.header = {
            github: $github.user($scope.config.github.owner)
        };

        $documentation.modules(function(modules) {
            $scope.header.modules = modules;
        });
    });
});
