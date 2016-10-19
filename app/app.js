(function() {
    'use strict';


    var app = angular
        .module('app', ['ui.router'])
        .config(function($urlRouterProvider, $stateProvider) {

            $urlRouterProvider.otherwise('/search');

            $stateProvider
                .state('search', {
                    url: '/search',
                    templateUrl: 'app/movie.search.html',
                    controller: 'searchCtrl',
                    controllerAs: 'vm'
                })
                .state('detail', {
                    url: '/detail/:imdb',
                    templateUrl: 'app/movie.detail.html',
                    controller: 'detailCtrl',
                    controllerAs: 'vm2'
                })
        });
})();
// -CW, EP, BS, VZ
