define(['app'], function(app) {
    'use strict';

    return function($q, $route, documentation) {
        var deferred = $q.defer();
        if ( $route.current.params.file ) var file = $route.current.params.file;
        else var file = 'introduction.rst';
        var route = $route.current.params.folder + '/' + file;
        documentation.document(route, function(html) {
            deferred.resolve(html);
        });
        return deferred.promise;
    };
});

