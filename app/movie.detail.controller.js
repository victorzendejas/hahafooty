(function() {
    'use strict';

    angular
        .module('app')
        .controller('detailCtrl', detailCtrl);

    detailCtrl.$inject = ['movieService', '$stateParams'];

    /* @ngInject */
    function detailCtrl(movieService, $stateParams) {
        params: { imdb: $stateParams.imdb };
        var vm2 = this;
        vm2.title = 'detailCtrl';
        vm2.moreDetail;
        var imdb = $stateParams.imdb;


        // getting all the IMDB details 
        vm2.showDetails = function(detail) {

            movieService.getDetails(detail).then(
                function(result) {
                    vm2.moreDetail = result.data;
                    vm2.movieTitle = vm2.moreDetail.Title;
                },
                function(error) {

                }
            )
        }

        function activate() {
            vm2.showDetails(imdb);
        }
        activate();

    }
})();
