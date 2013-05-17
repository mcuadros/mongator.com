define(['app'], function(app) {
    'use strict';

    return function($q, $route, documentation) {
        var deferred = $q.defer();
        var module = $route.current.params.folder;
        deferred.resolve(documentation.label(module));
        return deferred.promise;
    };
});

