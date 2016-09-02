"use strict";

var app = angular.module("TodoApp", ["ngRoute"])
.constant("FirebaseURL", "https://fridays-project-53a9f.firebaseio.com");

app.config(function($routeProvider){
    $routeProvider.
        when('/items/list', {
            templateUrl: 'partials/item-list.html',
            controller: 'ItemListCtrl'
        }).
        when('/items/new', {
            templateUrl:'partials/item-form.html',
            controller: 'ItemNewCtrl'
        }).
        when("/items/view/:itemId", {
            templateUrl: "partials/item-details.html",
            controller: "ItemViewCtrl"
        }).
        otherwise('/items/list');
});
