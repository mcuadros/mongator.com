'use strict';

require.config({
    shim:{
        'libs/angular':{
            exports:'angular'
        },
    }
});

require([
    'app',
    'routers/router',
    'controllers/body',
    'controllers/home',
    'controllers/page',
    'services/github',
    'services/markdown',
    'libs/showdown/showdown'
], function () {
    angular.bootstrap(document, ['app']);
});
