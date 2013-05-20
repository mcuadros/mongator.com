define(['app'], function(app) {
    'use strict';

    app.controller('HomeController', function($rootScope, $scope, ghTags, config) {
        $scope.latest = ghTags;

        $rootScope.logo = 'hidden';
    });
});