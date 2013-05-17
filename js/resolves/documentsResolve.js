define(['app'], function(app) {
    'use strict';

    return function($q, $route, documentation) {
        var deferred = $q.defer();
        var module = $route.current.params.folder;
        documentation.documents(module, function(documents) {
            deferred.resolve(documents);
        });
        return deferred.promise;
    };
});