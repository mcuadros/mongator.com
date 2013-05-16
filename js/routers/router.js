define(['app'], function (app) {
  'use strict';

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/doc/:folder', {
                controller: 'DocumentCtrl',
                templateUrl: 'js/templates/page/default.html'
            })
            .when('/doc/:folder/:file', {
                controller: 'DocumentCtrl',
                templateUrl: 'js/templates/page/default.html'
            })
            .when('/', {
                controller: 'HomeCtrl',
                templateUrl: 'js/templates/home/default.html'
            })
            .otherwise({
                redirectTo: '/'
            });
        }
    );

    app.run(function ($rootScope) {
        $rootScope.config = {
            project: 'Mongator ODM',
            tagline: 'small, fast & simple mongodb ODM for PHP',
            github: {
                owner: 'mongator',
                project: 'mongator',
                documentation: 'documentation'
            }
        };
    });
});