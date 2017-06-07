﻿'use strict';

import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import '../commons/page.js';
import '../entries/main.js';

var home = angular.module('home', [uiBootstrap, 'page', 'main']);

home.controller('homeController', ['$scope', '$http', '$rootScope', '$state', function($scope, $http, $rootScope, $state) {
  $scope.url = '/api/patient';

  $scope.patientClick = function(patient) {
    sessionStorage.setItem('patientId', patient.id);
    $scope.patientMenuClick();
    $state.go('patientInfo');
  };

  $scope.query = function() {
    $scope.url = '/api/patient/q?queryStr=' + $scope.queryStr;
  };

  $scope.all = function() {
    $scope.url = '/api/patient';
  };

  $scope.addPatient = function(){
    sessionStorage.removeItem('patientId');
    $state.go('patientInfo');
  };
}]);
