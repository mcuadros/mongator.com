define(['app'], function(app) {
    'use strict';

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

});