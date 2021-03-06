import angular from 'angular';
import '../entries/main.js';


angular.module('tonguePulse', ['ui.checkbox', 'main'])
  .controller('tonguePulseController', ['$scope', '$http', '$state', 'localStorageService', function($scope, $http, $state, localStorageService) {
    loginStatus();
    var isSave = false;
    $scope.judgeGoHome();
    $scope.tongueClick();
    $scope.changeMenuStatus();
    getPatientInfo();
    getTongueInfo();
    $('#datepicker').datepicker({
      autoclose: true
    });
    $scope.tongueShowClick = function() {
      if ($scope.cb10) {
        $scope.tongueShow = true;
      } else {
        $scope.tongueShow = false;
      }
    };
    $scope.mossyShowClick = function() {
      if ($scope.cb33) {
        $scope.mossyShow = true;
      } else {
        $scope.mossyShow = false;
      }
    };

    function loginStatus() {
      if (!localStorageService.get('user')) {
        window.location.href = '/login.html';
      }
    }
    $scope.tongueColorShowClick = function() {
      if ($scope.cb40) {
        $scope.tongueColorShow = true;
      } else {
        $scope.tongueColorShow = false;
      }
    };

    $scope.myConfirm = function(flag) {
      var tonguePulse = {};
      judge($scope.cb1, 1, tonguePulse);
      judge($scope.cb2, 2, tonguePulse);
      judge($scope.cb3, 3, tonguePulse);
      judge($scope.cb4, 4, tonguePulse);
      judge($scope.cb5, 5, tonguePulse);
      judge($scope.cb6, 6, tonguePulse);
      judge($scope.cb7, 7, tonguePulse);
      judge($scope.cb8, 8, tonguePulse);
      judge($scope.cb9, 9, tonguePulse);
      judge($scope.cb10, 10, tonguePulse);
      judge($scope.cb11, 11, tonguePulse);
      judge($scope.cb12, 12, tonguePulse);
      judge($scope.cb13, 13, tonguePulse);
      judge($scope.cb14, 14, tonguePulse);
      judge($scope.cb15, 15, tonguePulse);
      judge($scope.cb16, 16, tonguePulse);
      judge($scope.cb17, 17, tonguePulse);
      judge($scope.cb18, 18, tonguePulse);
      judge($scope.cb19, 19, tonguePulse);
      judge($scope.cb20, 20, tonguePulse);
      judge($scope.cb21, 21, tonguePulse);
      judge($scope.cb22, 22, tonguePulse);
      judge($scope.cb23, 23, tonguePulse);
      judge($scope.cb24, 24, tonguePulse);
      judge($scope.cb25, 25, tonguePulse);
      judge($scope.cb26, 26, tonguePulse);
      judge($scope.cb27, 27, tonguePulse);
      judge($scope.cb28, 28, tonguePulse);
      judge($scope.cb29, 29, tonguePulse);
      judge($scope.cb30, 30, tonguePulse);
      judge($scope.cb31, 31, tonguePulse);
      judge($scope.cb32, 32, tonguePulse);
      judge($scope.cb33, 33, tonguePulse);
      judge($scope.cb34, 34, tonguePulse);
      judge($scope.cb35, 35, tonguePulse);
      judge($scope.cb36, 36, tonguePulse);
      judge($scope.cb37, 37, tonguePulse);
      judge($scope.cb38, 38, tonguePulse);
      judge($scope.cb39, 39, tonguePulse);
      judge($scope.cb40, 40, tonguePulse);
      judge($scope.cb41, 41, tonguePulse);
      judge($scope.cb42, 42, tonguePulse);
      judge($scope.cb43, 43, tonguePulse);
      judge($scope.cb44, 44, tonguePulse);
      judge($scope.cb45, 45, tonguePulse);
      judge($scope.cb46, 46, tonguePulse);
      judge($scope.cb47, 47, tonguePulse);
      judge($scope.cb48, 48, tonguePulse);
      judge($scope.cb49, 49, tonguePulse);
      judge($scope.cb50, 50, tonguePulse);
      judge($scope.cb51, 51, tonguePulse);
      judge($scope.cb52, 52, tonguePulse);
      judge($scope.cb53, 53, tonguePulse);
      judge($scope.cb54, 54, tonguePulse);
      judge($scope.cb55, 55, tonguePulse);
      judge($scope.cb56, 56, tonguePulse);
      judge($scope.cb57, 57, tonguePulse);
      judge($scope.cb58, 58, tonguePulse);
      judge($scope.cb59, 59, tonguePulse);
      judge($scope.cb60, 60, tonguePulse);
      judge($scope.cb61, 61, tonguePulse);
      judge($scope.cb62, 62, tonguePulse);
      judge($scope.cb63, 63, tonguePulse);
      judge($scope.cb64, 64, tonguePulse);
      judge($scope.cb65, 65, tonguePulse);
      judge($scope.cb66, 66, tonguePulse);
      judge($scope.cb67, 67, tonguePulse);
      judge($scope.cb68, 68, tonguePulse);
      judge($scope.cb69, 69, tonguePulse);
      judge($scope.cb70, 70, tonguePulse);
      judge($scope.cb71, 71, tonguePulse);
      judge($scope.cb72, 72, tonguePulse);
      judge($scope.cb73, 73, tonguePulse);
      if (flag == 0) {
        tonguePulse.complete = false;
      } else if (flag == 1) {
        tonguePulse.complete = true;
      }
      tonguePulse.patientId = sessionStorage.getItem('patientId');
      tonguePulse.followUp = $scope.follow;
      tonguePulse.followUpDate = new Date($scope.followUpDate);
      if (!sessionStorage.getItem('followTongueId')) {
        $http({
          method: 'POST',
          url: '/api/tonguePulse',
          data: tonguePulse
        }).then(function success() {
          isSave = true;
          $scope.information = '保存成功！';
          $scope.changeMenuStatus();
          $('#infoModal').modal({
            keyboard: true
          });
        }, function fail() {
          $scope.information = '保存失败！';
          $('#infoModal').modal({
            keyboard: true
          });
        });
      } else {
        tonguePulse.followUp = true;
        tonguePulse.followUpDate = new Date($scope.followUpDate);
        tonguePulse.id = sessionStorage.getItem('followTongueId');
        $http({
          method: 'PUT',
          url: '/api/tonguePulse',
          data: tonguePulse
        }).then(function success() {
          $scope.information = '保存成功！';
          $('#infoModal').modal({
            keyboard: true
          });
        }, function fail() {
          $scope.information = '保存失败！';
          $('#infoModal').modal({
            keyboard: true
          });
        });
      }
    };

    $scope.$on('$destroy', function() {
      sessionStorage.removeItem('followTongueId');
    });

    $scope.save = function() {
      if (!($scope.cb1 || $scope.cb2 || $scope.cb3 || $scope.cb4 || $scope.cb5 || $scope.cb6 || $scope.cb7 || $scope.cb8) || !($scope.cb9 || $scope.cb10) || !($scope.cb11 || $scope.cb12 || $scope.cb13 || $scope.cb14 || $scope.cb15 || $scope.cb16 || $scope.cb17 || $scope.cb18) || !($scope.cb19 || $scope.cb20 || $scope.cb21 || $scope.cb22 || $scope.cb23 || $scope.cb24 || $scope.cb25 || $scope.cb26 || $scope.cb27 || $scope.cb28 || $scope.cb29 || $scope.cb30 || $scope.cb31) || !($scope.cb32 || $scope.cb33) || !($scope.cb34 || $scope.cb35 || $scope.cb36 || $scope.cb37 || $scope.cb38) || !($scope.cb39 || $scope.cb40) || !($scope.cb41 || $scope.cb42 || $scope.cb43) || !($scope.cb44 || $scope.cb45 || $scope.cb46 || $scope.cb47 || $scope.cb48 || $scope.cb49 || $scope.cb50 || $scope.cb51 || $scope.cb52 || $scope.cb53 || $scope.cb54 || $scope.cb55 || $scope.cb56 || $scope.cb57 || $scope.cb58) || !($scope.cb59 || $scope.cb60 || $scope.cb61 || $scope.cb62 || $scope.cb63 || $scope.cb64 || $scope.cb65 || $scope.cb66 || $scope.cb67 || $scope.cb68 || $scope.cb69 || $scope.cb70 || $scope.cb71 || $scope.cb72 || $scope.cb73)) {
        $scope.confirmInfo = '填写尚不完整，是否保存？';
        $('#confirmModal').modal({
          keyboard: true
        });
      } else if ((!$scope.tongueDescription && $scope.tongueShow) || (!$scope.mossyDes && $scope.mossyShow) || (!$scope.tongueColorDes && $scope.tongueColorShow)) {
        $scope.information = '请注明部位！';
        $('#infoModal').modal({
          keyboard: true
        });
      } else {
        $scope.myConfirm(1);
      }
    };

    $scope.next = function() {
      if (isSave) {
        $state.go('phyAChe');
      } else {
        $scope.nextInfo = '进入下一步将失去还未保存的内容，是否继续？';
        $('#nextModal').modal({
          keyboard: true
        });
      }
    };

    $scope.out = function() {
      if (isSave) {
        $state.go('home');
      } else {
        $scope.outmation = '继续退出将失去未保存的内容，是否继续';
        $('#outModel').modal({
          keyboard: true
        });
      }
    };

    $scope.outSure = function() {
      $('#outModel').modal('hide');
      $state.go('home');
    };

    $scope.confirmNext = function() {
      $('#nextModal').modal('hide');
      $state.go('phyAChe');
    };

    function getPatientInfo() {
      $http({
        method: 'GET',
        url: '/api/patient/' + sessionStorage.getItem('patientId')
      }).then(function success(response) {
        $scope.patientName = response.data.name;
        $scope.patientNumber = response.data.identifier;
      });
    }

    $scope.$watch('follow', function() {
      if ($scope.follow) {
        $scope.followDateShow = true;
        $scope.followUpDate = undefined;
        $scope.cb1 = undefined;
        $scope.cb2 = undefined;
        $scope.cb3 = undefined;
        $scope.cb4 = undefined;
        $scope.cb5 = undefined;
        $scope.cb6 = undefined;
        $scope.cb7 = undefined;
        $scope.cb8 = undefined;
        $scope.cb9 = undefined;
        $scope.cb10 = undefined;
        $scope.cb11 = undefined;
        $scope.cb12 = undefined;
        $scope.cb13 = undefined;
        $scope.cb14 = undefined;
        $scope.cb15 = undefined;
        $scope.cb16 = undefined;
        $scope.cb17 = undefined;
        $scope.cb18 = undefined;
        $scope.cb19 = undefined;
        $scope.cb20 = undefined;
        $scope.cb21 = undefined;
        $scope.cb22 = undefined;
        $scope.cb23 = undefined;
        $scope.cb24 = undefined;
        $scope.cb25 = undefined;
        $scope.cb26 = undefined;
        $scope.cb27 = undefined;
        $scope.cb28 = undefined;
        $scope.cb29 = undefined;
        $scope.cb30 = undefined;
        $scope.cb31 = undefined;
        $scope.cb32 = undefined;
        $scope.cb33 = undefined;
        $scope.cb34 = undefined;
        $scope.cb35 = undefined;
        $scope.cb36 = undefined;
        $scope.cb37 = undefined;
        $scope.cb38 = undefined;
        $scope.cb39 = undefined;
        $scope.cb40 = undefined;
        $scope.cb41 = undefined;
        $scope.cb42 = undefined;
        $scope.cb43 = undefined;
        $scope.cb44 = undefined;
        $scope.cb45 = undefined;
        $scope.cb46 = undefined;
        $scope.cb47 = undefined;
        $scope.cb48 = undefined;
        $scope.cb49 = undefined;
        $scope.cb50 = undefined;
        $scope.cb51 = undefined;
        $scope.cb52 = undefined;
        $scope.cb53 = undefined;
        $scope.cb54 = undefined;
        $scope.cb55 = undefined;
        $scope.cb56 = undefined;
        $scope.cb57 = undefined;
        $scope.cb58 = undefined;
        $scope.cb59 = undefined;
        $scope.cb60 = undefined;
        $scope.cb61 = undefined;
        $scope.cb62 = undefined;
        $scope.cb63 = undefined;
        $scope.cb64 = undefined;
        $scope.cb65 = undefined;
        $scope.cb66 = undefined;
        $scope.cb67 = undefined;
        $scope.cb68 = undefined;
        $scope.cb69 = undefined;
        $scope.cb70 = undefined;
        $scope.cb71 = undefined;
        $scope.cb72 = undefined;
        $scope.cb73 = undefined;
        $scope.tongueShow = false;
        $scope.mossyShow = false;
        $scope.tongueColorShow = false;
        $scope.tongueDescription = undefined;
        $scope.mossyDes = undefined;
        $scope.tongueColorDes = undefined;
      }
    });

    function getTongueInfo() {
      if (!sessionStorage.getItem('followTongueId')) {
        $http({
          method: 'GET',
          url: '/api/tonguePulse/' + sessionStorage.getItem('patientId')
        }).then(function success(response) {
          giveResultToScope(response);
        });
      } else {
        $http({
          method: 'GET',
          url: '/api/tonguePulse/singleFollow/' + sessionStorage.getItem('followTongueId')
        }).then(function success(response) {
          giveResultToScope(response);
        });
      }
    }

    function giveResultToScope(response) {
      $scope.followUpDate = new Date(response.data.followUpDate).getFullYear() + '-' + (new Date(response.data.followUpDate).getMonth() + 1) + '-' + new Date(response.data.followUpDate).getDate();
      if (response.data.tongue) {
        response.data.tongue.split(',').forEach(function(element) {
          if (element == '淡红') {
            $scope.cb1 = true;
          }
          if (element == '淡白') {
            $scope.cb2 = true;
          }
          if (element == '淡紫') {
            $scope.cb3 = true;
          }
          if (element == '红') {
            $scope.cb4 = true;
          }
          if (element == '绛') {
            $scope.cb5 = true;
          }
          if (element == '青') {
            $scope.cb6 = true;
          }
          if (element == '紫暗') {
            $scope.cb7 = true;
          }
          if (element == '瘀点瘀斑') {
            $scope.cb8 = true;
          }
        });
      }
      if (response.data.tonguePart) {
        response.data.tonguePart.split(',').forEach(function(element) {
          if (element == '全舌') {
            $scope.cb9 = true;
          }
          if (element == '局部') {
            $scope.cb10 = true;
          }
        });
      }
      if (response.data.tonguePartialDescription) {
        $scope.tongueShow = true;
        $scope.tongueDescription = response.data.tonguePartialDescription;
      }
      if (response.data.tongueBody) {
        response.data.tongueBody.split(',').forEach(function(element) {
          if (element == '荣') {
            $scope.cb11 = true;
          }
          if (element == '枯') {
            $scope.cb12 = true;
          }
          if (element == '瘦') {
            $scope.cb13 = true;
          }
          if (element == '胖') {
            $scope.cb14 = true;
          }
          if (element == '齿痕') {
            $scope.cb15 = true;
          }
          if (element == '点刺') {
            $scope.cb16 = true;
          }
          if (element == '裂纹') {
            $scope.cb17 = true;
          }
          if (element == '舌体瘀斑') {
            $scope.cb18 = true;
          }
        });
      }
      if (response.data.mossy) {
        response.data.mossy.split(',').forEach(function(element) {
          if (element == '薄') {
            $scope.cb19 = true;
          }
          if (element == '厚') {
            $scope.cb20 = true;
          }
          if (element == '润') {
            $scope.cb21 = true;
          }
          if (element == '少津') {
            $scope.cb22 = true;
          }
          if (element == '燥') {
            $scope.cb23 = true;
          }
          if (element == '糙') {
            $scope.cb24 = true;
          }
          if (element == '焦') {
            $scope.cb25 = true;
          }
          if (element == '枯') {
            $scope.cb26 = true;
          }
          if (element == '腻') {
            $scope.cb27 = true;
          }
          if (element == '腐') {
            $scope.cb28 = true;
          }
          if (element == '剥') {
            $scope.cb29 = true;
          }
          if (element == '类剥') {
            $scope.cb30 = true;
          }
          if (element == '无苔') {
            $scope.cb31 = true;
          }
        });
      }
      if (response.data.mossyPart) {
        response.data.mossyPart.split(',').forEach(function(element) {
          if (element == '全舌') {
            $scope.cb32 = true;
          }
          if (element == '局部') {
            $scope.cb33 = true;
          }
        });
      }
      if (response.data.mossyPartialDescription) {
        $scope.mossyShow = true;
        $scope.mossyDes = response.data.mossyPartialDescription;
      }
      if (response.data.tongueColor) {
        response.data.tongueColor.split(',').forEach(function(element) {
          if (element == '白') {
            $scope.cb34 = true;
          }
          if (element == '略黄') {
            $scope.cb35 = true;
          }
          if (element == '黄') {
            $scope.cb36 = true;
          }
          if (element == '灰') {
            $scope.cb37 = true;
          }
          if (element == '黑') {
            $scope.cb38 = true;
          }
        });
      }
      if (response.data.tongueColorPart) {
        response.data.tongueColorPart.split(',').forEach(function(element) {
          if (element == '全舌') {
            $scope.cb39 = true;
          }
          if (element == '局部') {
            $scope.cb40 = true;
          }
        });
      }
      if (response.data.tongueColorPartialDescription) {
        $scope.mossyShow = true;
        $scope.mossyDes = response.data.tongueColorPartialDescription;
      }
      if (response.data.sublingualVaricoseVeins) {
        response.data.sublingualVaricoseVeins.split(',').forEach(function(element) {
          if (element == '正常') {
            $scope.cb41 = true;
          }
          if (element == '轻微') {
            $scope.cb42 = true;
          }
          if (element == '明显') {
            $scope.cb43 = true;
          }
        });
      }
      if (response.data.leftPulse) {
        response.data.leftPulse.split(',').forEach(function(element) {
          if (element == '浮') {
            $scope.cb44 = true;
          }
          if (element == '沉') {
            $scope.cb45 = true;
          }
          if (element == '弦') {
            $scope.cb46 = true;
          }
          if (element == '滑') {
            $scope.cb47 = true;
          }
          if (element == '细') {
            $scope.cb48 = true;
          }
          if (element == '数') {
            $scope.cb49 = true;
          }
          if (element == '濡') {
            $scope.cb50 = true;
          }
          if (element == '缓') {
            $scope.cb51 = true;
          }
          if (element == '涩') {
            $scope.cb52 = true;
          }
          if (element == '迟') {
            $scope.cb53 = true;
          }
          if (element == '长') {
            $scope.cb54 = true;
          }
          if (element == '短') {
            $scope.cb55 = true;
          }
          if (element == '虚') {
            $scope.cb56 = true;
          }
          if (element == '弱') {
            $scope.cb57 = true;
          }
          if (element == '结代') {
            $scope.cb58 = true;
          }
        });
      }
      if (response.data.rightPulse) {
        response.data.rightPulse.split(',').forEach(function(element) {
          if (element == '浮') {
            $scope.cb59 = true;
          }
          if (element == '沉') {
            $scope.cb60 = true;
          }
          if (element == '弦') {
            $scope.cb61 = true;
          }
          if (element == '滑') {
            $scope.cb62 = true;
          }
          if (element == '细') {
            $scope.cb63 = true;
          }
          if (element == '数') {
            $scope.cb64 = true;
          }
          if (element == '濡') {
            $scope.cb65 = true;
          }
          if (element == '缓') {
            $scope.cb66 = true;
          }
          if (element == '涩') {
            $scope.cb67 = true;
          }
          if (element == '迟') {
            $scope.cb68 = true;
          }
          if (element == '长') {
            $scope.cb69 = true;
          }
          if (element == '短') {
            $scope.cb70 = true;
          }
          if (element == '虚') {
            $scope.cb71 = true;
          }
          if (element == '弱') {
            $scope.cb72 = true;
          }
          if (element == '结代') {
            $scope.cb73 = true;
          }
        });
      }
    }

    function judge(status, number, tonguePulse) {
      if (tonguePulse.tongue == undefined) {
        tonguePulse.tongue = '';
      }
      if (tonguePulse.tonguePart == undefined) {
        tonguePulse.tonguePart = '';
      }
      if (tonguePulse.tonguePartialDescription == undefined) {
        tonguePulse.tonguePartialDescription = '';
      }
      if (tonguePulse.tongueBody == undefined) {
        tonguePulse.tongueBody = '';
      }
      if (tonguePulse.mossy == undefined) {
        tonguePulse.mossy = '';
      }
      if (tonguePulse.mossyPart == undefined) {
        tonguePulse.mossyPart = '';
      }
      if (tonguePulse.mossyPartialDescription == undefined) {
        tonguePulse.mossyPartialDescription = '';
      }
      if (tonguePulse.tongueColor == undefined) {
        tonguePulse.tongueColor = '';
      }
      if (tonguePulse.tongueColorPart == undefined) {
        tonguePulse.tongueColorPart = '';
      }
      if (tonguePulse.tongueColorPartialDescription == undefined) {
        tonguePulse.tongueColorPartialDescription = '';
      }
      if (tonguePulse.sublingualVaricoseVeins == undefined) {
        tonguePulse.sublingualVaricoseVeins = '';
      }
      if (tonguePulse.leftPulse == undefined) {
        tonguePulse.leftPulse = '';
      }
      if (tonguePulse.rightPulse == undefined) {
        tonguePulse.rightPulse = '';
      }
      if (number == 1 && status == true) {
        tonguePulse.tongue += ',淡红';
        return;
      }
      if (number == 2 && status == true) {
        tonguePulse.tongue += ',淡白';
        return;
      }
      if (number == 3 && status == true) {
        tonguePulse.tongue += ',淡紫';
        return;
      }
      if (number == 4 && status == true) {
        tonguePulse.tongue += ',红';
        return;
      }
      if (number == 5 && status == true) {
        tonguePulse.tongue += ',绛';
        return;
      }
      if (number == 6 && status == true) {
        tonguePulse.tongue += ',青';
        return;
      }
      if (number == 7 && status == true) {
        tonguePulse.tongue += ',紫暗';
        return;
      }
      if (number == 8 && status == true) {
        tonguePulse.tongue += ',瘀点瘀斑';
        return;
      }
      if (number == 9 && status == true) {
        tonguePulse.tonguePart += ',全舌';
        return;
      }
      if (number == 10 && status == true) {
        tonguePulse.tonguePart += ',局部';
        tonguePulse.tonguePartialDescription = $scope.tongueDescription;
        return;
      }
      if (number == 11 && status == true) {
        tonguePulse.tongueBody += ',荣';
        return;
      }
      if (number == 12 && status == true) {
        tonguePulse.tongueBody += ',枯';
        return;
      }
      if (number == 13 && status == true) {
        tonguePulse.tongueBody += ',瘦';
        return;
      }
      if (number == 14 && status == true) {
        tonguePulse.tongueBody += ',胖';
        return;
      }
      if (number == 15 && status == true) {
        tonguePulse.tongueBody += ',齿痕';
        return;
      }
      if (number == 16 && status == true) {
        tonguePulse.tongueBody += ',点刺';
        return;
      }
      if (number == 17 && status == true) {
        tonguePulse.tongueBody += ',裂纹';
        return;
      }
      if (number == 18 && status == true) {
        tonguePulse.tongueBody += ',舌体瘀斑';
        return;
      }
      if (number == 19 && status == true) {
        tonguePulse.mossy += ',薄';
        return;
      }
      if (number == 20 && status == true) {
        tonguePulse.mossy += ',厚';
        return;
      }
      if (number == 21 && status == true) {
        tonguePulse.mossy += ',润';
        return;
      }
      if (number == 22 && status == true) {
        tonguePulse.mossy += ',少津';
        return;
      }
      if (number == 23 && status == true) {
        tonguePulse.mossy += ',燥';
        return;
      }
      if (number == 24 && status == true) {
        tonguePulse.mossy += ',糙';
        return;
      }
      if (number == 25 && status == true) {
        tonguePulse.mossy += ',焦';
        return;
      }
      if (number == 26 && status == true) {
        tonguePulse.mossy += ',枯';
        return;
      }
      if (number == 27 && status == true) {
        tonguePulse.mossy += ',腻';
        return;
      }
      if (number == 28 && status == true) {
        tonguePulse.mossy += ',腐';
        return;
      }
      if (number == 29 && status == true) {
        tonguePulse.mossy += ',剥';
        return;
      }
      if (number == 30 && status == true) {
        tonguePulse.mossy += ',类剥';
        return;
      }
      if (number == 31 && status == true) {
        tonguePulse.mossy += ',无苔';
        return;
      }
      if (number == 32 && status == true) {
        tonguePulse.mossyPart += ',全舌';
        return;
      }
      if (number == 33 && status == true) {
        tonguePulse.mossyPart += ',局部';
        tonguePulse.mossyPartialDescription = $scope.mossyDes;
        return;
      }
      if (number == 34 && status == true) {
        tonguePulse.tongueColor += ',白';
        return;
      }
      if (number == 35 && status == true) {
        tonguePulse.tongueColor += ',略黄';
        return;
      }
      if (number == 36 && status == true) {
        tonguePulse.tongueColor += ',黄';
        return;
      }
      if (number == 37 && status == true) {
        tonguePulse.tongueColor += ',灰';
        return;
      }
      if (number == 38 && status == true) {
        tonguePulse.tongueColor += ',黑';
        return;
      }
      if (number == 39 && status == true) {
        tonguePulse.tongueColorPart += ',全舌';
        return;
      }
      if (number == 40 && status == true) {
        tonguePulse.tongueColorPart += ',局部';
        tonguePulse.tongueColorPartialDescription = $scope.tongueColorDes;
        return;
      }
      if (number == 41 && status == true) {
        tonguePulse.sublingualVaricoseVeins += ',正常';
        return;
      }
      if (number == 42 && status == true) {
        tonguePulse.sublingualVaricoseVeins += ',轻微';
        return;
      }
      if (number == 43 && status == true) {
        tonguePulse.sublingualVaricoseVeins += ',明显';
        return;
      }
      if (number == 44 && status == true) {
        tonguePulse.leftPulse += ',浮';
        return;
      }
      if (number == 45 && status == true) {
        tonguePulse.leftPulse += ',沉';
        return;
      }
      if (number == 46 && status == true) {
        tonguePulse.leftPulse += ',弦';
        return;
      }
      if (number == 47 && status == true) {
        tonguePulse.leftPulse += ',滑';
        return;
      }
      if (number == 48 && status == true) {
        tonguePulse.leftPulse += ',细';
        return;
      }
      if (number == 49 && status == true) {
        tonguePulse.leftPulse += ',数';
        return;
      }
      if (number == 50 && status == true) {
        tonguePulse.leftPulse += ',濡';
        return;
      }
      if (number == 51 && status == true) {
        tonguePulse.leftPulse += ',缓';
        return;
      }
      if (number == 52 && status == true) {
        tonguePulse.leftPulse += ',涩';
        return;
      }
      if (number == 53 && status == true) {
        tonguePulse.leftPulse += ',迟';
        return;
      }
      if (number == 54 && status == true) {
        tonguePulse.leftPulse += ',长';
        return;
      }
      if (number == 55 && status == true) {
        tonguePulse.leftPulse += ',短';
        return;
      }
      if (number == 56 && status == true) {
        tonguePulse.leftPulse += ',虚';
        return;
      }
      if (number == 57 && status == true) {
        tonguePulse.leftPulse += ',弱';
        return;
      }
      if (number == 58 && status == true) {
        tonguePulse.leftPulse += ',结代';
        return;
      }
      if (number == 59 && status == true) {
        tonguePulse.rightPulse += ',浮';
        return;
      }
      if (number == 60 && status == true) {
        tonguePulse.rightPulse += ',沉';
        return;
      }
      if (number == 61 && status == true) {
        tonguePulse.rightPulse += ',弦';
        return;
      }
      if (number == 62 && status == true) {
        tonguePulse.rightPulse += ',滑';
        return;
      }
      if (number == 63 && status == true) {
        tonguePulse.rightPulse += ',细';
        return;
      }
      if (number == 64 && status == true) {
        tonguePulse.rightPulse += ',数';
        return;
      }
      if (number == 65 && status == true) {
        tonguePulse.rightPulse += ',濡';
        return;
      }
      if (number == 66 && status == true) {
        tonguePulse.rightPulse += ',缓';
        return;
      }
      if (number == 67 && status == true) {
        tonguePulse.rightPulse += ',涩';
        return;
      }
      if (number == 68 && status == true) {
        tonguePulse.rightPulse += ',迟';
        return;
      }
      if (number == 69 && status == true) {
        tonguePulse.rightPulse += ',长';
        return;
      }
      if (number == 70 && status == true) {
        tonguePulse.rightPulse += ',短';
        return;
      }
      if (number == 71 && status == true) {
        tonguePulse.rightPulse += ',虚';
        return;
      }
      if (number == 72 && status == true) {
        tonguePulse.rightPulse += ',弱';
        return;
      }
      if (number == 73 && status == true) {
        tonguePulse.rightPulse += ',结代';
        return;
      }
    }
  }]);