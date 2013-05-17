define(['app'], function(app) {
    'use strict';

    app.controller('HomeController', function($scope, ghTags, config) {
        $scope.latest = ghTags;
    });
});