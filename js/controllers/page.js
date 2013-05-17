define(['app'],function(app) {
    'use strict';

    app.controller('PageController', function($scope, $routeParams, documentHtml, documents, docFile, docModule) {
        var module = $routeParams.folder;
        var file = 'introduction.rst';
        if ( $routeParams.file ) file = $routeParams.file;
        var route = module + '/' + file;

        $scope.document = documentHtml;
        $scope.documents = documents;

        $scope.current = {
            file: docFile,
            module: docModule
        };
    });
});
