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
    'config',
    'routers/router',
    'controllers/body',
    'controllers/home',
    'controllers/page',
    'controllers/progress',
    'resolves/docFileResolve',
    'resolves/docModuleResolve',
    'resolves/docModulesResolve',
    'resolves/documentHtmlResolve',
    'resolves/documentsResolve',
    'resolves/ghTagsResolve',
    'resolves/ghUserResolve',
    'services/documentation',
    'services/github',
    'services/markdown',
    'libs/showdown/showdown'
], function () {
    angular.bootstrap(document, ['app']);
});
