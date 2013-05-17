define(['app'], function(app) {
  'use strict';

    app.controller('BodyController', function($scope, $location, config, github, documentation) {
        $scope.isLinkCurrent = function(path) {
            return path === $location.path();
        }
        $scope.header = {
            github: github.user(config.github.owner)
        };
        documentation.modules(function(modules) {
            $scope.header.modules = modules;
        });

        $scope.config = config;


    });
});
