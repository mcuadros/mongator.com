define(['app'], function(app) {
    'use strict';

    return function($q, $route, documentation) {
        var deferred = $q.defer();
        var file = $route.current.params.file ? $route.current.params.file : 'introduction.rst';
        deferred.resolve(documentation.label(file));
        return deferred.promise;
    };
});