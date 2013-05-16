define(['app'], function(app) {
    'use strict';

    app.controller('HomeCtrl', function($scope, github, config) {
        github.tags(config.github.owner, config.github.project, function(tags) {
            $scope.latest = tags[0];
        });
    });
});