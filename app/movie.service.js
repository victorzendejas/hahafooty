(function() {
    'use strict';

    angular
        .module('app')
        .service('movieService', movieService);

    movieService.$inject = ['$http', '$q'];

    /* @ngInject */
    function movieService($http, $q) {
        this.getDetails = getDetails;
        this.getMovies = getMovies;


        // var service = {
        //     getMovie: getMovie,
        //     getMovieDetail: getMovieDetail
        // };


        // return service;

        ////////////////

        function getMovies(search) {

            var defer = $q.defer();

            $http({
                    method: 'GET',
                    url: 'http://www.omdbapi.com/',
                    params: {
                        s: search

                    }
                })
                .then(
                    function(result) {
                        if (typeof result === 'object') {
                            defer.resolve(result);


                        } else {
                            defer.reject('servive error');
                        }
                    },
                    // failure
                    function(error) {
                        defer.reject(error);

                    });

            return defer.promise;
        }



        // Get the details from the specific movie
        function getDetails(info) {
            var defer = $q.defer();
            // using the 'get' function to pull up all the data for info
            $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params: {

                    i: info
                }
            }).then(function(result) {
                    if (typeof result === 'object') {
                        defer.resolve(result);
                    } else {
                        defer.reject('service error');
                    }
                },
                function(error) {
                    defect.reject(error);
                });
            return defer.promise;
        }
    }
})();
