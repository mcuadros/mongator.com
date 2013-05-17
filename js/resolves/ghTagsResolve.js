define(['app'], function(app) {
    'use strict';

    return function($q, github, config) {
        var deferred = $q.defer();
        github.tags(config.github.owner, config.github.project, function(tags) {
            deferred.resolve(tags[0]);
        });
        return deferred.promise;
    };
});

