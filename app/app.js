"use strict";

var app = angular.module("flowerPowerApp", ["ngRoute"])

app.config(function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'partials/flowers.html',
      controller: 'FlowerCtrl'
    });
});


