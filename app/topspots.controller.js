(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('TopSpotsController', TopSpotsController);

    TopSpotsController.$inject = ['$http'];
    /* @ngInject */
    function TopSpotsController($http) {
        var vm = this;
        vm.title = 'TopSpotsController';
        activate();
        ////////////////
        function activate() {
            $http({
                method: "GET",
                url: "http://localhost:54777/api/topspots"
            }).then(function(response) {
                vm.topspots = response.data;
            });
        }
    }
})();
