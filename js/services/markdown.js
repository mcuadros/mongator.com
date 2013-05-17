define(['app'], function(app) {
    'use strict';

    app.factory('markdown', function() {
        var converter = new Showdown.converter();

        return {
            converter: converter,
            from: function(md) {
                return this.converter.makeHtml(md);
            }
        }
    });
});