(function() {
    'use strict';

    angular
        .module('app')
        .controller('searchCtrl', searchCtrl);

    searchCtrl.$inject = ['movieService'];

    /* @ngInject */
    function searchCtrl(movieService) {
        var vm = this;
        vm.title = 'movieService';
        vm.input;
        vm.all;



        ////////////////
        vm.showMovies = function(search) {
            movieService.getMovies(search).then(
                function(result) {
                    vm.all = result.data.Search;
                }
            )
        }
    }
})();
// -CW, EP, BS, VZ
