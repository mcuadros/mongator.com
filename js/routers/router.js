define(
    [
        'app',
        'resolves/docFileResolve',
        'resolves/docModuleResolve',
        'resolves/documentHtmlResolve',
        'resolves/documentsResolve',
        'resolves/ghTagsResolve'
    ], function (
        app,
        docFileResolve,
        docModuleResolve,
        documentHtmlResolve,
        documentsResolve,
        ghTagsResolve
    ) {
  'use strict';

    app.config(function($routeProvider) {
        $routeProvider.when('/doc/:folder', {
                controller: 'PageController',
                templateUrl: 'js/templates/page/default.html',
                resolve: {
                    documentHtml: documentHtmlResolve,
                    documents: documentsResolve,
                    docFile: docFileResolve,
                    docModule: docModuleResolve
                }
            });
        $routeProvider.when('/doc/:folder/:file', {
            controller: 'PageController',
            templateUrl: 'js/templates/page/default.html',
            resolve: {
                documentHtml: documentHtmlResolve,
                documents: documentsResolve,
                docFile: docFileResolve,
                docModule: docModuleResolve
            }
        });
        $routeProvider.when('/', {
            controller: 'HomeController',
            templateUrl: 'js/templates/home/default.html',
            resolve: {ghTags:ghTagsResolve}
        });
        $routeProvider.otherwise({
                redirectTo: '/'
        });
    });
});