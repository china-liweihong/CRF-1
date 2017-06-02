﻿'use strict';

import angular from 'angular';

var patientInfo = angular.module('patientInfo', []);

patientInfo.controller('patientInfoController', ['$scope', '$http', '$state', function($scope, $http, $state) {

  var patient = {};

  $('#datepicker').datepicker({
    autoclose: true
  });

  $('#datepicker2').datepicker({
    autoclose: true
  });

  //新建
  // $http({
  //   method:'POST',
  //   url:''
  // }).then(function(){
  //   alert('post successed!!');
  // });
  //save button

  //姓名失焦事件
  $scope.judgeName = function() {
    if($scope.name == undefined || $scope.name == '') {
      $('#inputName').removeAttr('data-content');
      $('#inputName').attr('data-content', '不能为空');
      $('#inputName').popover('show');
    }else if($scope.name.length < 2 || $scope.name.length >10) {
      $('#inputName').removeAttr('data-content');
      $('#inputName').attr('data-content', '长度不符合要求');
      $('#inputName').popover('show');
    }else{
      $('#inputName').removeAttr('data-content');
      $('#inputName').attr('data-content', '');
    }
  };

  //姓名失焦事件
  // $scope.judgeGender = function() {
  //   if($scope.gender == undefined || $scope.gender == '') {
  //     $('#inputGender').removeAttr('data-content');
  //     $('#inputGender').attr('data-content', '不能为空');
  //     $('#inputGender').popover('show');
  //   }else if($scope.gender.length < 2 || $scope.gender.length >10) {
  //     $('#inputGenderinputGender').removeAttr('data-content');
  //     $('#inputGender').attr('data-content', '长度不符合要求');
  //     $('#inputGender').popover('show');
  //   }else{
  //     $('#inputGender').removeAttr('data-content');
  //     $('#inputGender').attr('data-content', '');
  //   }
  // };

  $scope.showNextModel = function(){
    $('#myModal').modal('show');
  };

  $scope.showExistModal = function(){
    $('#existModal').modal('show');
  };

  $scope.exsitEdit = function(){
    $('#existModal').modal('toggle');
    // window.location.href = index.html;
    setTimeout(function () {
      $state.go('home');
    }, 1000);
  };

  // 06/14/2017 ==> 2017-06-14
  function formatDateFromBack(date) {
    var dateArr = date.split('/');
    var year = dateArr[2];
    var month = dateArr[0];
    var day = dateArr[1];
    return year + '-' + month + '-' + day;
  }

  //保存 --> 确定  按钮
  $scope.commit = function() {
    patient.name = $scope.name;
    patient.gender = $scope.gender;
    patient.age = $scope.age;
    patient.height = $scope.height;
    patient.weight = $scope.weight;
    patient.smoke = $scope.smoke;
    patient.drink = $scope.drink;
    patient.familyHistory = $scope.familyHistory;
    patient.hepatitisDiagnosisTime = formatDateFromBack($scope.hepatitisDiagnosisTime);
    patient.cirrhosisDiagnosisTime = formatDateFromBack($scope.cirrhosisDiagnosisTime);
    patient.westernMedicineDiagnosis = $scope.westernMedicineDiagnosis;
    patient.chineseMedicineDiagnosis = $scope.chineseMedicineDiagnosis;
    patient.westernMedicineTreatment = $scope.westernMedicineTreatment;
    patient.chineseMedicineTreatment = $scope.chineseMedicineTreatment;
    // console.log('$scope.smoke ==>' + $scope.smoke);
    $http({
      method:'POST',
      url:'/api/patient',
      data: patient
    }).then(function(response) {
      sessionStorage.setItem('patientId', response.data);

    });
  };
}]);
