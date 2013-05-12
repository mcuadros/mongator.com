define(['app'], function(app) {
    'use strict';

    app.factory('$github', ['$http', '$markdown', function($http, $markdown) {
        return {
            api: 'https://api.github.com',
            site: 'http://github.com',

            contents: function(user, repository, route) {
                return this.api + '/repos/' + user + '/' + repository + '/contents/' +  route;
            },
            refs: function(user, repository) {
                return this.api + '/repos/' + user + '/' + repository + '/git/refs/tags';
            },
            user: function(user) {
                return this.site + '/' + user;
            },
            zip: function(user, repository, tag) {
                return this.site + '/' + user + '/' + repository + '/archive/' + tag + '.zip';
            },

            tags: function(user, repository, cb) {
                self = this;
                
                $http.get(this.refs(user, repository), {
                    cache: true,
                    withCredentials: false
                }).success(
                    function (data, status) {
                        var tags = [];
                        for (var i = data.length - 1; i >= 0; i--) {
                            if ( data[i].object.type == 'tag' ) {
                                var label = data[i].ref.split('/')[2];
                                tags.push({
                                    label: label,
                                    zip: self.zip(user, repository, label),
                                    ref: data[i].ref,
                                    url: data[i].url,
                                }); 
                            }
                        };

                        cb(tags);
                    }   
                );
            },
            list: function(user, repository, folder, cb) {
                $http.get(this.contents(user, repository, folder), {
                    cache: true,
                    withCredentials: false
                }).success(
                    function (data, status) {
                        var documents = [];
                        for (var i = data.length - 1; i >= 0; i--) {
                            documents.push({
                                folder: folder,
                                name: data[i].name,
                                type: data[i].type,
                            });
                        };

                        cb(documents);
                    }   
                );
            },
            file: function(user, repository, file, cb) {
                $http.get(this.contents(user, repository, file), {
                    cache: true,
                    withCredentials: false
                }).success(
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