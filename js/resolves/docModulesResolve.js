define(['app'], function(app) {
    'use strict';

    return function($q, documentation) {
        var deferred = $q.defer();
        documentation.modules(function(modules) {
            deferred.resolve(modules);
        });
        return deferred.promise;
    };
});

