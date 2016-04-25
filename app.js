var app = angular.module("Route", ["ngRoute"])

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.
        when("/",
        {
            // controller: "RouteController",
            templateUrl: "/partials/list.html"
        })
        .when("/new",
        {
            controller: "NewController",
            templateUrl: "/partials/edit.html"
        })
        .when("/edit/:id",
        {
            templateUrl: "/partials/edit.html",
            controller: "EditController"
        })
        .otherwise({ redirectTo: "/" });
})