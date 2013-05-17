define(['app'], function(app) {
    'use strict';

    app.factory('documentation', function($rootScope, github, config) {
        return {
            label: function(filename) {
                var words = []
                filename.split('.')[0].split('-').forEach(function(word) {
                    words.push(word.charAt(0).toUpperCase() + word.slice(1));
                });

                return words.join(' ');
            },
            modules: function(cb) {
                var self = this;
                github.list(config.github.owner, config.github.documentation, '/', function(documents) {
                    var modules = [];
                    for (var i = documents.length - 1; i >= 0; i--) {
                        if ( documents[i].type == 'dir' && documents[i].name != 'images' ) {
                            documents[i].label = self.label(documents[i].name);
                            modules.push(documents[i]);
                        }
                    };

                    cb(modules)
                });
            },
            documents: function(module, cb) {
                var self = this;
                github.list(config.github.owner, config.github.documentation, module, function(documents) {
                    var modules = [];
                    for (var i = documents.length - 1; i >= 0; i--) {
                        if ( documents[i].type == 'file' ) {
                            documents[i].label = self.label(documents[i].name);
                            modules.push(documents[i]);
                        }
                    };

                    cb(modules)
                });
            },
            document: function(file, cb) {
                github.file(config.github.owner, config.github.documentation, file, function(html) {
                    cb(html)
                });
            },
        }
    });

});