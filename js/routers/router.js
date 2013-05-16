define(['app'], function (app) {
  'use strict';

    app.config(function($routeProvider) {
        $routeProvider
            .when('/doc/:folder', {
                controller: 'DocumentCtrl',
                templateUrl: 'js/templates/page/default.html',
                resolve: 'loadResolve'
            })
            .when('/doc/:folder/:file', {
                controller: 'DocumentCtrl',
                templateUrl: 'js/templates/page/default.html',
                resolve: 'loadResolve'
            })
            .when('/', {
                controller: 'HomeCtrl',
                templateUrl: 'js/templates/home/default.html',
                resolve: 'loadResolve'
            })
            .otherwise({
                redirectTo: '/'
            });
        }
    );
});