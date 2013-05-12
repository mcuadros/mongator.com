define(['app'], function(app) {
    'use strict';

    app.controller('HomeCtrl', ['$scope', '$github',
        function($scope, $github) {

            $github.tags($scope.config.github.owner, $scope.config.github.project, function(tags) {
                $scope.latest = tags[0];
                console.log($scope.latest);
            });
        }
    ]);
});