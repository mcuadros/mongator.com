'use strict';

/* App Module */

var app = angular.module('phonecat', ['phonecatFilters']);

app.config(['$routeProvider', function($routeProvider, $httpProvider) {
    $routeProvider.
        when('/doc/:folder/:file', {templateUrl: 'partials/doc.html',   controller: DocumentCtrl}).
        otherwise({redirectTo: '/phones'});
}]);




//service style, probably the simplest one
app.factory('$github', ['$http', '$markdown', function($http, $markdown) {
    return {
        url:  'https://api.github.com',
        _path: function(user, repository, route) {
            return this.url + '/repos/' + user + '/' + repository + '/contents/' +  route;
        },
        list: function(user, repository, folder, cb) {
            $http.get(this._path(user, repository, folder)).success(
                function (data, status) {
                    var documents = [];
                    for (var i = data.length - 1; i >= 0; i--) {
                        documents.push({
                            folder: folder,
                            filename: data[i].name,
                            name: data[i].name
                        });
                    };

                    cb(documents);
                }   
            );
        },
        file: function(user, repository, file, cb) {
            $http.get(this._path(user, repository, file)).success(
                function (data, status) {
                    var input = data.content;
                    if (!input) return false;

                    input = input.replace(/\s/g, '');
                    cb($markdown.from(
                        atob(input)
                    ));
                }
            );
        }
    }
}]);

app.factory('$markdown', function($http) {
    var converter = new Showdown.converter();

    return {
        converter: converter,
        from: function(markdown) {
            return this.converter.makeHtml(markdown);
        }
    }
});