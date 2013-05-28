define(['app'],function(app) {
    'use strict';

    app.controller('PageController', function($timeout, $rootScope, $scope, $routeParams, config, documentHtml, documents, docFile, docModule) {
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
        $rootScope.logo = 'active';

        //highlight.js
        $timeout(function () { $('pre > code').each(function(i, e) {hljs.highlightBlock(e)}); }, 0);
    });
});
