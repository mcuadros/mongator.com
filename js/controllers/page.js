define(['app'], function(app) {
  'use strict';

    app.controller('DocumentCtrl', ['$scope', '$github', '$routeParams',
        function($scope, $github, $routeParams) {
            var file = $routeParams.file;
            var folder = $routeParams.folder;

            $github.file('mcuadros', 'mandango-docs', folder + '/' + file, function(html) {
                $scope.document = html;
            });

            $github.list('mcuadros', 'mandango-docs', folder, function(documents) {
                $scope.documents = documents;
            });
        }
    ]);
});
