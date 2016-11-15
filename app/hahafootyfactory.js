(function() {
    'use strict';

    angular
        .module('app')
        .factory('EPLFactory', EPLFactory);

    EPLFactory.$inject = ['$http'];

    /* @ngInject */
    function EPLFactory($http) {
        var service = {
            getEPL: getEPL
                // getEPLfixtures: getEPLfixtures,
                // getEPLresults: getEPLresults,
                // getEPLteamInfo: getEPLteamInfo

        };
        return service;


        ////////////////

        function getEPL() {

            return $http({
                method: 'GET',
                url: 'http://soccer.sportsopendata.net/v1/leagues/premier-league/seasons/16-17/standings'
            }).then(function(response) {

                return response.data;

            });
        }
    }
})();
