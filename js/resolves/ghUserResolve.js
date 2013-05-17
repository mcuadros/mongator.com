define(['app'], function(app) {
    'use strict';

    return function($q, github, config) {
        var deferred = $q.defer();
        deferred.resolve(github.user(config.github.owner));
        return deferred.promise;
    };
});