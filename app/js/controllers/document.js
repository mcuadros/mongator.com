'use strict';

function DocumentCtrl($scope, $routeParams, $http, $github ) {
    var file = $routeParams.file;
    var folder = $routeParams.folder;

    $github.file('mcuadros', 'mandango-docs', folder + '/' + file, function(html) {
        $scope.document = html;
    });

    $github.list('mcuadros', 'mandango-docs', folder, function(documents) {
        $scope.documents = documents;
    });
} 

//DocumentCtrl.$inject = ['$github'];